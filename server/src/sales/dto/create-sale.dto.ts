import { ApiProperty } from "@nestjs/swagger";

export class CreateSaleDto {
	// Swagger decorator to generate swagger documentation
	@ApiProperty({
		description: "The ID of the customer associated with the sale",
		type: Object,
		example: {
			connect: {
				id: "clduuywsg0002yyn7gbo0o3xi",
			},
		},
	})
	customer!: object;

	@ApiProperty({
		description: "A list of order IDs associated with the sale",
		type: Object,
		example: {
			connect: [
				{
					id: "clduuywsv0006yyn7clapxg0r",
				},
			],
		},
	})
	orders!: object;

	@ApiProperty({ description: "The total amount of the sale", type: Number, example: 123.45 })
	amount?: number;
}
