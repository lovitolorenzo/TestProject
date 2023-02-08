# Sales Management System

A project developed using TypeScript, Node.js, NestJS, Prisma and MySQL to manage sales data. The system creates a new table "Sales" in MySQL database using Prisma and implements a mechanism to add new sales through a POST request.

## Table of Contents

Technologies Used

Getting Started

API Endpoint for Adding a New Sale

## Technologies Used

TypeScript

Node.js

NestJS

Docker

Prisma

MySQL

## Getting Started

Use docker and run the following commands to start the project:

`npm run install`

`npm run docker:db`

`npm run prisma:generate`

`npm run db:init`

`npm run start`

## API Endpoint for Adding a New Sale

To make a try of a new "sale" creation:

- URL:
  `localhost:3000/api/#/default/SalesController_create`
- POST /api/sales
- Sample Request Body:
  `{
        "customer": {
            "connect": {
                "id": "clduuywsg0002yyn7gbo0o3xi"
            }
        },
        "orders": {
        "connect": [{
        "id": "clduuywsv0006yyn7clapxg0r"
        }]
        },
        "amount": 123.45
}`
