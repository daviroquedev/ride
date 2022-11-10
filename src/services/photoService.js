import {api, requestConfig} from '../utils/config'

// Publish an user post
const publishPhoto = async(data,token) => {
    const config = requestConfig("POST", data, token, true)

    try {
        
        const res = await fetch(api+"/photos", config)
            .then((res) => res.json())
            .catch((err) => err);
        
        return res;
    } catch (error) {
        console.log(error);
    };

};

// get user photos
const getUserPhotos = async(id, token) => {
    const config = requestConfig("GET", null, token)

    try {
       const res = await fetch(api + "/photos/user"+id, config)
        .then((res) => res.json())
        .catch((err) => err);

        return res;
    } catch (error) {
        console.log(error)
        
    }
}

const photoService = {
    publishPhoto,
    getUserPhotos,
};

export default photoService;