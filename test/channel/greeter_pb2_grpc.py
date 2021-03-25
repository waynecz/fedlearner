# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
"""Client and server classes corresponding to protobuf-defined services."""
import grpc

from test.channel import greeter_pb2 as test_dot_channel_dot_greeter__pb2


class GreeterStub(object):
    """Missing associated documentation comment in .proto file."""

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.HelloUnaryUnary = channel.unary_unary(
                '/test.channel.Greeter/HelloUnaryUnary',
                request_serializer=test_dot_channel_dot_greeter__pb2.Request.SerializeToString,
                response_deserializer=test_dot_channel_dot_greeter__pb2.Response.FromString,
                )
        self.HelloUnaryStream = channel.unary_stream(
                '/test.channel.Greeter/HelloUnaryStream',
                request_serializer=test_dot_channel_dot_greeter__pb2.Request.SerializeToString,
                response_deserializer=test_dot_channel_dot_greeter__pb2.Response.FromString,
                )
        self.HelloStreamUnary = channel.stream_unary(
                '/test.channel.Greeter/HelloStreamUnary',
                request_serializer=test_dot_channel_dot_greeter__pb2.Request.SerializeToString,
                response_deserializer=test_dot_channel_dot_greeter__pb2.Response.FromString,
                )
        self.HelloStreamStream = channel.stream_stream(
                '/test.channel.Greeter/HelloStreamStream',
                request_serializer=test_dot_channel_dot_greeter__pb2.Request.SerializeToString,
                response_deserializer=test_dot_channel_dot_greeter__pb2.Response.FromString,
                )


class GreeterServicer(object):
    """Missing associated documentation comment in .proto file."""

    def HelloUnaryUnary(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def HelloUnaryStream(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def HelloStreamUnary(self, request_iterator, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def HelloStreamStream(self, request_iterator, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_GreeterServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'HelloUnaryUnary': grpc.unary_unary_rpc_method_handler(
                    servicer.HelloUnaryUnary,
                    request_deserializer=test_dot_channel_dot_greeter__pb2.Request.FromString,
                    response_serializer=test_dot_channel_dot_greeter__pb2.Response.SerializeToString,
            ),
            'HelloUnaryStream': grpc.unary_stream_rpc_method_handler(
                    servicer.HelloUnaryStream,
                    request_deserializer=test_dot_channel_dot_greeter__pb2.Request.FromString,
                    response_serializer=test_dot_channel_dot_greeter__pb2.Response.SerializeToString,
            ),
            'HelloStreamUnary': grpc.stream_unary_rpc_method_handler(
                    servicer.HelloStreamUnary,
                    request_deserializer=test_dot_channel_dot_greeter__pb2.Request.FromString,
                    response_serializer=test_dot_channel_dot_greeter__pb2.Response.SerializeToString,
            ),
            'HelloStreamStream': grpc.stream_stream_rpc_method_handler(
                    servicer.HelloStreamStream,
                    request_deserializer=test_dot_channel_dot_greeter__pb2.Request.FromString,
                    response_serializer=test_dot_channel_dot_greeter__pb2.Response.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'test.channel.Greeter', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))


 # This class is part of an EXPERIMENTAL API.
class Greeter(object):
    """Missing associated documentation comment in .proto file."""

    @staticmethod
    def HelloUnaryUnary(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/test.channel.Greeter/HelloUnaryUnary',
            test_dot_channel_dot_greeter__pb2.Request.SerializeToString,
            test_dot_channel_dot_greeter__pb2.Response.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def HelloUnaryStream(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_stream(request, target, '/test.channel.Greeter/HelloUnaryStream',
            test_dot_channel_dot_greeter__pb2.Request.SerializeToString,
            test_dot_channel_dot_greeter__pb2.Response.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def HelloStreamUnary(request_iterator,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.stream_unary(request_iterator, target, '/test.channel.Greeter/HelloStreamUnary',
            test_dot_channel_dot_greeter__pb2.Request.SerializeToString,
            test_dot_channel_dot_greeter__pb2.Response.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def HelloStreamStream(request_iterator,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.stream_stream(request_iterator, target, '/test.channel.Greeter/HelloStreamStream',
            test_dot_channel_dot_greeter__pb2.Request.SerializeToString,
            test_dot_channel_dot_greeter__pb2.Response.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)