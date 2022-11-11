import {api, requestConfig} from '../utils/config'

// Publish an user post
const publishPhoto = async(data,token) => {
    const config = requestConfig("POST", data, token, true)

    try {
        
        const res = await fetch(api+"/photos", config)
            .then((res) => res.json())
            .catch((err) => err);
            console.log("publisphoto"+res)
        
        return res;
    } catch (error) {
        console.log(error);
    };

};

// get user photos
const getUserPhotos = async (id) => {
    const config = requestConfig("GET");
  
    try {
      const res = await fetch(api + "/photos/user/" +id, config)
        .then((res) => res.json())
        .catch((err) => err);
  
      return res;
    } catch (error) {
      console.log(error);
    }
  };

  // delete a photo
  const deletePhoto = async (id, token) => {
    const config = requestConfig("DELETE", null, token)

    try {
      const res = await fetch(api + "/photos/" + id, config)
        .then((res)=> res.json())
        .catch((err) => err)
      
      return res
    } catch (error) {
      console.log(error)
    }
  }

const photoService = {
    publishPhoto,
    getUserPhotos,
    deletePhoto,
};

export default photoService;