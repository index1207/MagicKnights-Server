import {Server, WebSocket} from "ws";
import {SEnterGame} from "../proto/Room";
import {Session} from "./session";

export class Listener
{
    private server: Server;
    private port: number;

    constructor(port: number) {
        this.port = port;
        this.server = new Server({port: port})
    }

    run()
    {
        this.server.on('listening', () => {
            console.log(`Server is running on ${this.port}`)
        })

        this.server.on('connection', (socket: WebSocket) => {
            const session: Session = new Session(socket)
            session.OnConnected();

            socket.on('message', (packet: Buffer) => {

            })
        })
    }
}