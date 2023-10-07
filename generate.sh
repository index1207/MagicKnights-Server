protoc                                                        \
-I ./proto                                                    \
--plugin=./node_modules/.bin/protoc-gen-ts_proto.cmd          \
--ts_proto_out=./src/proto ./proto/*

protoc                                                        \
-I ./proto                                                    \
--csharp_out=../client/Assets/Scripts/Network/proto ./proto/*