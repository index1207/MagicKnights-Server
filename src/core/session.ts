import {WebSocket} from "ws";
import {FRoom, SConnectedToServer, SRoomList, SNotifyLeaveRoom} from "../proto/Room";
import {packetId} from './packetHandler'

import {roomList} from "../handler/room";

let lastSessionId: number = 1
export let sessionList: Map<number, Session> = new Map<number, Session>()

export class Session {
    public sock: WebSocket
    public sessionId: number
    public room: FRoom

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
        if (this.room != null)
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

    EnterRoom(room: FRoom) {
        this.room = room;
        this.room.enterPlayers.push(this.sessionId)
    }

    LeaveRoom() {
        this.room.enterPlayers.splice(
            this.room.enterPlayers.findIndex((r) => r == this.sessionId), 1
        )

        // remove empty room
        if (this.room.enterPlayers.length == 0) {
            roomList.splice(roomList.findIndex((r) => {
                return r.name == this.room.name
            }), 1)
        }
        this.Broadcast(SRoomList, SRoomList.create({rooms: roomList}))

        // unicast leave room
        this.Unicast(SNotifyLeaveRoom, SNotifyLeaveRoom.create({room: this.room}))
    }

    Unicast(packetId: any, packet: any) {
        if(this.room != null) for (let playerId of this.room.enterPlayers) {
            sessionList.get(playerId).Send(packetId, packet)
        }
    }

    Broadcast(packetId: any, packet: any) {
        sessionList.forEach(value => {
            value.Send(packetId, packet)
        })
    }
}