/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
const opensea = require("./opensea");
let logger = console;
// --------------------------------------------------------
async function getData(req, res) {
   /**
    * The main function
    * Make sure to make it the man function at the Google function.
    */
   let query = req.query; // req.body?.keyword;
   console.log("query :", query);
   console.log("collectionId  :", req.params?.collectionId);

   try {
      let openseaData = await opensea.getAllData(
         (collection = req.params?.collectionId),
         (options = {
            extra: false,
            proxy: false,
            maxPages: false,
            page: query?.page || 0,
         })
      );
      res.send({
         ...openseaData,
         params: req.args,
         success: true,
      });
   } catch (error) {
      console.error(error);
      res.send({
         query: query,
         data: rows,
         success: false,
      });
   }
}

function getDefault(req, res) {
   res.status(404).send("Not found, 404");
}

// Create an Express object
const app = express();
app.use(express.json());
// routes (in order)
app.use("/v1/collections/:collectionId", getData);
app.use("/v1/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(getDefault);

// Set the GCF handler to our Express app.
exports.main = app;

let port = process.env.PORT || 8080;

app.listen(port, () => {
   logger.info(`app listening at http://localhost:${port}/v1/api-docs/`);
});

process.on("SIGINT", function () {
   console.log("\nGracefully shutting down from SIGINT (Ctrl-C)");
   // some other closing procedures go here
   process.exit(0);
});
