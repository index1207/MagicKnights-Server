import {Session} from "./session"
import {PacketID} from "../proto/Packet";
import {CCreateRoom, Room, SConnectedToServer, SRoomListRes,} from "../proto/Room";
import {CRoomListReq} from "../proto/Room";

export let packetId: Map<any, number> = new Map<any, number>()
packetId.set(SConnectedToServer, PacketID.S_CONNECTED_TO_SERVER);
packetId.set(CRoomListReq, PacketID.C_ROOM_LIST_REQ)
packetId.set(SRoomListRes, PacketID.S_ROOM_LIST_RES)
packetId.set(CCreateRoom, PacketID.C_CREATE_ROOM)

let roomList: Array<Room> = new Array<Room>()

export function OnRecvPacket(session: Session, buffer: Buffer) {
    const pktId: number = buffer.readUint16LE(0);
    const serializedData: Buffer = buffer.subarray(2, buffer.byteLength)

    switch (pktId) {
        case PacketID.C_ROOM_LIST_REQ:
            let res: SRoomListRes = {rooms: roomList}
            session.Send(SRoomListRes, res)
            break
        case PacketID.C_CREATE_ROOM:
            let create: CCreateRoom = CCreateRoom.decode(serializedData)
            roomList.push(create.reqRoom)
            break;
    }
}