/* eslint-disable */

export const protobufPackage = "packet";

export enum EPacketID {
  S_CONNECTED_TO_SERVER = 0,
  C_ROOM_LIST_REQ = 1,
  S_ROOM_LIST_RES = 2,
  C_CREATE_ROOM = 3,
  C_ENTER_ROOM_REQ = 4,
  S_ENTER_ROOM_RES = 5,
  C_LEAVE_ROOM = 6,
  S_UNICAST_LEAVE_ROOM = 7,
  C_START_GAME = 8,
  S_UNICAST_START_GAME = 9,
  UNRECOGNIZED = -1,
}

export function ePacketIDFromJSON(object: any): EPacketID {
  switch (object) {
    case 0:
    case "S_CONNECTED_TO_SERVER":
      return EPacketID.S_CONNECTED_TO_SERVER;
    case 1:
    case "C_ROOM_LIST_REQ":
      return EPacketID.C_ROOM_LIST_REQ;
    case 2:
    case "S_ROOM_LIST_RES":
      return EPacketID.S_ROOM_LIST_RES;
    case 3:
    case "C_CREATE_ROOM":
      return EPacketID.C_CREATE_ROOM;
    case 4:
    case "C_ENTER_ROOM_REQ":
      return EPacketID.C_ENTER_ROOM_REQ;
    case 5:
    case "S_ENTER_ROOM_RES":
      return EPacketID.S_ENTER_ROOM_RES;
    case 6:
    case "C_LEAVE_ROOM":
      return EPacketID.C_LEAVE_ROOM;
    case 7:
    case "S_UNICAST_LEAVE_ROOM":
      return EPacketID.S_UNICAST_LEAVE_ROOM;
    case 8:
    case "C_START_GAME":
      return EPacketID.C_START_GAME;
    case 9:
    case "S_UNICAST_START_GAME":
      return EPacketID.S_UNICAST_START_GAME;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EPacketID.UNRECOGNIZED;
  }
}

export function ePacketIDToJSON(object: EPacketID): string {
  switch (object) {
    case EPacketID.S_CONNECTED_TO_SERVER:
      return "S_CONNECTED_TO_SERVER";
    case EPacketID.C_ROOM_LIST_REQ:
      return "C_ROOM_LIST_REQ";
    case EPacketID.S_ROOM_LIST_RES:
      return "S_ROOM_LIST_RES";
    case EPacketID.C_CREATE_ROOM:
      return "C_CREATE_ROOM";
    case EPacketID.C_ENTER_ROOM_REQ:
      return "C_ENTER_ROOM_REQ";
    case EPacketID.S_ENTER_ROOM_RES:
      return "S_ENTER_ROOM_RES";
    case EPacketID.C_LEAVE_ROOM:
      return "C_LEAVE_ROOM";
    case EPacketID.S_UNICAST_LEAVE_ROOM:
      return "S_UNICAST_LEAVE_ROOM";
    case EPacketID.C_START_GAME:
      return "C_START_GAME";
    case EPacketID.S_UNICAST_START_GAME:
      return "S_UNICAST_START_GAME";
    case EPacketID.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
