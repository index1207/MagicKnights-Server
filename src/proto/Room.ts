/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "packet";

export interface SEnterGame {
  playerId: number;
}

function createBaseSEnterGame(): SEnterGame {
  return { playerId: 0 };
}

export const SEnterGame = {
  encode(message: SEnterGame, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).int32(message.playerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SEnterGame {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSEnterGame();
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

  fromJSON(object: any): SEnterGame {
    return { playerId: isSet(object.playerId) ? Number(object.playerId) : 0 };
  },

  toJSON(message: SEnterGame): unknown {
    const obj: any = {};
    if (message.playerId !== 0) {
      obj.playerId = Math.round(message.playerId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SEnterGame>, I>>(base?: I): SEnterGame {
    return SEnterGame.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SEnterGame>, I>>(object: I): SEnterGame {
    const message = createBaseSEnterGame();
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
