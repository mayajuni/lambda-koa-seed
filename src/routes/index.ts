import apiV1Router from './v1';
import { SwaggerRouter } from 'koa-swagger-decorator/dist';

const router: SwaggerRouter | any = new SwaggerRouter();
router.use('/routes/v1', apiV1Router.routes());

export default router;
