import OrderModel, { Order } from "../models/order.model";

export const create = async (payload: Order): Promise<Order> => {
  const result = await OrderModel.create(payload);
  return result;
};

export const findAll = async (
  userId: any,
  limit: number = 10,
  page: number = 1
): Promise<Order[]> => {
  const result = await OrderModel.find({ createdBy: userId })
    .limit(limit)
    .skip((page - 1) * limit)
    .sort({ createdAt: -1 });

  return result;
};