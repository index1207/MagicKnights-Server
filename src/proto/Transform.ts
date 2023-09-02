/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "packet";

export interface FVector3 {
  x: number;
  y: number;
  z: number;
}

export interface FQuaternion {
  x: number;
  y: number;
  z: number;
  w: number;
}

function createBaseFVector3(): FVector3 {
  return { x: 0, y: 0, z: 0 };
}

export const FVector3 = {
  encode(message: FVector3, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.x !== 0) {
      writer.uint32(13).float(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(21).float(message.y);
    }
    if (message.z !== 0) {
      writer.uint32(29).float(message.z);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FVector3 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFVector3();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 13) {
            break;
          }

          message.x = reader.float();
          continue;
        case 2:
          if (tag !== 21) {
            break;
          }

          message.y = reader.float();
          continue;
        case 3:
          if (tag !== 29) {
            break;
          }

          message.z = reader.float();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FVector3 {
    return {
      x: isSet(object.x) ? Number(object.x) : 0,
      y: isSet(object.y) ? Number(object.y) : 0,
      z: isSet(object.z) ? Number(object.z) : 0,
    };
  },

  toJSON(message: FVector3): unknown {
    const obj: any = {};
    if (message.x !== 0) {
      obj.x = message.x;
    }
    if (message.y !== 0) {
      obj.y = message.y;
    }
    if (message.z !== 0) {
      obj.z = message.z;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FVector3>, I>>(base?: I): FVector3 {
    return FVector3.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FVector3>, I>>(object: I): FVector3 {
    const message = createBaseFVector3();
    message.x = object.x ?? 0;
    message.y = object.y ?? 0;
    message.z = object.z ?? 0;
    return message;
  },
};

function createBaseFQuaternion(): FQuaternion {
  return { x: 0, y: 0, z: 0, w: 0 };
}

export const FQuaternion = {
  encode(message: FQuaternion, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.x !== 0) {
      writer.uint32(13).float(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(21).float(message.y);
    }
    if (message.z !== 0) {
      writer.uint32(29).float(message.z);
    }
    if (message.w !== 0) {
      writer.uint32(37).float(message.w);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FQuaternion {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFQuaternion();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 13) {
            break;
          }

          message.x = reader.float();
          continue;
        case 2:
          if (tag !== 21) {
            break;
          }

          message.y = reader.float();
          continue;
        case 3:
          if (tag !== 29) {
            break;
          }

          message.z = reader.float();
          continue;
        case 4:
          if (tag !== 37) {
            break;
          }

          message.w = reader.float();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FQuaternion {
    return {
      x: isSet(object.x) ? Number(object.x) : 0,
      y: isSet(object.y) ? Number(object.y) : 0,
      z: isSet(object.z) ? Number(object.z) : 0,
      w: isSet(object.w) ? Number(object.w) : 0,
    };
  },

  toJSON(message: FQuaternion): unknown {
    const obj: any = {};
    if (message.x !== 0) {
      obj.x = message.x;
    }
    if (message.y !== 0) {
      obj.y = message.y;
    }
    if (message.z !== 0) {
      obj.z = message.z;
    }
    if (message.w !== 0) {
      obj.w = message.w;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FQuaternion>, I>>(base?: I): FQuaternion {
    return FQuaternion.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FQuaternion>, I>>(object: I): FQuaternion {
    const message = createBaseFQuaternion();
    message.x = object.x ?? 0;
    message.y = object.y ?? 0;
    message.z = object.z ?? 0;
    message.w = object.w ?? 0;
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
