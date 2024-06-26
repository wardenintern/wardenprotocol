# API Reference

The Node is a central point of contact for the Warden Protocol. It's
responsible for routing requests to the appropriate Keychain, and for routing
responses back to the client.

There are two ways to talk to the node: an HTTP API (default port 1317) and a
gRPC API (default port 9090).

An autogenerated OpenAPI spec for the HTTP API that can be found at [at this
location](/openapi.yml).

A live version of SwaggerUI is bundled with the Node and can be found at
http://localhost:1317.

Since the HTTP API is based on the gRPC API, you can also use it as a quick
reference. If you want to learn more, look at the Protobuf definitions in the
[proto/](https://github.com/warden-protocol/wardenprotocol/tree/main/proto) directory.
