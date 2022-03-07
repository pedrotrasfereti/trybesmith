import IOrder from './Order';

export default interface IOrderProduct extends IOrder {
  id: number;
  userId: number;
}
