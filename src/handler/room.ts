import {CCreateRoom, CEnterRoomReq, SEnterRoomRes, SRoomListRes} from "../proto/Room";
import {Session, sessionList} from "../core/session";

import * as protobuf from "../proto/Room"

export namespace handler {
    export let roomList: Array<protobuf.Room> = new Array<protobuf.Room>()

    export class Room {
        static SendRoomList(session: Session) {
            let res: SRoomListRes = {rooms: roomList}
            session.Send(SRoomListRes, res)
        }

        static CreateRoom(session: Session, packet: CCreateRoom) {
            roomList.push(packet.reqRoom)
            session.EnterRoom(packet.reqRoom)

            sessionList.forEach((value: Session, key: number) => {
                let list: SRoomListRes = {rooms: roomList}
                value.Send(SRoomListRes, list)
            })
        }

        static EnterRoom(session: Session, packet: CEnterRoomReq) {
            const room: protobuf.Room = roomList.find(value => value.name == packet.roomName)
            if (room.enterPlayers.length < 2 && room.pwd == packet.submitPwd) {
                session.EnterRoom(room)

                let res: SEnterRoomRes = {isOk: true}
                session.Send(SEnterRoomRes, res)
            } else {
                let res: SEnterRoomRes = {isOk: false}
                session.Send(SEnterRoomRes, res)
            }
        }
    }
}