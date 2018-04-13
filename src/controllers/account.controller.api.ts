import { accountDefinition } from '../models';

export const def = {
  openapi: '3.0.0',
  info: {
    version: '1.0.0',
    title: 'Accounts Microservice',
    description:
      'This is the api for the accounts service created by loopback.',
  },
  paths: {
    '/accounts': {
      get: {
        'x-operation-name': 'getAccounts',
        parameters: [],
        responses: {},
      },
    },
    '/accounts/{id}': {
      get: {
        'x-operation-name': 'getAccount',
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'Model id',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {},
      },
    },
    '/accounts/create': {
      post: {
        'x-operation-name': 'createAccount',
        requestBody: {
          description: 'The account instance to create.',
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Account',
              },
            },
          },
        },
        responses: {},
        parameters: [],
      },
    },
    '/accounts/update': {
      post: {
        'x-operation-name': 'updateAccount',
        parameters: [
          {
            name: 'where',
            in: 'query',
            description:
              'The criteria used to narrow down the number of accounts returned.',
            required: false,
            schema: {
              type: 'object',
            },
          },
        ],
        requestBody: {
          description:
            'Account update object containing the balance to update with.',
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Balance',
              },
            },
          },
        },
        responses: {},
      },
    },
    '/accounts/delete': {
      delete: {
        'x-operation-name': 'deleteAccount',
        parameters: [
          {
            name: 'where',
            in: 'query',
            description:
              'The criteria used to narrow down which account instances to delete.',
            required: true,
            schema: {
              type: 'object',
            },
          },
        ],
        responses: {},
      },
    },
  },
  components: {
    schemas: {
      Account: accountDefinition
      // ,
      // Balance: {
      //   type: 'object',
      //   required: ['balance'],
      //   properties: {
      //     balance: {
      //       type: 'number',
      //     },
      //   },
      // },
    },
  },
};
