import { postRequest } from "../coreFIles/helper";

export const RegisterAction = (data) => {
   return postRequest('registration', data).then(res => { return res.data })
}

export const LoginAction = (data) => {
   return postRequest('userlogin', data).then(res => { return res.data })
}
