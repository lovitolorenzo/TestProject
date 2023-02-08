import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateSaleDto } from "./dto/create-sale.dto";
import { UpdateSaleDto } from "./dto/update-sale.dto";

@Injectable()
export class SalesService {
	constructor(private prisma: PrismaService) {}
	create(createSaleDto: CreateSaleDto) {
		return this.prisma.sale.create({ data: createSaleDto });
	}

	findAll() {
		return `This action returns all sales`;
	}

	findOne(id: number) {
		return `This action returns a #${id} sale`;
	}

	update(id: number, updateSaleDto: UpdateSaleDto) {
		return `This action updates a #${id} sale`;
	}

	remove(id: number) {
		return `This action removes a #${id} sale`;
	}
}
