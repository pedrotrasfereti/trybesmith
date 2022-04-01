import { productModel } from '../models';
import Product from '../utils/interfaces/Product';

const create = async (newProduct: Product) => {
  return await productModel.create(newProduct);
};

const findAll = async () => await productModel.findAll();

export default { create, findAll };
