import { SwaggerRouter } from 'koa-swagger-decorator';
import { resolve } from 'path';

const router: SwaggerRouter | any = new SwaggerRouter();
router.mapDir(resolve(__dirname));

router.swagger({
    title: 'seed',
    description: 'seed',
    version: '0.1',
    prefix: '/routes/v1',
    swaggerHtmlEndpoint: '/docs',
    swaggerJsonEndpoint: '/json',
    swaggerOptions: {
        securityDefinitions: {
            cookieAuth: {
                type: 'apiKey',
                in: 'header',
                name: 'access_token',
            },
        },
    },
    swaggerConfiguration: {
        display: {
            defaultModelsExpandDepth: 4,
            defaultModelExpandDepth: 3,
            docExpansion: 'list',
            defaultModelRendering: 'model'
        }
    }
});

export default router;
