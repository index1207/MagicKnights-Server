/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "packet";

/** room data */
export interface FRoom {
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
export interface SRoomList {
  rooms: FRoom[];
}

/** create new room */
export interface CCreateRoom {
  reqRoom: FRoom | undefined;
}

export interface CEnterRoomReq {
  roomName: string;
  submitPwd: string;
}

export interface SEnterRoomRes {
  isOk: boolean;
  enterRoom?: FRoom | undefined;
}

export interface CLeaveRoom {
}

export interface SNotifyLeaveRoom {
  room: FRoom | undefined;
}

export interface CStartGameReq {
}

export interface SNotifyStartGame {
}

function createBaseFRoom(): FRoom {
  return { name: "", pwd: undefined, enterPlayers: [] };
}

export const FRoom = {
  encode(message: FRoom, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): FRoom {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFRoom();
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

  fromJSON(object: any): FRoom {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      pwd: isSet(object.pwd) ? String(object.pwd) : undefined,
      enterPlayers: Array.isArray(object?.enterPlayers) ? object.enterPlayers.map((e: any) => Number(e)) : [],
    };
  },

  toJSON(message: FRoom): unknown {
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

  create<I extends Exact<DeepPartial<FRoom>, I>>(base?: I): FRoom {
    return FRoom.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FRoom>, I>>(object: I): FRoom {
    const message = createBaseFRoom();
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

function createBaseSRoomList(): SRoomList {
  return { rooms: [] };
}

export const SRoomList = {
  encode(message: SRoomList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.rooms) {
      FRoom.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SRoomList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSRoomList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.rooms.push(FRoom.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SRoomList {
    return { rooms: Array.isArray(object?.rooms) ? object.rooms.map((e: any) => FRoom.fromJSON(e)) : [] };
  },

  toJSON(message: SRoomList): unknown {
    const obj: any = {};
    if (message.rooms?.length) {
      obj.rooms = message.rooms.map((e) => FRoom.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SRoomList>, I>>(base?: I): SRoomList {
    return SRoomList.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SRoomList>, I>>(object: I): SRoomList {
    const message = createBaseSRoomList();
    message.rooms = object.rooms?.map((e) => FRoom.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCCreateRoom(): CCreateRoom {
  return { reqRoom: undefined };
}

export const CCreateRoom = {
  encode(message: CCreateRoom, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.reqRoom !== undefined) {
      FRoom.encode(message.reqRoom, writer.uint32(10).fork()).ldelim();
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

          message.reqRoom = FRoom.decode(reader, reader.uint32());
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
    return { reqRoom: isSet(object.reqRoom) ? FRoom.fromJSON(object.reqRoom) : undefined };
  },

  toJSON(message: CCreateRoom): unknown {
    const obj: any = {};
    if (message.reqRoom !== undefined) {
      obj.reqRoom = FRoom.toJSON(message.reqRoom);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CCreateRoom>, I>>(base?: I): CCreateRoom {
    return CCreateRoom.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CCreateRoom>, I>>(object: I): CCreateRoom {
    const message = createBaseCCreateRoom();
    message.reqRoom = (object.reqRoom !== undefined && object.reqRoom !== null)
      ? FRoom.fromPartial(object.reqRoom)
      : undefined;
    return message;
  },
};

function createBaseCEnterRoomReq(): CEnterRoomReq {
  return { roomName: "", submitPwd: "" };
}

export const CEnterRoomReq = {
  encode(message: CEnterRoomReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.roomName !== "") {
      writer.uint32(10).string(message.roomName);
    }
    if (message.submitPwd !== "") {
      writer.uint32(18).string(message.submitPwd);
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
        case 2:
          if (tag !== 18) {
            break;
          }

          message.submitPwd = reader.string();
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
    return {
      roomName: isSet(object.roomName) ? String(object.roomName) : "",
      submitPwd: isSet(object.submitPwd) ? String(object.submitPwd) : "",
    };
  },

  toJSON(message: CEnterRoomReq): unknown {
    const obj: any = {};
    if (message.roomName !== "") {
      obj.roomName = message.roomName;
    }
    if (message.submitPwd !== "") {
      obj.submitPwd = message.submitPwd;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CEnterRoomReq>, I>>(base?: I): CEnterRoomReq {
    return CEnterRoomReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CEnterRoomReq>, I>>(object: I): CEnterRoomReq {
    const message = createBaseCEnterRoomReq();
    message.roomName = object.roomName ?? "";
    message.submitPwd = object.submitPwd ?? "";
    return message;
  },
};

function createBaseSEnterRoomRes(): SEnterRoomRes {
  return { isOk: false, enterRoom: undefined };
}

export const SEnterRoomRes = {
  encode(message: SEnterRoomRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.isOk === true) {
      writer.uint32(8).bool(message.isOk);
    }
    if (message.enterRoom !== undefined) {
      FRoom.encode(message.enterRoom, writer.uint32(18).fork()).ldelim();
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
        case 2:
          if (tag !== 18) {
            break;
          }

          message.enterRoom = FRoom.decode(reader, reader.uint32());
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
    return {
      isOk: isSet(object.isOk) ? Boolean(object.isOk) : false,
      enterRoom: isSet(object.enterRoom) ? FRoom.fromJSON(object.enterRoom) : undefined,
    };
  },

  toJSON(message: SEnterRoomRes): unknown {
    const obj: any = {};
    if (message.isOk === true) {
      obj.isOk = message.isOk;
    }
    if (message.enterRoom !== undefined) {
      obj.enterRoom = FRoom.toJSON(message.enterRoom);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SEnterRoomRes>, I>>(base?: I): SEnterRoomRes {
    return SEnterRoomRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SEnterRoomRes>, I>>(object: I): SEnterRoomRes {
    const message = createBaseSEnterRoomRes();
    message.isOk = object.isOk ?? false;
    message.enterRoom = (object.enterRoom !== undefined && object.enterRoom !== null)
      ? FRoom.fromPartial(object.enterRoom)
      : undefined;
    return message;
  },
};

function createBaseCLeaveRoom(): CLeaveRoom {
  return {};
}

export const CLeaveRoom = {
  encode(_: CLeaveRoom, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CLeaveRoom {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCLeaveRoom();
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

  fromJSON(_: any): CLeaveRoom {
    return {};
  },

  toJSON(_: CLeaveRoom): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CLeaveRoom>, I>>(base?: I): CLeaveRoom {
    return CLeaveRoom.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CLeaveRoom>, I>>(_: I): CLeaveRoom {
    const message = createBaseCLeaveRoom();
    return message;
  },
};

function createBaseSNotifyLeaveRoom(): SNotifyLeaveRoom {
  return { room: undefined };
}

export const SNotifyLeaveRoom = {
  encode(message: SNotifyLeaveRoom, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.room !== undefined) {
      FRoom.encode(message.room, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SNotifyLeaveRoom {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSNotifyLeaveRoom();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.room = FRoom.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SNotifyLeaveRoom {
    return { room: isSet(object.room) ? FRoom.fromJSON(object.room) : undefined };
  },

  toJSON(message: SNotifyLeaveRoom): unknown {
    const obj: any = {};
    if (message.room !== undefined) {
      obj.room = FRoom.toJSON(message.room);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SNotifyLeaveRoom>, I>>(base?: I): SNotifyLeaveRoom {
    return SNotifyLeaveRoom.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SNotifyLeaveRoom>, I>>(object: I): SNotifyLeaveRoom {
    const message = createBaseSNotifyLeaveRoom();
    message.room = (object.room !== undefined && object.room !== null) ? FRoom.fromPartial(object.room) : undefined;
    return message;
  },
};

function createBaseCStartGameReq(): CStartGameReq {
  return {};
}

export const CStartGameReq = {
  encode(_: CStartGameReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CStartGameReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCStartGameReq();
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

  fromJSON(_: any): CStartGameReq {
    return {};
  },

  toJSON(_: CStartGameReq): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CStartGameReq>, I>>(base?: I): CStartGameReq {
    return CStartGameReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CStartGameReq>, I>>(_: I): CStartGameReq {
    const message = createBaseCStartGameReq();
    return message;
  },
};

function createBaseSNotifyStartGame(): SNotifyStartGame {
  return {};
}

export const SNotifyStartGame = {
  encode(_: SNotifyStartGame, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SNotifyStartGame {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSNotifyStartGame();
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

  fromJSON(_: any): SNotifyStartGame {
    return {};
  },

  toJSON(_: SNotifyStartGame): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<SNotifyStartGame>, I>>(base?: I): SNotifyStartGame {
    return SNotifyStartGame.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SNotifyStartGame>, I>>(_: I): SNotifyStartGame {
    const message = createBaseSNotifyStartGame();
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
