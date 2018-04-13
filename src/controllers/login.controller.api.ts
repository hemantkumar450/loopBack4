import { loginDefinition } from '../models';

export const def = {
  openapi: '3.0.0',
  info: {
    version: '1.0.0',
    title: 'Accounts Microservice',
    description:
      'This is the api for the accounts service created by loopback.',
  },
  paths: {
    '/login/{userName}/{password}': {
      get: {
        'x-operation-name': 'getLogin',
        parameters: [
          {
            name: 'userName',
            in: 'path',
            description: 'Model id',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'password',
            in: 'path',
            description: 'Model id',
            required: true,
            schema: {
              type: 'string',
            },
          }
        ],
        responses: {},
      },
    },
    '/login/create': {
      post: {
        'x-operation-name': 'createlogin',
        requestBody: {
          description: 'login function called.',
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Login',
              },
            },
          },
        },
        responses: {
          '200': {
            description: 'OK',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/result',
                },
              },
            },
          },
        },
        parameters: [],
      },
    }
  },
  components: {
    schemas: {
      Login: loginDefinition,
      result: {
        type: 'object',
        required: ['userName'],
        properties: {
          userName: {
            type: 'string',
          },
          password: {
            type: 'string',
          },
        },
      },
    },
  },
};
