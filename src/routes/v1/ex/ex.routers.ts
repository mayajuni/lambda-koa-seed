import { query, request, responses, summary, tags } from 'koa-swagger-decorator/dist';
import { Context } from 'koa';
import { HiBodySchema, HiResponseSchema } from './ex.interface';

const ConsoleTag = tags(['Ex']);

export default class ExRouters {
    @ConsoleTag
    @request('get', '/ex')
    @summary('서머리')
    @query(HiBodySchema)
    @responses(HiResponseSchema)
    static async hiWorld(ctx: Context) {
        ctx.body = `Hi ${ctx.validatedQuery.name}`;
    }
}
