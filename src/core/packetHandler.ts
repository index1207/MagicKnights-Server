import {Session} from "./session"
import {PacketID} from "../proto/Packet";
import {CCreateRoom, CEnterRoomReq, SConnectedToServer, SEnterRoomRes, SRoomListRes,} from "../proto/Room";
import {CRoomListReq} from "../proto/Room";
import {handler} from "../handler/room";
import Room = handler.Room;


export let packetId: Map<any, number> = new Map<any, number>()
packetId.set(SConnectedToServer, PacketID.S_CONNECTED_TO_SERVER);
packetId.set(CRoomListReq, PacketID.C_ROOM_LIST_REQ)
packetId.set(SRoomListRes, PacketID.S_ROOM_LIST_RES)
packetId.set(CCreateRoom, PacketID.C_CREATE_ROOM)
packetId.set(CEnterRoomReq, PacketID.C_ENTER_ROOM_REQ)
packetId.set(SEnterRoomRes, PacketID.S_ENTER_ROOM_RES)


export function OnRecvPacket(session: Session, buffer: Buffer) {
    const pktId: number = buffer.readUint16LE(0);
    const serializedData: Buffer = buffer.subarray(2, buffer.byteLength)

    switch (pktId) {
        case PacketID.C_ROOM_LIST_REQ:
        {
            Room.SendRoomList(session)
            break
        }
        case PacketID.C_CREATE_ROOM:
        {
            Room.CreateRoom(session, CCreateRoom.decode(serializedData))
            break;
        }
        case PacketID.C_ENTER_ROOM_REQ:
        {
            Room.EnterRoom(session, CEnterRoomReq.decode(serializedData))
            break;
        }
    }
}