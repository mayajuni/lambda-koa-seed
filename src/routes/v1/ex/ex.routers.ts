import { body, request, responses, summary, tags } from 'koa-swagger-decorator/dist';
import { Context } from 'koa';
import { constants } from 'http2';
import { HiBodySchema, HiResponseSchema } from './ex.interface';

const ConsoleTag = tags(['Ex']);

export default class ExRouters {
    @ConsoleTag
    @request('get', '/ex')
    @summary('서머리')
    @body(HiBodySchema)
    @responses(HiResponseSchema)
    static async hiWorld({body, status, validatedBody}: Context) {
        body = `Hi  ${validatedBody.name}`;
        status = constants.HTTP_STATUS_CREATED;
    }
}
