import ws, {Server, WebSocket} from 'ws'
import {SEnterGame} from "./proto/Room";
import {numToUint8Array} from "./util";
import * as buffer from "buffer";

let sessionId: number = 0
let sessions: Map<number, WebSocket> = new Map<number, WebSocket>

const port: number = 8081

const server: Server = new Server({port: port})
server.on('listening', () => {
    console.log(`Server is running on ${port}`)
})

server.on('connection', (socket: WebSocket) => {
    console.log("connected")
    sessions.set(sessionId++, socket)

    let packet: SEnterGame = {playerId: 1}
    let data: Uint8Array = SEnterGame.encode(packet).finish()
    const pktId: Uint8Array = numToUint8Array(0)
    const pktSize: Uint8Array = numToUint8Array(data.byteLength)

    console.log(pktSize)

    //let buffer: ArrayBufferLike = new ArrayBuffer(pktSize+2)

    socket.on('message', (packet: any) => {

    })
})

function Broadcast(packet: any)
{
    sessions.forEach((value: WebSocket, key: number, map: Map<number, WebSocket>) => {
        value.send(packet.finish())
    })
}