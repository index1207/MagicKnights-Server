import * as http from "http"
import {server, connection, request, Message} from "websocket"
import {Session} from "./session"
import {OnRecvPacket} from "./packetHandler"

export class Listener {
    private httpServer: http.Server
    private server: server
    private port: number
    private sessions: Map<number, Session> = new Map

    constructor() {
        this.port = 0
        this.httpServer = null
        this.server = null
    }

    listen(port: number) {
        this.port = port;

        this.httpServer = http.createServer((req: http.IncomingMessage, res:http.ServerResponse) => {
            res.writeHead(404)
            res.end()
        })

        this.server = new server({
            httpServer: this.httpServer,
            closeTimeout: 5000,
            autoAcceptConnections: false
        })

        this.server.on('connect', (connection: connection) => {
            console.log(`Client connected ${connection.remoteAddress}`)
        })

        this.server.on('request', async (req: request) => {
            const session: Session = new Session(req.accept(null, req.origin))

            this.sessions.set(session.sessionId, session)

            session.sock.on('message', (msg: Message) => {
                if(msg.type == 'binary') {
                    OnRecvPacket(session, msg.binaryData)
                }
            })
        })

        this.httpServer.listen(this.port, () => {
            console.log(`Server is running on ${this.port}`)
        })
    }
}