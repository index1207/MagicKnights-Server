/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { FVector3 } from "./Transform";

export const protobufPackage = "packet";

export enum EInputDirection {
  None = 0,
  Up = 1,
  Down = 2,
  Left = 3,
  Right = 4,
  UNRECOGNIZED = -1,
}

export function eInputDirectionFromJSON(object: any): EInputDirection {
  switch (object) {
    case 0:
    case "None":
      return EInputDirection.None;
    case 1:
    case "Up":
      return EInputDirection.Up;
    case 2:
    case "Down":
      return EInputDirection.Down;
    case 3:
    case "Left":
      return EInputDirection.Left;
    case 4:
    case "Right":
      return EInputDirection.Right;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EInputDirection.UNRECOGNIZED;
  }
}

export function eInputDirectionToJSON(object: EInputDirection): string {
  switch (object) {
    case EInputDirection.None:
      return "None";
    case EInputDirection.Up:
      return "Up";
    case EInputDirection.Down:
      return "Down";
    case EInputDirection.Left:
      return "Left";
    case EInputDirection.Right:
      return "Right";
    case EInputDirection.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** 10 */
export interface CMoveInput {
  position: FVector3 | undefined;
  dir: EInputDirection;
}

/** 11 */
export interface SMoveInput {
  position: FVector3 | undefined;
  dir: EInputDirection;
  playerId: number;
}

function createBaseCMoveInput(): CMoveInput {
  return { position: undefined, dir: 0 };
}

export const CMoveInput = {
  encode(message: CMoveInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.position !== undefined) {
      FVector3.encode(message.position, writer.uint32(10).fork()).ldelim();
    }
    if (message.dir !== 0) {
      writer.uint32(16).int32(message.dir);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMoveInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMoveInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.position = FVector3.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.dir = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CMoveInput {
    return {
      position: isSet(object.position) ? FVector3.fromJSON(object.position) : undefined,
      dir: isSet(object.dir) ? eInputDirectionFromJSON(object.dir) : 0,
    };
  },

  toJSON(message: CMoveInput): unknown {
    const obj: any = {};
    if (message.position !== undefined) {
      obj.position = FVector3.toJSON(message.position);
    }
    if (message.dir !== 0) {
      obj.dir = eInputDirectionToJSON(message.dir);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CMoveInput>, I>>(base?: I): CMoveInput {
    return CMoveInput.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CMoveInput>, I>>(object: I): CMoveInput {
    const message = createBaseCMoveInput();
    message.position = (object.position !== undefined && object.position !== null)
      ? FVector3.fromPartial(object.position)
      : undefined;
    message.dir = object.dir ?? 0;
    return message;
  },
};

function createBaseSMoveInput(): SMoveInput {
  return { position: undefined, dir: 0, playerId: 0 };
}

export const SMoveInput = {
  encode(message: SMoveInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.position !== undefined) {
      FVector3.encode(message.position, writer.uint32(10).fork()).ldelim();
    }
    if (message.dir !== 0) {
      writer.uint32(16).int32(message.dir);
    }
    if (message.playerId !== 0) {
      writer.uint32(24).int32(message.playerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SMoveInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSMoveInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.position = FVector3.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.dir = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 24) {
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

  fromJSON(object: any): SMoveInput {
    return {
      position: isSet(object.position) ? FVector3.fromJSON(object.position) : undefined,
      dir: isSet(object.dir) ? eInputDirectionFromJSON(object.dir) : 0,
      playerId: isSet(object.playerId) ? Number(object.playerId) : 0,
    };
  },

  toJSON(message: SMoveInput): unknown {
    const obj: any = {};
    if (message.position !== undefined) {
      obj.position = FVector3.toJSON(message.position);
    }
    if (message.dir !== 0) {
      obj.dir = eInputDirectionToJSON(message.dir);
    }
    if (message.playerId !== 0) {
      obj.playerId = Math.round(message.playerId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SMoveInput>, I>>(base?: I): SMoveInput {
    return SMoveInput.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SMoveInput>, I>>(object: I): SMoveInput {
    const message = createBaseSMoveInput();
    message.position = (object.position !== undefined && object.position !== null)
      ? FVector3.fromPartial(object.position)
      : undefined;
    message.dir = object.dir ?? 0;
    message.playerId = object.playerId ?? 0;
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
