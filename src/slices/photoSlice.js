import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import photoService from '../services/photoService';

const initialState = {
    photos: [],
    photo: {},
    error: false,
    sucess: false,
    loading: false,
    message: null,
}

//Publish user photo
export const publishPhoto = createAsyncThunk(
    "photo/publish",
    async(photo, thunkAPI) => {
        const token = thunkAPI.getState().auth.user.token

        const data = await photoService.publishPhoto(photo, token)

        //check for errors 
        if(data.errors){
            return thunkAPI.rejectWithValue(data.errors[0])
        }
        return data;
    }
)

//get user photos
export const getUserPhotos = createAsyncThunk(
    "photo/userphotos",
    async (id, thunkAPI) => {
      const token = thunkAPI.getState().auth.user.token;
  
      const data = await photoService.getUserPhotos(id, token);
  
      console.log(data);
      console.log(data.errors);
  
      return data;
    }
  );

export const photoSlice = createSlice({
    name:"publish",
    initialState,
    reducers:{
        resetMessage: (state) => {
            state.message = null;
        },
    },
    extraReducers:(builder) => {
        builder
        .addCase(publishPhoto.pending, (state) => {
            state.loading = true;
            state.error = false;
        }).addCase(publishPhoto.fulfilled, (state, action) => {
            state.loading = false;
            state.sucess = true;
            state.error = null;
            state.photo = action.payload;
            state.photos.unshift(state.photo);
            state.message = "Post publicado com sucesso!"
        }).addCase(publishPhoto.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.photo = {};
        }) .addCase(getUserPhotos.pending, (state) => {
            state.loading = true;
            state.error = false;
        }).addCase(getUserPhotos.fulfilled, (state, action) => {
            state.loading = false;
            state.sucess = true;
            state.error = null;
            state.photos = action.payload;
        })
    }
});

export const {resetMessage} = photoSlice.actions;
export default photoSlice.reducer;