import loader from './loader';
import { APIGatewayProxyEvent, APIGatewayProxyHandler, Context } from 'aws-lambda';
import ServerlessHttp = require('serverless-http');

const app = loader();
app.listen(3000);

// const serverlessHandler: ServerlessHttp.Handler = ServerlessHttp(loader());
// const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent, context: Context) => {
//     context.callbackWaitsForEmptyEventLoop = false;
//
//     const result = await serverlessHandler(event, context);
//
//     return result;
// };

// export {handler};