// @ts-ignore

import {Listener} from "./core/listener";
import os from 'os';

let interfaces = os.networkInterfaces();
let addresses: string[] = [];
for (let k in interfaces) {
    for (let k2 in interfaces[k]) {
        let address = interfaces[k][k2];
        if (address.family === 'IPv4' && !address.internal) {
            addresses.push(address.address);
        }
    }
}

const listener: Listener = new Listener(addresses[0], 8081)
listener.run()