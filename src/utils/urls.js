export default {
  getProductList: (path, rowOffset, pageSize) =>
    `/mock/products/${path}.json?rowIndex=${rowOffset}&pageSize=${pageSize}`,
};
