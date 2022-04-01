import { productModel } from '../models';
import Product from '../utils/interfaces/Product';

const create = async (newProduct: Product) => productModel.create(newProduct);

const findAll = async () => productModel.findAll();

export default { create, findAll };
