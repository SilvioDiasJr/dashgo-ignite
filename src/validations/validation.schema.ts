import * as yup from 'yup'

export default {
  login:  yup.object().shape({
    email: yup
      .string()
      .required('E-mail obrigatório.')
      .email('Informe um e-mail válido.'),
    password: yup
      .string()
      .required('Necessário informar sua senha.')
  }),
  registerUser: yup.object().shape({
    name: yup
      .string()
      .required('Informe seu nome'),
    email: yup
      .string()
      .required('E-mail obrigatório.')
      .email('Informe um e-mail válido.'),
    password: yup
      .string()
      .required('Necessário informar sua senha.')
      .min(6, 'A senha deve conter no mínimo 6 dígitos.'),
    confirm_password: yup
      .string()
      .oneOf([yup.ref('password')], 'As senhas devem ser idênticas.')
  })
}