/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Vector3 } from "./Transform";

export const protobufPackage = "packet";

export interface CMove {
  playerId: number;
  position: Vector3 | undefined;
}

function createBaseCMove(): CMove {
  return { playerId: 0, position: undefined };
}

export const CMove = {
  encode(message: CMove, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).int32(message.playerId);
    }
    if (message.position !== undefined) {
      Vector3.encode(message.position, writer.uint32(18).fork()).ldelim();
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
          if (tag !== 8) {
            break;
          }

          message.playerId = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.position = Vector3.decode(reader, reader.uint32());
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
      playerId: isSet(object.playerId) ? Number(object.playerId) : 0,
      position: isSet(object.position) ? Vector3.fromJSON(object.position) : undefined,
    };
  },

  toJSON(message: CMove): unknown {
    const obj: any = {};
    if (message.playerId !== 0) {
      obj.playerId = Math.round(message.playerId);
    }
    if (message.position !== undefined) {
      obj.position = Vector3.toJSON(message.position);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CMove>, I>>(base?: I): CMove {
    return CMove.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CMove>, I>>(object: I): CMove {
    const message = createBaseCMove();
    message.playerId = object.playerId ?? 0;
    message.position = (object.position !== undefined && object.position !== null)
      ? Vector3.fromPartial(object.position)
      : undefined;
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
