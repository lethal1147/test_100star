import http from "http";
import prisma from "../lib/prisma";
import { Server } from "socket.io";

const httpServer = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Server is running ...");
  } else {
    // Handle 404 Not Found
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found");
  }
});

const corsOrigins = [
  process.env.CLIENT_URL ?? "http://localhost:3000",
  "http://localhost:3000",
];

const io = new Server(httpServer, {
  cors: {
    origin: corsOrigins,
    methods: ["GET"],
    credentials: true,
  },
});

const PORT = process.env.PORT || 3001;
httpServer.listen(PORT, async () => {
  console.log(`socket.io server is running on port ${PORT}`);
  await streamCreate(io);
});

async function streamCreate(io: Server) {
  const stream = await prisma.tB_VEHICLES.stream();

  // Handle Prisma stream events
  for await (const event of stream) {
    if (event.action === "create") {
      io.sockets.emit("vehicle_create");
    }
  }
}
