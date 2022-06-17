import { getRequest, postRequest, putRequest, deleteRequest, postRequestFormData } from "../coreFIles/helper";



export const RegisterAction = (data) => {
   return postRequest('userRegister', data).then(res => { return res.data })
}

