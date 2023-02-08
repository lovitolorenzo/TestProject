import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
	const createdAddress = await prisma.address.create({
		data: {
			address_1: "123 Main St",
			city: "New York",
			state: "NY",
			zip: 10001,
		},
	});
	const createdCustomer = await prisma.customer.create({
		data: {
			firstName: "John",
			lastName: "Doe",
			address: {
				connect: {
					id: createdAddress.id,
				},
			},
			email: "john.doe@example.com",
			phone: "+1 (555) 555-5555",
		},
	});
	const createdProduct = await prisma.product.create({
		data: {
			name: "iPhone",
			description: "The latest iPhone model",
			itemPrice: 999.99,
		},
	});
	const createdOrder = await prisma.order.create({
		data: {
			customer: {
				connect: {
					id: createdCustomer.id,
				},
			},
			product: {
				connect: {
					id: createdProduct.id,
				},
			},
			discount: 42.5,
			quantity: 1,
			totalPrice: 999,
		},
	});

	const customerOrders = await prisma.order.findMany({
		where: {
			customerId: createdCustomer.id,
		},
	});

	const ordersIdRelatedToCustomer = customerOrders.map((order) => ({ id: order.id }));

	const createdSale = await prisma.sale.create({
		data: {
			customer: {
				connect: {
					id: createdCustomer.id,
				},
			},
			amount: 123.45,
			orders: {
				connect: ordersIdRelatedToCustomer,
			},
		},
	});
	console.log({ createdAddress, createdCustomer, createdOrder, createdProduct, createdSale });
}

main()
	.catch((e) => {
		throw e;
	})
	// Close the connection with the db
	.finally(async () => {
		await prisma.$disconnect();
	});
