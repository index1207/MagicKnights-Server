/* eslint-disable */

export const protobufPackage = "packet";

export enum PacketID {
  S_CONNECTED_TO_SERVER = 0,
  C_ROOM_LIST_REQ = 1,
  S_ROOM_LIST_RES = 2,
  C_CREATE_ROOM = 3,
  C_ENTER_ROOM_REQ = 4,
  S_ENTER_ROOM_RES = 5,
  C_LEAVE_ROOM = 6,
  S_UNICAST_LEAVE_ROOM = 7,
  UNRECOGNIZED = -1,
}

export function packetIDFromJSON(object: any): PacketID {
  switch (object) {
    case 0:
    case "S_CONNECTED_TO_SERVER":
      return PacketID.S_CONNECTED_TO_SERVER;
    case 1:
    case "C_ROOM_LIST_REQ":
      return PacketID.C_ROOM_LIST_REQ;
    case 2:
    case "S_ROOM_LIST_RES":
      return PacketID.S_ROOM_LIST_RES;
    case 3:
    case "C_CREATE_ROOM":
      return PacketID.C_CREATE_ROOM;
    case 4:
    case "C_ENTER_ROOM_REQ":
      return PacketID.C_ENTER_ROOM_REQ;
    case 5:
    case "S_ENTER_ROOM_RES":
      return PacketID.S_ENTER_ROOM_RES;
    case 6:
    case "C_LEAVE_ROOM":
      return PacketID.C_LEAVE_ROOM;
    case 7:
    case "S_UNICAST_LEAVE_ROOM":
      return PacketID.S_UNICAST_LEAVE_ROOM;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PacketID.UNRECOGNIZED;
  }
}

export function packetIDToJSON(object: PacketID): string {
  switch (object) {
    case PacketID.S_CONNECTED_TO_SERVER:
      return "S_CONNECTED_TO_SERVER";
    case PacketID.C_ROOM_LIST_REQ:
      return "C_ROOM_LIST_REQ";
    case PacketID.S_ROOM_LIST_RES:
      return "S_ROOM_LIST_RES";
    case PacketID.C_CREATE_ROOM:
      return "C_CREATE_ROOM";
    case PacketID.C_ENTER_ROOM_REQ:
      return "C_ENTER_ROOM_REQ";
    case PacketID.S_ENTER_ROOM_RES:
      return "S_ENTER_ROOM_RES";
    case PacketID.C_LEAVE_ROOM:
      return "C_LEAVE_ROOM";
    case PacketID.S_UNICAST_LEAVE_ROOM:
      return "S_UNICAST_LEAVE_ROOM";
    case PacketID.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
