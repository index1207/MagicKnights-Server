protoc -I ./proto --plugin=./node_modules/.bin/protoc-gen-ts_proto.cmd --ts_proto_out=./src/proto ./proto/Packet.proto
protoc -I ./proto --csharp_out=../client/Assets/Scripts/proto ./proto/Transform.proto
protoc -I ./proto --csharp_out=../client/Assets/Scripts/proto ./proto/Room.proto
protoc -I ./proto --csharp_out=../client/Assets/Scripts/proto ./proto/Packet.proto