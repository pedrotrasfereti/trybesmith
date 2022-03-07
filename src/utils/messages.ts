export const request = {
  login: {
    invalid: 'Username or password invalid',
  },
  token: {
    notFound: 'Token not found',
    invalid: 'Invalid token',
  },
};

export const user = {
  username: {
    required: 'Username is required',
    base: 'Username must be a string',
    min: 'Username must be longer than 2 characters',
  },
  classe: {
    required: 'Classe is required',
    base: 'Classe must be a string',
    min: 'Classe must be longer than 2 characters',
  },
  level: {
    required: 'Level is required',
    base: 'Level must be a number',
    positive: 'Level must be greater than 0',
  },
  password: {
    required: 'Password is required',
    base: 'Password must be a string',
    min: 'Password must be longer than 7 characters',
  },
};

export const product = {
  name: {
    required: 'Name is required',
    base: 'Name must be a string',
    min: 'Name must be longer than 2 characters',
  },
  amount: {
    required: 'Amount is required',
    base: 'Amount must be a string',
    min: 'Amount must be longer than 2 characters',
  },
};

export const order = {
  notFound: 'Order not found',
  products: {
    required: 'Products is required',
    base: 'Products must be an array of numbers',
    min: 'Products can\'t be empty',
  },
};
