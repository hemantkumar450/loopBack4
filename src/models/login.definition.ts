export const loginDefinition = {
  name: 'Login',
  properties: {
    id: {
      type: 'string',
      required: true,
      id: true,
    },
    userName: {
      type: 'string'
    },
    password: {
      type: 'string'
    }
  },
};
