import ws, {Server, WebSocket} from 'ws'
import {FVector3} from "./proto/Transform";

const port: number = 8081

const server: Server = new Server({port: port})
server.on('listening', () => {
    console.log(`Server is running on ${port}`)
})

server.on('connection', (socket: WebSocket) => {
    console.log("connected")
    socket.on('message', (packet: any) => {
        const v: FVector3 = FVector3.decode(packet);
        console.log(`recv: vector(${v.x}, ${v.y}, ${v.z})`)
    })
})