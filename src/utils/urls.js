export default {
  getProductList: (path, rowOffset, pageSize) =>
    `/mock/products/${path}.json?rowIndex=${rowOffset}&pageSize=${pageSize}`,
  getProductDetail: (id) => `/mock/product_detail/${id}.json`,
  getShop: (id) => `/mock/shops/${id}.json`,
  getPopularKeywords: () => `/mock/keywords/popular.json`,
  getRelatedKeywords: (text) => `/mock/keywords/related.json?keyword=${text}`,
  getRelatedShops: (keyword) => `/mock/shops/related.json?keyword=${keyword}`,
  getOrders: () => `/mock/orders/orders.json`
};
