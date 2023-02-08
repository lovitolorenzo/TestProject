import { Module } from "@nestjs/common";
import { SalesService } from "./sales.service";
import { SalesController } from "./sales.controller";
import { PrismaModule } from "../prisma/prisma.module";

@Module({
	controllers: [SalesController],
	providers: [SalesService],
	// Importing PrismaModule which provides PrismaService
	imports: [PrismaModule],
})
export class SalesModule {}
