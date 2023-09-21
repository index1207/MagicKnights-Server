import {WebSocket} from "ws";
import {SConnectedToServer} from "../proto/Room";
import {packetId} from './packetHandler'

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

        const enter: SConnectedToServer = {playerId: this.sessionId}
        this.Send(SConnectedToServer, enter)
    }
    OnDisconnected() {}
    OnSend() {
    }
    OnRecv() {}

    Send(id: any, packet: any) {
        let rawData: any = id.encode(packet).finish()
        let buffer: Buffer = Buffer.allocUnsafe(rawData.byteLength+2)
        buffer.writeUInt16LE(packetId.get(id), 0);
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