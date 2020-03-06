import loader from './loader';
import { APIGatewayProxyEvent, APIGatewayProxyHandler, Context } from 'aws-lambda';
import ServerlessHttp = require('serverless-http');
import yenv from 'yenv';

const serverlessHandler: ServerlessHttp.Handler = ServerlessHttp(loader());
const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent, context: Context) => {
    context.callbackWaitsForEmptyEventLoop = false;

    const result = await serverlessHandler(event, context);

    return result;
};

export { handler };

if (process.env.NODE_ENV === 'local') {
    const env = yenv('environments/env.dev.yml', {env: 'environment'});
    Object.assign(process.env, env);
    const app = loader();
    app.listen(3000, () =>
        console.log(`${process.env.NODE_ENV} server: http://localhost:3000`));
}
