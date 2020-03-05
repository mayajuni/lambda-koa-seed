import { constants } from 'http2';

export const HiBodySchema = {
    name: {
        type: 'string',
        description: '이름',
        required: true,
    }
};

export const HiResponseSchema = {
    [constants.HTTP_STATUS_CREATED]: {
        description: '앱 생성 완료',
        schema: {
            type: 'string',
            example: 'Hi Ex.'
        },
    },
    [constants.HTTP_STATUS_UNPROCESSABLE_ENTITY]: {description: '클라이언트 요청 오류'},
    [constants.HTTP_STATUS_INTERNAL_SERVER_ERROR]: {description: '서버 오류'},
};