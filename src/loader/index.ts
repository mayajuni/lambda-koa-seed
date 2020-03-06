import Koa from 'koa';
import koaLoader from './koa.loader';
import errorLoader from './error.loader';

const app: Koa = new Koa();

export default () => {
    // Koa Loader
    koaLoader(app);
    // Error Loader
    errorLoader(app);

    return app;
}