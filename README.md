# Vehicle Count Display System

## A project about display real-time information about vehicles passing by a location based on data from LED advertisement signs.

This project is a real-time vehicle count display system that provides live updates on the number of vehicles passing by a specific location.

## Tech Stack

- **Next.JS**
- **TailwindCSS**
- **Shadcn/ui**
- **Zustand**
- **Prisma**
- **Prisma-pulse**
- **Socket.io**
- **Postgresql**

## Prerequisites

Before running, ensure the following:

- **Node.js** and **npm** installed. (Node.js version 16.x or 18.x recommended).
- **Server** Please make sure to start the server using the appropriate command.
- **Call api** Make an API call to start the interval for generating mock vehicle data every minute. This simulates real-time data coming from the LED signs.

```bash
npm run server
```

You can check your Node.js version with:

```bash
node -v
```

## Installation

1. Clone the repository:

```bash
git clone https://github.com/lethal1147/test_100star.git
cd test_100star
```

2. Install dependencies:

```bash
npm install
```

3. Create file `.env` and set up environment variables

4. Start the server:

```bash
npm run server
```

5. Start the application:

```bash
npm run dev
```

The application will be available at http://localhost:3000.

6. Make API call to start generating mock vehicle data every one minute:

Using cURL:

```bash
curl -X GET http://localhost:3000/api/vehicle/generateMockVehicle
```

Or by POSTMAN:

```bash
   GET http://localhost:3000/api/vehicle/generateMockVehicle
```
