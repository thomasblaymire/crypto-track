// These are the schemas that are used to build our auth forms.

const signupSchema = [
  {
    name: 'name',
    label: 'Name',
    type: 'text',
    componentType: 'text',
    placeholder: 'Name:',
    required: true,
  },
  {
    name: 'email',
    type: 'email',
    label: 'Email',
    placeholder: 'Enter your email address..',
    componentType: 'text',
    required: true,
  },
  {
    name: 'password',
    label: 'Password',
    type: 'password',
    placeholder: 'Enter a secure password',
    componentType: 'text',
    required: true,
  },
];

const loginSchema = [
  {
    name: 'email',
    type: 'email',
    label: 'Email',
    placeholder: 'Enter your email address..',
    componentType: 'text',
    required: true,
  },
  {
    name: 'password',
    label: 'Password',
    type: 'password',
    placeholder: 'Enter a secure password',
    componentType: 'text',
    required: true,
  },
];

const resetSchema = [
  {
    name: 'email',
    type: 'email',
    label: 'Email',
    placeholder: 'Enter your email address..',
    componentType: 'text',
    required: true,
  },
];

export { loginSchema, signupSchema, resetSchema };
