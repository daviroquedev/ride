export const api = "http://localhost:5173/api"
export const uploads = "http://localhost:5173/uploads"

export const requestConfig = (method, data, token = null, image = null) => {
    let config 

    if(image){
        config = {
            method,
            body: data,
            headers: {}
        }
    }else if(method === "DELETE" || data === null){
        config = {
            method,
            headers:{}
        }
    } else {
        config = {
            method,
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