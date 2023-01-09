const link = 'https://backend-ride-production.up.railway.app/'
export const api = `${link}/api`
export const uploads = `${link}/uploads`

export const requestConfig = (method, data, token = null, image = null) => {
    let config 

    if(image){
        config = {
            method: method,
            body: data,
            headers: {},
        };
    }else if(method === "DELETE" || data === null){
        config = {
            method: method,
            headers:{},
        };
    } else {
        config = {
            method: method,
            body: JSON.stringify(data),
            headers:{
                "Content-Type":"aplication/json"
            }
        }
    }

    if(token){
        config.headers.Authorization = `Bearer ${token}`
    }

    return config;
}