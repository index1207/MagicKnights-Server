/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "packet";

/** room data */
export interface Room {
  name: string;
  pwd?: string | undefined;
  enterPlayers: number[];
}

/** on connected to server */
export interface SConnectedToServer {
  playerId: number;
}

/** (request) get room list */
export interface CRoomListReq {
}

/** (response) load all rooms */
export interface SRoomListRes {
  rooms: Room[];
}

/** create new room */
export interface CCreateRoom {
  reqRoom: Room | undefined;
}

export interface CEnterRoomReq {
  roomName: string;
}

export interface SEnterRoomRes {
  isOk: boolean;
}

function createBaseRoom(): Room {
  return { name: "", pwd: undefined, enterPlayers: [] };
}

export const Room = {
  encode(message: Room, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.pwd !== undefined) {
      writer.uint32(18).string(message.pwd);
    }
    writer.uint32(26).fork();
    for (const v of message.enterPlayers) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Room {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRoom();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pwd = reader.string();
          continue;
        case 3:
          if (tag === 24) {
            message.enterPlayers.push(reader.int32());

            continue;
          }

          if (tag === 26) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.enterPlayers.push(reader.int32());
            }

            continue;
          }

          break;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Room {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      pwd: isSet(object.pwd) ? String(object.pwd) : undefined,
      enterPlayers: Array.isArray(object?.enterPlayers) ? object.enterPlayers.map((e: any) => Number(e)) : [],
    };
  },

  toJSON(message: Room): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.pwd !== undefined) {
      obj.pwd = message.pwd;
    }
    if (message.enterPlayers?.length) {
      obj.enterPlayers = message.enterPlayers.map((e) => Math.round(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Room>, I>>(base?: I): Room {
    return Room.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Room>, I>>(object: I): Room {
    const message = createBaseRoom();
    message.name = object.name ?? "";
    message.pwd = object.pwd ?? undefined;
    message.enterPlayers = object.enterPlayers?.map((e) => e) || [];
    return message;
  },
};

function createBaseSConnectedToServer(): SConnectedToServer {
  return { playerId: 0 };
}

export const SConnectedToServer = {
  encode(message: SConnectedToServer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).int32(message.playerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SConnectedToServer {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSConnectedToServer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.playerId = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SConnectedToServer {
    return { playerId: isSet(object.playerId) ? Number(object.playerId) : 0 };
  },

  toJSON(message: SConnectedToServer): unknown {
    const obj: any = {};
    if (message.playerId !== 0) {
      obj.playerId = Math.round(message.playerId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SConnectedToServer>, I>>(base?: I): SConnectedToServer {
    return SConnectedToServer.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SConnectedToServer>, I>>(object: I): SConnectedToServer {
    const message = createBaseSConnectedToServer();
    message.playerId = object.playerId ?? 0;
    return message;
  },
};

function createBaseCRoomListReq(): CRoomListReq {
  return {};
}

export const CRoomListReq = {
  encode(_: CRoomListReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CRoomListReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCRoomListReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): CRoomListReq {
    return {};
  },

  toJSON(_: CRoomListReq): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CRoomListReq>, I>>(base?: I): CRoomListReq {
    return CRoomListReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CRoomListReq>, I>>(_: I): CRoomListReq {
    const message = createBaseCRoomListReq();
    return message;
  },
};

function createBaseSRoomListRes(): SRoomListRes {
  return { rooms: [] };
}

export const SRoomListRes = {
  encode(message: SRoomListRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.rooms) {
      Room.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SRoomListRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSRoomListRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.rooms.push(Room.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SRoomListRes {
    return { rooms: Array.isArray(object?.rooms) ? object.rooms.map((e: any) => Room.fromJSON(e)) : [] };
  },

  toJSON(message: SRoomListRes): unknown {
    const obj: any = {};
    if (message.rooms?.length) {
      obj.rooms = message.rooms.map((e) => Room.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SRoomListRes>, I>>(base?: I): SRoomListRes {
    return SRoomListRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SRoomListRes>, I>>(object: I): SRoomListRes {
    const message = createBaseSRoomListRes();
    message.rooms = object.rooms?.map((e) => Room.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCCreateRoom(): CCreateRoom {
  return { reqRoom: undefined };
}

export const CCreateRoom = {
  encode(message: CCreateRoom, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.reqRoom !== undefined) {
      Room.encode(message.reqRoom, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCreateRoom {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCreateRoom();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.reqRoom = Room.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CCreateRoom {
    return { reqRoom: isSet(object.reqRoom) ? Room.fromJSON(object.reqRoom) : undefined };
  },

  toJSON(message: CCreateRoom): unknown {
    const obj: any = {};
    if (message.reqRoom !== undefined) {
      obj.reqRoom = Room.toJSON(message.reqRoom);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CCreateRoom>, I>>(base?: I): CCreateRoom {
    return CCreateRoom.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CCreateRoom>, I>>(object: I): CCreateRoom {
    const message = createBaseCCreateRoom();
    message.reqRoom = (object.reqRoom !== undefined && object.reqRoom !== null)
      ? Room.fromPartial(object.reqRoom)
      : undefined;
    return message;
  },
};

function createBaseCEnterRoomReq(): CEnterRoomReq {
  return { roomName: "" };
}

export const CEnterRoomReq = {
  encode(message: CEnterRoomReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.roomName !== "") {
      writer.uint32(10).string(message.roomName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CEnterRoomReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCEnterRoomReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.roomName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CEnterRoomReq {
    return { roomName: isSet(object.roomName) ? String(object.roomName) : "" };
  },

  toJSON(message: CEnterRoomReq): unknown {
    const obj: any = {};
    if (message.roomName !== "") {
      obj.roomName = message.roomName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CEnterRoomReq>, I>>(base?: I): CEnterRoomReq {
    return CEnterRoomReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CEnterRoomReq>, I>>(object: I): CEnterRoomReq {
    const message = createBaseCEnterRoomReq();
    message.roomName = object.roomName ?? "";
    return message;
  },
};

function createBaseSEnterRoomRes(): SEnterRoomRes {
  return { isOk: false };
}

export const SEnterRoomRes = {
  encode(message: SEnterRoomRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.isOk === true) {
      writer.uint32(8).bool(message.isOk);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SEnterRoomRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSEnterRoomRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.isOk = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SEnterRoomRes {
    return { isOk: isSet(object.isOk) ? Boolean(object.isOk) : false };
  },

  toJSON(message: SEnterRoomRes): unknown {
    const obj: any = {};
    if (message.isOk === true) {
      obj.isOk = message.isOk;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SEnterRoomRes>, I>>(base?: I): SEnterRoomRes {
    return SEnterRoomRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SEnterRoomRes>, I>>(object: I): SEnterRoomRes {
    const message = createBaseSEnterRoomRes();
    message.isOk = object.isOk ?? false;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
