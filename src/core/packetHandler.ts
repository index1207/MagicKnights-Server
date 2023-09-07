import {Session} from "./session";
import {SEnterGame} from "../proto/Room";

export let PacketID: Map<any, number> = new Map<any, number>()
PacketID.set(SEnterGame, 1)

export function OnRecvPacket(session: Session, buffer: Buffer) {
    const pktId: number = buffer.readUint16BE(0);
    const serializedData: Buffer = buffer.subarray(4, buffer.byteLength)

    switch (pktId)
    {

    }
}