import {
    CCreateRoom,
    CEnterRoomReq,
    CLeaveRoom,
    CStartGameReq,
    FRoom,
    SEnterRoomRes,
    SRoomList,
    SNotifyLeaveRoom,
    SNotifyStartGame
} from "../proto/Room";
import {Session, sessionList} from "../core/session";

import * as protobuf from "../proto/Room"

export namespace handler {
    export let roomList: Array<FRoom> = new Array<FRoom>()

    export class Room {
        static SendRoomList(session: Session) {
            let res: SRoomList = {rooms: roomList}
            session.Send(SRoomList, res)
        }

        static CreateRoom(session: Session, packet: CCreateRoom) {
            roomList.push(packet.reqRoom)
            session.EnterRoom(packet.reqRoom)

            session.Broadcast(SRoomList, SRoomList.create({rooms: roomList}))
        }

        static EnterRoom(session: Session, packet: CEnterRoomReq) {
            const room: FRoom = roomList.find(value => value.name == packet.roomName)
            if (room.enterPlayers.length < 2 && room.pwd == packet.submitPwd) {
                session.EnterRoom(room)
                if(room.enterPlayers.length == 2) {
                    session.Broadcast(SRoomList, SRoomList.create({rooms: roomList}))
                }

                session.Unicast(SEnterRoomRes, SEnterRoomRes.create({isOk: true, enterRoom: room}))
            } else {
                let res: SEnterRoomRes = {isOk: false, enterRoom: FRoom.create()}
                session.Send(SEnterRoomRes, res)
            }
        }

        static LeaveRoom(session: Session, packet: CLeaveRoom) {
            let room: FRoom = session.room;
            if (session.room != null) {
                session.LeaveRoom()

                room.enterPlayers.forEach(value => {
                    sessionList.get(value).Send(SNotifyLeaveRoom, SNotifyLeaveRoom.create({room: room}))
                })
            }
        }

        static StartGame(session: Session, startGame: CStartGameReq) {
            session.Unicast(SNotifyStartGame, SNotifyStartGame.create())
        }
    }
}