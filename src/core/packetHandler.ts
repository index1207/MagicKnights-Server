import {Session} from "./session"
import {PacketID} from "../proto/Packet";
import {CCreateRoom, Room, SBroadcastDestroyRoom, SConnectedToServer, SRoomListRes,} from "../proto/Room";
import {CRoomListReq} from "../proto/Room";

/*
enum PacketID
{
  S_CONNECTED_TO_SERVER = 0;
  C_ROOM_LIST_REQ = 1;
  S_ROOM_LIST_RES = 2;
  C_CREATE_ROOM = 3;
  S_BROADCAST_DESTROY_ROOM = 4;
}
*/

export let packetId: Map<any, number> = new Map<any, number>()
packetId.set(SConnectedToServer, PacketID.S_CONNECTED_TO_SERVER);
packetId.set(CRoomListReq, PacketID.C_ROOM_LIST_REQ)
packetId.set(SRoomListRes, PacketID.S_ROOM_LIST_RES)
packetId.set(CCreateRoom, PacketID.C_CREATE_ROOM)
packetId.set(SBroadcastDestroyRoom, PacketID.S_BROADCAST_DESTROY_ROOM)

export let roomList: Array<Room> = new Array<Room>()

export function OnRecvPacket(session: Session, buffer: Buffer) {
    const pktId: number = buffer.readUint16LE(0);
    const serializedData: Buffer = buffer.subarray(2, buffer.byteLength)

    switch (pktId) {
        case PacketID.C_ROOM_LIST_REQ:
        {
            let res: SRoomListRes = {rooms: roomList}
            session.Send(SRoomListRes, res)
            break
        }
        case PacketID.C_CREATE_ROOM:
        {
            let create: CCreateRoom = CCreateRoom.decode(serializedData)
            roomList.push(create.reqRoom)

            console.log('created room')

            session.EnterRoom(create.reqRoom)
            break;
        }
    }
}