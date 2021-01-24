export default {
  getProductList: (path, rowOffset, pageSize) =>
    `/mock/products/${path}.json?${rowOffset}&pageSize=${pageSize}`,
};
