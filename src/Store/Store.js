import { configureStore, createSlice } from "@reduxjs/toolkit";

const firstSlice = createSlice({
    name:"firstStore",
    initialState:{
        showHintButton:false,
        hintPopup:1
    },
    reducers:{
        setShowHintButton: (state,action)=>
        {
            //console.log(action)
           state.showHintButton =action.payload;
        },
        incrementHintPopup: (state,action)=>
        {
           state.hintPopup =action.payload;
        }
     
    }
});

export const {setShowHintButton,incrementHintPopup} = firstSlice.actions;


//firstSlice.actions;
const firstStoreReducer =  firstSlice.reducer;


export default configureStore({
    reducer:{firstStore:firstStoreReducer}
});