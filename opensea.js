const initCycleTLS = require("cycletls");
const randomUseragent = require("random-useragent");
const config = require("./config.js");
//

const userAgent = randomUseragent.getRandom(function (ua) {
   return ua.browserName === "Firefox";
});

async function getCollectionData(collection, options) {
   /**
    * Magic happens here!
    * A custom fetch() function to get the data.
    * Based on the GraphQL query.
    */
   try {
      const cycleTLS = await initCycleTLS();
      const pageNumber = options?.page || 0;
      const cursor = Buffer.from(
         "arrayconnection:" + (pageNumber * 20 + 9).toString()
      ).toString("base64");

      // Send request
      const response = await cycleTLS(
         "https://opensea.io/__api/graphql/",
         {
            body: JSON.stringify({
               id: "AssetSearchCollectionQuery",
               query: config.graphQlQuery1,
               variables: {
                  categories: null,
                  chains: null,
                  collection: collection, //"abcabracadabra",
                  collectionQuery: null,
                  collectionSortBy: null,
                  collections: [collection],
                  count: 20, // max is 32
                  cursor: cursor,
                  includeHiddenCollections: null,
                  numericTraits: null,
                  paymentAssets: null,
                  priceFilter: null,
                  query: "",
                  resultModel: "ASSETS",
                  showContextMenu: false,
                  sortAscending: false,
                  sortBy: "CREATED_DATE",
                  stringTraits: null,
                  toggles: null,
                  creator: null,
                  assetOwner: null,
                  isPrivate: null,
                  isAutoHidden: null,
                  safelistRequestStatuses: null,
                  prioritizeBuyNow: true,
                  rarityFilter: null,
               },
            }),
            ja3: config.ja3Fingerprint,
            userAgent: userAgent,
            headers: {
               "User-Agent": userAgent,
               Accept: "*/*",
               "Accept-Language": "en-GB,en;q=0.5",
               "X-BUILD-ID": "d9716b4261c3de1874026e5b85912c086dcede9b",
               "x-app-id": "opensea-web",
               "x-signed-query":
                  "2fc38ba7103eeb8fb55fdca060ced3900d9f76a780c783afb8e269bdd3838c05",
               "Content-Type": "application/json",
               "Sec-Fetch-Dest": "empty",
               "Sec-Fetch-Mode": "cors",
               "Sec-Fetch-Site": "same-origin",
            },
            proxy: options?.proxy || false,
         },
         "get"
      );
      const data = response.body?.data;

      // Cleanly exit CycleTLS
      cycleTLS.exit();
      return data;
   } catch (error) {
      console.error(error);
      return false;
   }
}

async function getAllData(collection, options) {
   var totalCount = 0;
   var totalPages = 0;
   const dataAll = [];
   console.log("options", options);

   try {
      const data = await getCollectionData(collection, (options = options));

      if (data?.query?.search?.totalCount !== 0) {
         totalCount = parseInt(data?.query?.search?.totalCount);

         totalPages = parseInt(
            parseFloat(data?.query?.search?.totalCount) / 20 
         );
      }

      if (data) {
         const collectionsRaw = data.query.search.edges;

         collectionsRaw.map(function (element) {
            // Feel free to add/remove data here
            const row = {
               name: element.node.name,
               displayName: element.node?.displayName,
               displayImageURL: element.node.displayImageUrl,
               imageURL: element.node.imageUrl,
               slug: element.node.collection?.slug,
               chain: element.node?.chain.identifier,
               contract: element.node.assetContract.address,
               tokenId: element.node.tokenId,
            };
            if (options?.extra) {
               row.extra = { ...element.node };
            }
            dataAll.push(row);
         });
      }
      console.log("dataAll", dataAll.length);
      const reponse = {
         data: dataAll,
         totalPages: totalPages,
         totalCount: totalCount,
      };
      return reponse;
   } catch (error) {
      console.log(error);
   }
}

module.exports = { getAllData };
