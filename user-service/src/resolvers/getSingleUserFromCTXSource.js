import { util } from '@aws-appsync/utils';

export function request(ctx) {
    const { user } = ctx.source;
    return dynamoDBGetItemRequest({ id: user });
}

export function response(ctx) {
    ctx.stash.parent = ctx.result;
    return ctx.result;
}

function dynamoDBGetItemRequest(key) {
    return {
        operation: 'GetItem',
        key: util.dynamodb.toMapValues(key),
    };
}