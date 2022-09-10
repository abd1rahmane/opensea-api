const graphQlQuery1 = `query AssetSearchCollectionQuery(
    $collection: CollectionSlug
    $collections: [CollectionSlug!]
    $count: Int
    $cursor: String
    $numericTraits: [TraitRangeType!]
    $paymentAssets: [PaymentAssetSymbol!]
    $priceFilter: PriceFilterType
    $query: String
    $resultModel: SearchResultModel
    $showContextMenu: Boolean = false
    $sortAscending: Boolean
    $sortBy: SearchSortBy
    $stringTraits: [TraitInputType!]
    $toggles: [SearchToggle!]
    $isAutoHidden: Boolean
    $safelistRequestStatuses: [SafelistRequestStatus!]
    $prioritizeBuyNow: Boolean = false
    $rarityFilter: RarityFilterType
  ) {
    query {
      ...AssetSearchCollection_data_11pQ3o
    }
  }
  fragment AssetCardAddToCartButton_asset on AssetType {
    tokenId
    relayId
    assetContract {
      address
      id
    }
    orderData {
      bestAskV2 {
        ...ShoppingCart_inline_order
        id
      }
    }
  }
  fragment AssetCardBuyNow_data on AssetType {
    tokenId
    relayId
    assetContract {
      address
      chain
      id
    }
    orderData {
      bestAskV2 {
        relayId
        priceType {
          usd
        }
        id
      }
    }
  }
  fragment AssetContextMenu_data on AssetType {
    ...asset_edit_url
    ...asset_url
    relayId
    isDelisted
    creator {
      address
      id
    }
    imageUrl
  }
  fragment AssetMediaAnimation_asset on AssetType {
    ...AssetMediaImage_asset
  }
  fragment AssetMediaAudio_asset on AssetType {
    backgroundColor
    ...AssetMediaImage_asset
  }
  fragment AssetMediaContainer_asset_2V84VL on AssetType {
    backgroundColor
    ...AssetMediaEditions_asset_2V84VL
  }
  fragment AssetMediaEditions_asset_2V84VL on AssetType {
    decimals
  }
  fragment AssetMediaImage_asset on AssetType {
    backgroundColor
    imageUrl
    collection {
      displayData {
        cardDisplayStyle
      }
      id
    }
  }
  fragment AssetMediaPlaceholderImage_asset on AssetType {
    collection {
      displayData {
        cardDisplayStyle
      }
      id
    }
  }
  fragment AssetMediaVideo_asset on AssetType {
    backgroundColor
    ...AssetMediaImage_asset
  }
  fragment AssetMediaWebgl_asset on AssetType {
    backgroundColor
    ...AssetMediaImage_asset
  }
  fragment AssetMedia_asset on AssetType {
    animationUrl
    displayImageUrl
    imageUrl
    isDelisted
    ...AssetMediaAnimation_asset
    ...AssetMediaAudio_asset
    ...AssetMediaContainer_asset_2V84VL
    ...AssetMediaImage_asset
    ...AssetMediaPlaceholderImage_asset
    ...AssetMediaVideo_asset
    ...AssetMediaWebgl_asset
  }
  fragment AssetMedia_asset_2V84VL on AssetType {
    animationUrl
    displayImageUrl
    imageUrl
    isDelisted
    ...AssetMediaAnimation_asset
    ...AssetMediaAudio_asset
    ...AssetMediaContainer_asset_2V84VL
    ...AssetMediaImage_asset
    ...AssetMediaPlaceholderImage_asset
    ...AssetMediaVideo_asset
    ...AssetMediaWebgl_asset
  }
  fragment AssetQuantity_data on AssetQuantityType {
    asset {
      ...Price_data
      id
    }
    quantity
  }
  fragment AssetSearchCollection_data_11pQ3o on Query {
    queriedAt
    ...AssetSearchFilter_data_3KTzFc
    ...PhoenixSearchPills_data_2Kg4Sq
    search: collectionItems(
      after: $cursor
      collections: $collections
      first: $count
      isAutoHidden: $isAutoHidden
      numericTraits: $numericTraits
      paymentAssets: $paymentAssets
      resultType: $resultModel
      priceFilter: $priceFilter
      querystring: $query
      safelistRequestStatuses: $safelistRequestStatuses
      sortAscending: $sortAscending
      sortBy: $sortBy
      stringTraits: $stringTraits
      toggles: $toggles
      prioritizeBuyNow: $prioritizeBuyNow
      rarityFilter: $rarityFilter
    ) {
      edges {
        node {
          __typename
          relayId
          ...AssetSearchList_data_27d9G3
          ... on Node {
            __isNode: __typename
            id
          }
        }
        cursor
      }
      totalCount
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
  fragment AssetSearchFilter_data_3KTzFc on Query {
    collection(collection: $collection) {
      numericTraits {
        key
        value {
          max
          min
        }
        ...NumericTraitFilter_data
      }
      stringTraits {
        key
        ...StringTraitFilter_data
      }
      defaultChain {
        identifier
      }
      enabledRarities
      id
    }
    ...PaymentFilter_data_2YoIWt
  }
  fragment AssetSearchList_data_27d9G3 on ItemType {
    __isItemType: __typename
    __typename
    relayId
    ...ItemCard_data_1OrK6u
    ... on AssetType {
      collection {
        isVerified
        relayId
        id
      }
      ...SelectedAssetItem_data
      ...asset_url
    }
    ... on AssetBundleType {
      bundleCollection: collection {
        isVerified
        relayId
        id
      }
    }
    chain {
      identifier
    }
  }
  fragment CollectionLink_assetContract on AssetContractType {
    address
    blockExplorerLink
  }
  fragment CollectionLink_collection on CollectionType {
    name
    verificationStatus
    ...collection_url
  }
  fragment ItemCardAnnotations_27d9G3 on ItemType {
    __isItemType: __typename
    relayId
    ... on AssetType {
      chain {
        identifier
      }
      decimals
      favoritesCount
      isDelisted
      isFrozen
      hasUnlockableContent
      ...AssetCardBuyNow_data
      ...AssetCardAddToCartButton_asset
      orderData {
        bestAskV2 {
          orderType
          maker {
            address
            id
          }
          id
        }
      }
      ...AssetContextMenu_data @include(if: $showContextMenu)
    }
    ... on AssetBundleType {
      assetCount
    }
  }
  fragment ItemCardContent_2V84VL on ItemType {
    __isItemType: __typename
    __typename
    ... on AssetType {
      relayId
      name
      ...AssetMedia_asset_2V84VL
    }
    ... on AssetBundleType {
      assetQuantities(first: 18) {
        edges {
          node {
            asset {
              relayId
              ...AssetMedia_asset
              id
            }
            id
          }
        }
      }
    }
  }
  fragment ItemCardFooter_27d9G3 on ItemType {
    __isItemType: __typename
    name
    orderData {
      bestBidV2 {
        orderType
        priceType {
          unit
        }
        ...PriceContainer_data
        id
      }
      bestAskV2 {
        orderType
        priceType {
          unit
        }
        maker {
          address
          id
        }
        ...PriceContainer_data
        id
      }
    }
    ...ItemMetadata
    ...ItemCardAnnotations_27d9G3
    ... on AssetType {
      tokenId
      isDelisted
      defaultRarityData {
        ...RarityIndicator_data
        id
      }
      collection {
        slug
        name
        isVerified
        enabledRarities
        ...collection_url
        id
      }
    }
    ... on AssetBundleType {
      bundleCollection: collection {
        slug
        name
        isVerified
        enabledRarities
        ...collection_url
        id
      }
    }
  }
  fragment ItemCard_data_1OrK6u on ItemType {
    __isItemType: __typename
    __typename
    relayId
    orderData {
      bestAskV2 {
        priceType {
          eth
        }
        id
      }
    }
    ...ItemCardContent_2V84VL
    ...ItemCardFooter_27d9G3
    ...item_url
    ... on AssetType {
      isDelisted
      ...itemEvents_data
    }
  }
  fragment ItemMetadata on ItemType {
    __isItemType: __typename
    __typename
    orderData {
      bestAskV2 {
        closedAt
        id
      }
    }
    assetEventData {
      lastSale {
        unitPriceQuantity {
          ...AssetQuantity_data
          id
        }
      }
    }
  }
  fragment NumericTraitFilter_data on NumericTraitTypePair {
    key
    value {
      max
      min
    }
  }
  fragment OrderListItem_order on OrderV2Type {
    relayId
    item {
      __typename
      ... on AssetType {
        __typename
        name
        assetContract {
          ...CollectionLink_assetContract
          id
        }
        collection {
          name
          ...CollectionLink_collection
          id
        }
        ...AssetMedia_asset
      }
      ... on AssetBundleType {
        __typename
      }
      ... on Node {
        __isNode: __typename
        id
      }
    }
    remainingQuantityType
    ...OrderPrice
    ...OrderUsdPrice
  }
  fragment OrderList_orders on OrderV2Type {
    relayId
    ...OrderListItem_order
  }
  fragment OrderPrice on OrderV2Type {
    priceType {
      unit
    }
    perUnitPriceType {
      unit
    }
    dutchAuctionFinalPriceType {
      unit
    }
    openedAt
    closedAt
    payment {
      ...TokenPricePayment
      id
    }
  }
  fragment OrderUsdPrice on OrderV2Type {
    priceType {
      usd
    }
    perUnitPriceType {
      usd
    }
    dutchAuctionFinalPriceType {
      usd
    }
    openedAt
    closedAt
  }
  fragment PaymentFilter_data_2YoIWt on Query {
    paymentAssets(first: 10) {
      edges {
        node {
          symbol
          id
          __typename
        }
        cursor
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
    PaymentFilter_collection: collection(collection: $collection) {
      paymentAssets {
        symbol
        id
      }
      id
    }
  }
  fragment PhoenixSearchPills_data_2Kg4Sq on Query {
    selectedCollections: collections(
      first: 25
      collections: $collections
      includeHidden: true
    ) {
      edges {
        node {
          imageUrl
          name
          slug
          id
        }
      }
    }
  }
  fragment PriceContainer_data on OrderV2Type {
    ...OrderPrice
  }
  fragment Price_data on AssetType {
    decimals
    imageUrl
    symbol
    usdSpotPrice
    assetContract {
      blockExplorerLink
      chain
      id
    }
  }
  fragment RarityIndicator_data on RarityDataType {
    rank
    rankPercentile
    totalSupply
  }
  fragment SelectedAssetItem_data on AssetType {
    collection {
      imageUrl
      name
      verificationStatus
      id
    }
    imageUrl
    displayName
    relayId
    ...asset_url
  }
  fragment ShoppingCartDetailedView_orders on OrderV2Type {
    ...useTotalPrice_orders
    ...OrderList_orders
  }
  fragment ShoppingCartFooter_orders on OrderV2Type {
    ...useTotalPrice_orders
    ...ShoppingCartDetailedView_orders
  }
  fragment ShoppingCart_inline_order on OrderV2Type {
    relayId
    item {
      __typename
      chain {
        identifier
      }
      ... on Node {
        __isNode: __typename
        id
      }
    }
    payment {
      relayId
      id
    }
    ...ShoppingCartDetailedView_orders
    ...ShoppingCartFooter_orders
  }
  fragment StringTraitFilter_data on StringTraitType {
    counts {
      count
      value
    }
    key
  }
  fragment TokenPricePayment on PaymentAssetType {
    symbol
    chain {
      identifier
    }
    asset {
      imageUrl
      assetContract {
        blockExplorerLink
        id
      }
      id
    }
  }
  fragment asset_edit_url on AssetType {
    assetContract {
      address
      chain
      id
    }
    tokenId
    collection {
      slug
      id
    }
  }
  fragment asset_url on AssetType {
    assetContract {
      address
      id
    }
    tokenId
    chain {
      identifier
    }
  }
  fragment bundle_url on AssetBundleType {
    slug
    chain {
      identifier
    }
  }
  fragment collection_url on CollectionType {
    slug
    isCategory
  }
  fragment itemEvents_data on AssetType {
    relayId
    assetContract {
      address
      id
    }
    tokenId
    chain {
      identifier
    }
  }
  fragment item_url on ItemType {
    __isItemType: __typename
    __typename
    ... on AssetType {
      ...asset_url
    }
    ... on AssetBundleType {
      ...bundle_url
    }
  }
  fragment useTotalPrice_orders on OrderV2Type {
    relayId
    perUnitPriceType {
      usd
      unit
    }
    dutchAuctionFinalPriceType {
      usd
      unit
    }
    openedAt
    closedAt
    payment {
      symbol
      id
    }
  }
  `;

const ja3Fingerprint =
  "771,4865-4867-4866-49195-49199-52393-52392-49196-49200-49162-49161-49171-49172-51-57-47-53-10,0-23-65281-10-11-35-16-5-51-43-13-45-28-21,29-23-24-25-256-257,0";

const proxy = false;


module.exports = {
  graphQlQuery1,
  ja3Fingerprint,
  proxy,
};
