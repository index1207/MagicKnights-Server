// @ts-ignore

import {Listener} from "./core/listener";
import {CEnterRoomReq} from "./proto/Room";
import {Field, Type, util} from "protobufjs";
import test = util.base64.test;

var os = require('os');

var interfaces = os.networkInterfaces();
var addresses = [];
for (var k in interfaces) {
    for (var k2 in interfaces[k]) {
        var address = interfaces[k][k2];
        if (address.family === 'IPv4' && !address.internal) {
            addresses.push(address.address);
        }
    }
}

const listener: Listener = new Listener(addresses[0], 8081)
listener.run()