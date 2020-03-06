import { resolve } from 'path';
import { SwaggerRouter } from 'koa-swagger-decorator/dist';

const router: SwaggerRouter | any = new SwaggerRouter();

// router.map(dd);
router.mapDir(resolve(__dirname));

router.swagger({
    title: 'seed',
    description: 'seed',
    version: '0.1',
    prefix: '/api/v1',
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
