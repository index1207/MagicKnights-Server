import {connection, server} from "websocket";

let lastSessionId: number = 0

export class Session {
    public sock: connection
    public sessionId: number

    constructor(socket: connection) {
        this.sock = socket;
        this.sessionId = lastSessionId++;
    }
    sendPacket(buffer: Buffer) {
        this.sock.send(buffer)
    }
}