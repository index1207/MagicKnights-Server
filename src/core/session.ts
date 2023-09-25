import {WebSocket} from "ws";
import {Room, SBroadcastDestroyRoom, SConnectedToServer} from "../proto/Room";
import {packetId, roomList} from './packetHandler'

let lastSessionId: number = 1
export let sessionList: Map<WebSocket, Session> = new Map<WebSocket, Session>()

export class Session {
    public sock: WebSocket
    public sessionId: number
    public room: Room

    constructor(socket: WebSocket) {
        this.sock = socket
        this.sessionId = lastSessionId++
    }

    GetID() : number {
        return this.sessionId;
    }

    OnConnected() {
        const enter: SConnectedToServer = {playerId: this.sessionId}
        this.Send(SConnectedToServer, enter)
    }
    OnDisconnected() {
        this.LeaveRoom()
    }
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

    EnterRoom(room: Room) {
        this.room = room;
        this.room.enterPlayers.push(this.sessionId)
    }

    LeaveRoom() {
        if (this.room != null) {
            this.room.enterPlayers.splice(this.room.enterPlayers.findIndex((r) => r == this.sessionId), 1)
            if (this.room.enterPlayers.length == 0) {
                roomList.splice(roomList.findIndex((r) => {
                    return r.name == this.room.name
                }), 1)
                let destroyRoom: SBroadcastDestroyRoom = {name: this.room.name}
                sessionList.forEach((value, key) => {
                    value.Send(SBroadcastDestroyRoom, destroyRoom)
                })
                console.log('destroy room')
            }
        }
    }
}