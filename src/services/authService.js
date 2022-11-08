import {api, requestConfig} from '../utils/config'

// reigster an user
const register = async(data) => {
    const config = requestConfig("POST", data)
    config.headers['Content-Type']='application/json'
    try {
        const res= await fetch(api + "/users/register", config)
            .then((res)=> res.json())
            .catch((err)=> err);

        if(res){
            localStorage.setItem("user", JSON.stringify(res))
        }

        return res;



    } catch(error){
        console.log(error)
    }
}


const authService = {
    register,
}

export default authService;