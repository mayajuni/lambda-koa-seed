import Koa from 'koa';
import { constants } from 'http2';
import { Context } from 'koa';

export default (app: Koa) => {
    app.on('error', async (error: Error, ctx: Context) => {
        const log = {
            path: ctx.path,
            method: ctx.method,
            ip: ctx.ip,
            headers: ctx.headers,
            protocol: ctx.protocol,
            pathParameters: ctx.params,
            querystring: ctx.query,
            body: ctx.body,
            response: {
                code: ctx.status,
                name: error.name,
                message: error.message,
                stack: error.stack,
            },
        };

        // 500 이상 시스템 에러는 따로 관리하기 위해서 이렇게 처리
        if (ctx.status < constants.HTTP_STATUS_INTERNAL_SERVER_ERROR) {
            console.log(log);
        } else {
            console.log(log);
        }
    });
};
