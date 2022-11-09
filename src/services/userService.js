import {api, requestConfig} from '../utils/config';

//get user details
const profile = async(data, token) => {
    const config = requestConfig("GET", data, token)


    try {
        const res = await fetch(api + "/users/profile", config)
            .then((res) => res.json())
            .catch((err) => err);

            return res;
    }catch(error){
        console.log(error);
    }
};

//update user details
const updateProfile = async(data,token) => {
    const config =requestConfig("PUT", data, token, true)
    config.headers['Content-Type']='application/json';

    try{
        const res  =await fetch(api+ "/users/", config)
            .then((res) => {
                res.json()
            })
            .catch((err)=>err);
        return res;
    } catch(error){
        console.log(error)
    }; 
};

const userService = {
    profile,
    updateProfile
}

export default userService;