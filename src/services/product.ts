import { productModel } from '../models';
import Product from '../utils/interfaces/Product';

const create = async (newProduct: Product) => {
  const insertData = await productModel.create(newProduct);
  return insertData;
};

const findAll = async () => {
  const products = await productModel.findAll();
  return products;
};

export default { create, findAll };
