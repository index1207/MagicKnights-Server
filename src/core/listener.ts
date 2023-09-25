import {Server, WebSocket} from "ws";
import {Session, sessionList} from "./session";
import {OnRecvPacket} from "./packetHandler"

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

        this.server.on('connection', (socket: WebSocket) => {
            const session: Session = new Session(socket)
            session.OnConnected();

            sessionList.set(socket, session)

            socket.on('message', (packet: Buffer) => {
                OnRecvPacket(session, packet)
            })
            socket.on('close', () => {
                sessionList.get(socket).OnDisconnected()
                sessionList.delete(socket)
            })
        })
    }
}