import {Session} from "./session"
import {EPacketID} from "../proto/Packet";
import {
    CCreateRoom,
    CEnterRoomReq,
    CLeaveRoom,
    SNotifyLeaveRoom,
    SConnectedToServer,
    SEnterRoomRes,
    SRoomList,
    CStartGameReq,
    SNotifyStartGame,
} from "../proto/Room";
import {CRoomListReq} from "../proto/Room";
import {Room} from "../handler/room";
import {RemotePlayer} from "../handler/remotePlayer";
import {CMoveInput, SMoveInput} from "../proto/Status";

export let packetId: Map<any, number> = new Map<any, number>()
packetId.set(SConnectedToServer, EPacketID.S_CONNECTED_TO_SERVER);
packetId.set(CRoomListReq, EPacketID.C_ROOM_LIST_REQ)
packetId.set(SRoomList, EPacketID.S_ROOM_LIST)
packetId.set(CCreateRoom, EPacketID.C_CREATE_ROOM)
packetId.set(CEnterRoomReq, EPacketID.C_ENTER_ROOM_REQ)
packetId.set(SEnterRoomRes, EPacketID.S_ENTER_ROOM_RES)
packetId.set(CLeaveRoom, EPacketID.C_LEAVE_ROOM)
packetId.set(SNotifyLeaveRoom, EPacketID.S_UNICAST_LEAVE_ROOM)
packetId.set(CStartGameReq, EPacketID.C_START_GAME_REQ)
packetId.set(SNotifyStartGame, EPacketID.S_NOTIFY_START_GAME)
packetId.set(CMoveInput, EPacketID.C_MOVE_INPUT)
packetId.set(SMoveInput, EPacketID.S_MOVE_INPUT)

export function OnRecvPacket(session: Session, buffer: Buffer) {
    const pktId: number = buffer.readUint16LE(0);
    const serializedData: Buffer = buffer.subarray(2, buffer.byteLength)

    switch (pktId) {
        case EPacketID.C_ROOM_LIST_REQ: {
            Room.SendRoomList(session)
            break
        }
        case EPacketID.C_CREATE_ROOM: {
            Room.CreateRoom(session, CCreateRoom.decode(serializedData))
            break;
        }
        case EPacketID.C_ENTER_ROOM_REQ: {
            Room.EnterRoom(session, CEnterRoomReq.decode(serializedData))
            break;
        }
        case EPacketID.C_LEAVE_ROOM: {
            Room.LeaveRoom(session, CLeaveRoom.decode(serializedData))
            break;
        }
        case EPacketID.C_START_GAME_REQ: {
            Room.StartGame(session, CStartGameReq.decode(serializedData));
            break;
        }
        case EPacketID.C_MOVE_INPUT: {
            RemotePlayer.Move(session, CMoveInput.decode(serializedData))
        }
    }
}