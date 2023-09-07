import {WebSocket} from "ws";
import {SEnterGame} from "../proto/Room";
import {PacketID} from './packetHandler'

let lastSessionId: number = 1

export class Session {
    public sock: WebSocket
    public sessionId: number

    constructor(socket: WebSocket) {
        this.sock = socket;
        this.sessionId = lastSessionId++;
    }
    OnConnected() {
        console.log('connect')

        const enter: SEnterGame = {playerId: this.sessionId}
        this.Send(SEnterGame, enter)
    }
    OnDisconnected() {}
    OnSend() {
    }
    OnRecv() {}

    Send(packetType: any, packet: any) {
        let rawData = packetType.encode(packet).finish()
        let buffer: Buffer = Buffer.allocUnsafe(rawData.byteLength+2)
        buffer.writeUInt16LE(PacketID.get(packetType), 0);
        buffer.set(rawData, 2);

        try {
            this.sock.send(buffer.toString())
            this.OnSend();
        }
        catch (e) {
            console.log(e)
        }
    }
}