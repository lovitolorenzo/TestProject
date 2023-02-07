import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
	const postAddress = await prisma.address.create({
		data: {
			address_1: "123 Main St",
			city: "New York",
			state: "NY",
			zip: 10001,
		},
	});
	const postCustomer = await prisma.customer.create({
		data: {
			firstName: "John",
			lastName: "Doe",
			address: {
				connect: {
					id: postAddress.id,
				},
			},
			email: "john.doe@example.com",
			phone: "+1 (555) 555-5555",
		},
	});
	const postProduct = await prisma.product.create({
		data: {
			name: "iPhone",
			description: "The latest iPhone model",
			itemPrice: 999.99,
		},
	});
	const postOrder = await prisma.order.create({
		data: {
			customer: {
				connect: {
					id: postCustomer.id,
				},
			},
			product: {
				connect: {
					id: postProduct.id,
				},
			},
			discount: 42.5,
			quantity: 1,
			totalPrice: 999,
		},
	});

	const customerOrders = await prisma.order.findMany({
		where: {
			customerId: postCustomer.id,
		},
	});

	const ordersIdRelatedToCustomer = customerOrders.map((order) => ({ id: order.id }));

	const productSale = await prisma.sale.create({
		data: {
			customer: {
				connect: {
					id: postCustomer.id,
				},
			},
			amount: 123.45,
			orders: {
				connect: ordersIdRelatedToCustomer,
			},
		},
	});
	console.log({ postAddress, postCustomer, postOrder, postProduct, productSale });
}

main()
	.catch((e) => {
		throw e;
	})
	// Close the connection with the db
	.finally(async () => {
		await prisma.$disconnect();
	});
