import { body, request, responses, summary, tags } from 'koa-swagger-decorator/dist';
import { Context } from 'koa';
import { constants } from 'http2';
import { HiBodySchema, HiResponseSchema } from './ex.interface';

const ConsoleTag = tags(['Console']);

export class ExRouters {
    @ConsoleTag
    @request('GET', '/ex')
    @summary('앱 추가')
    @body(HiBodySchema)
    @responses(HiResponseSchema)
    static async hiWorld({body, status, validatedBody}: Context) {
        body = `Hi  ${validatedBody.name}`;
        status = constants.HTTP_STATUS_CREATED;
    }
}
