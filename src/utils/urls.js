export default {
  getProductList: (rowOffset, pageSize) =>
    `/mock/products/likes.json?${rowOffset}&pageSize=${pageSize}`,
};
