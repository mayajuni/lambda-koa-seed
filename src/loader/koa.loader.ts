import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import { constants } from 'http2';
import router from '../routes';
import { Context } from 'koa';

export default (app: Koa) => {
    app.use(bodyParser());

    app.use(async (ctx: Context, next: any) => {
        try {
            await next();
        } catch (error) {
            ctx.status = error.status || error.statusCode || constants.HTTP_STATUS_INTERNAL_SERVER_ERROR;
            if (ctx.status < constants.HTTP_STATUS_INTERNAL_SERVER_ERROR) {
                ctx.body = error.message;
            }
            ctx.throw(error);
        }
    });

    app.use(router.routes());
}