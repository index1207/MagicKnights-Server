import {
    CCreateRoom,
    CEnterRoomReq,
    CLeaveRoom,
    CStartGame,
    SEnterRoomRes,
    SRoomListRes,
    SUnicastLeaveRoom, SUnicastStartGame
} from "../proto/Room";
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

            session.Broadcast(SRoomListRes, SRoomListRes.create({rooms: roomList}))
        }

        static EnterRoom(session: Session, packet: CEnterRoomReq) {
            const room: protobuf.Room = roomList.find(value => value.name == packet.roomName)
            if (room.enterPlayers.length < 2 && room.pwd == packet.submitPwd) {
                session.EnterRoom(room)
                if(room.enterPlayers.length == 2) {
                    session.Broadcast(SRoomListRes, SRoomListRes.create({rooms: roomList}))
                }

                session.Unicast(SEnterRoomRes, SEnterRoomRes.create({isOk: true, enterRoom: room}))
            } else {
                let res: SEnterRoomRes = {isOk: false, enterRoom: protobuf.Room.create()}
                session.Send(SEnterRoomRes, res)
            }
        }

        static LeaveRoom(session: Session, packet: CLeaveRoom) {
            let room: protobuf.Room = session.room;
            if (session.room != null) {
                session.LeaveRoom()

                room.enterPlayers.forEach(value => {
                    sessionList.get(value).Send(SUnicastLeaveRoom, SUnicastLeaveRoom.create({room: room}))
                })
            }
        }

        static StartGame(session: Session, startGame: CStartGame) {
            session.Unicast(SUnicastStartGame, SUnicastStartGame.create())
        }
    }
}