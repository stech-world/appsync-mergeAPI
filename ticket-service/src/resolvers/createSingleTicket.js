import { util } from '@aws-appsync/utils';

export function request(ctx) {
  return {
    operation: 'PutItem',
    key: util.dynamodb.toMapValues({id: util.autoId()}),
    attributeValues: util.dynamodb.toMapValues(ctx.arguments),
  };
}

export function response(ctx) {
    ctx.stash.parent = ctx.result;
    return ctx.result;
}

