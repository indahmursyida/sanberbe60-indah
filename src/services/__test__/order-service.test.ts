import mongoose, { Schema } from "mongoose";
import OrderModel, { Order } from "../../models/order.model";
import { create, findAll} from "../order.service";

jest.mock("../../models/order.model");

const mockOrderModel = OrderModel as unknown as jest.Mocked<
    typeof OrderModel
>;

afterEach(() => {
    mockOrderModel.find.mockClear();
    mockOrderModel.create.mockClear();
});

describe("order-service.test.ts", () => {
    test("create", async () => {
        const mockOrder: Order = {
            _id: new mongoose.Types.ObjectId(),
            grandTotal: 450000,
            orderItems: [
                {
                    name: "Product 1",
                    productId: new mongoose.Types.ObjectId(),
                    price: 150000,
                    quantity: 3
                }
            ],
            createdBy: new mongoose.Types.ObjectId(),
            status: "Pending",
            createdAt: new Date().toString(),
            updatedAt: new Date().toString(),
        };

        const mockCreate = jest.fn().mockResolvedValue(mockOrder);

        mockOrderModel.create.mockImplementation(mockCreate);

        const order = await create(mockOrder);

        expect(order?._id).toBe(mockOrder._id);
    });

    test("findAll", async () => {
        var mockCreatedBy = new mongoose.Types.ObjectId();
        const mockOrders: Order[] = [
            {
                _id: new mongoose.Types.ObjectId(),
                grandTotal: 450000,
                orderItems: [
                    {
                        name: "Product 1",
                        productId: new mongoose.Types.ObjectId(),
                        price: 150000,
                        quantity: 3
                    }
                ],
                createdBy: mockCreatedBy,
                status: "Pending",
                createdAt: new Date().toString(),
                updatedAt: new Date().toString(),
            },
        ];

        const mockFind = jest.fn().mockReturnValue({
            limit: jest.fn().mockReturnThis(),
            skip: jest.fn().mockReturnThis(),
            sort: jest.fn().mockResolvedValue(mockOrders)
        });

        mockOrderModel.find.mockImplementation(mockFind);
        const allOrders = await findAll({userId: mockCreatedBy});

        expect(allOrders.length).toBe(1);
    });

    test('sample', () => {
        expect(true).toBeTruthy();
    })
})