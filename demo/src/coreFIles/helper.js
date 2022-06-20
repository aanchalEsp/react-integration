import axios from 'axios'


export const request = (path, data, method) => {
    const serverPath = 'https://espsofttech.org:6030/api'

    var options = {
        method: method,
        url: `${serverPath}/${path}`,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
                },
        dataType: 'json'
    };
   
    if (method === 'GET') {
        options['params'] = data
    } else {
        options['data'] = data
    }
    let res = axios(options)
    res.then(res1 => { })
    return res
}


export const postRequest = async (path, data) => await request(path, data, 'POST')


