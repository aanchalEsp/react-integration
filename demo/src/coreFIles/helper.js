import axios from 'axios'
// import Cookies from 'js-cookie';
// const token = (!Cookies.get('token')) ? [] : JSON.parse(Cookies.get('token'));

export const request = (path, data, method) => {
    const serverPath = 'https://espsofttech.org:6009/api'
    // const serverPath = 'http://localhost:8000/api'

    var options = {
        method: method,
        url: `${serverPath}/${path}`,
        headers: {
            'Content-Type': 'application/json'
        },
        dataType: 'json'
    };
    // if (token) {
    //     options.headers['Authorization'] = token
    // }
    if (method === 'GET') {
        options['params'] = data
    } else {
        options['data'] = data
    }
    let res = axios(options)
    res.then(res1 => { })
    return res
}

export const requestFormData = (path, data, method) => {
     const serverPath = 'https://espsofttech.org:6009/api'
    // const serverPath = 'http://localhost:8000/api'

    var form_data = new FormData();
    for (var key in data) {
        form_data.append(key, data[key]);
    }
    var options = {
        method: method,
        url: `${serverPath}/${path}`,
        data : form_data,
        headers: { authorization: token },
    };
    let res = axios(options);
    res.then(res1 => { })
    return res
}

export const postRequest = async (path, data) => await request(path, data, 'POST')
export const getRequest = async (path, data) => await request(path, data, 'GET')
export const putRequest = async (path, data) => await request(path, data, 'PUT')
export const deleteRequest = async (path, data) => await request(path, data, 'DELETE')

export const postRequestFormData = async (path, data) => await requestFormData(path, data, 'POST') 