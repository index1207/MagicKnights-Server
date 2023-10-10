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

export interface CMove {
  position: FVector3 | undefined;
  dir: EInputDirection;
}

export interface SMove {
  position: FVector3 | undefined;
  dir: EInputDirection;
}

function createBaseCMove(): CMove {
  return { position: undefined, dir: 0 };
}

export const CMove = {
  encode(message: CMove, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.position !== undefined) {
      FVector3.encode(message.position, writer.uint32(10).fork()).ldelim();
    }
    if (message.dir !== 0) {
      writer.uint32(16).int32(message.dir);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMove {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMove();
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

  fromJSON(object: any): CMove {
    return {
      position: isSet(object.position) ? FVector3.fromJSON(object.position) : undefined,
      dir: isSet(object.dir) ? eInputDirectionFromJSON(object.dir) : 0,
    };
  },

  toJSON(message: CMove): unknown {
    const obj: any = {};
    if (message.position !== undefined) {
      obj.position = FVector3.toJSON(message.position);
    }
    if (message.dir !== 0) {
      obj.dir = eInputDirectionToJSON(message.dir);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CMove>, I>>(base?: I): CMove {
    return CMove.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CMove>, I>>(object: I): CMove {
    const message = createBaseCMove();
    message.position = (object.position !== undefined && object.position !== null)
      ? FVector3.fromPartial(object.position)
      : undefined;
    message.dir = object.dir ?? 0;
    return message;
  },
};

function createBaseSMove(): SMove {
  return { position: undefined, dir: 0 };
}

export const SMove = {
  encode(message: SMove, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.position !== undefined) {
      FVector3.encode(message.position, writer.uint32(10).fork()).ldelim();
    }
    if (message.dir !== 0) {
      writer.uint32(16).int32(message.dir);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SMove {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSMove();
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

  fromJSON(object: any): SMove {
    return {
      position: isSet(object.position) ? FVector3.fromJSON(object.position) : undefined,
      dir: isSet(object.dir) ? eInputDirectionFromJSON(object.dir) : 0,
    };
  },

  toJSON(message: SMove): unknown {
    const obj: any = {};
    if (message.position !== undefined) {
      obj.position = FVector3.toJSON(message.position);
    }
    if (message.dir !== 0) {
      obj.dir = eInputDirectionToJSON(message.dir);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SMove>, I>>(base?: I): SMove {
    return SMove.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SMove>, I>>(object: I): SMove {
    const message = createBaseSMove();
    message.position = (object.position !== undefined && object.position !== null)
      ? FVector3.fromPartial(object.position)
      : undefined;
    message.dir = object.dir ?? 0;
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
