import {Session} from "../core/session";
import {CMoveInput, SMoveInput} from "../proto/Status";

export class RemotePlayer {

    static Move(session: Session, message: CMoveInput)
    {
        let remotePos: SMoveInput = SMoveInput.create({dir: message.dir, position: message.position, playerId: session.GetID()})
        remotePos.position.y = -remotePos.position.y - 0.8;

        session.Unicast(SMoveInput, remotePos)
    }
}