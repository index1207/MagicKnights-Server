import {Server, WebSocket} from "ws";
import {Session, sessionList} from "./session";
import {OnRecvPacket} from "./packetHandler"
import {Socket} from "net";

export class Listener
{
    private server: Server;
    private port: number;
    private host: string;

    constructor(host: string, port: number) {
        this.host = host;
        this.port = port;
        this.server = new Server({port: port, host: host})
    }

    run()
    {
        this.server.on('listening', () => {
            console.log(`Server is running on ${this.host}:${this.port}`)
        })

        this.server.on('connection', (socket: WebSocket, req) => {
            const session: Session = new Session(socket)
            session.OnConnected();

            const httpSock: Socket = req.socket;
            console.log(`[INFO] Connected ${httpSock.remoteAddress}`)

            sessionList.set(session.GetID(), session)

            socket.on('message', (packet: Buffer) => {
                OnRecvPacket(session, packet)
            })
            socket.on('close', () => {
                console.log(`[INFO] Disconnected ${httpSock.remoteAddress}`)
                session.OnDisconnected()
                sessionList.delete(session.GetID())
            })
        })
    }
}