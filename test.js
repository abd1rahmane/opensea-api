const opensea = require("./opensea");



(async () => {
    const data = await opensea.getAllData(
        (collection = "fngrz"),
        (options = {
           extra: false,
           proxy: false,
           maxPages: false,
           cursor: null,
           page: 3
        ,
        })
     );
     console.log(data)
})();