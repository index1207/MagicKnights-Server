import {Session, sessionList} from "../core/session";
import {CMove, SMove} from "../proto/Status";

export class RemotePlayer {

    static Move(session: Session, message: CMove) {
        for (let playerId of session.room.enterPlayers) {
            if(session.sessionId != playerId)
            {
                sessionList.get(playerId).Send(SMove, SMove.create({dir: message.dir, position: message.position}))
            }
        }
    }
}