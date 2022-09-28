import { configureStore, createSlice } from "@reduxjs/toolkit";

const firstSlice = createSlice({
    name:"firstStore",
    initialState:{
        enableRadio:true,
        showHintButton:false,
        hintPopup:1,
        restartButton:false
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
        },
        enableDisableRadio: (state,action)=>
        {
           state.enableRadio =action.payload;
        },
        updateRestart: (state,action)=>
        {
           state.restartButton =action.payload;
        },
        resetAll: (state,action)=>
        {
            state.enableRadio =true;
            state.showHintButton =false;
            state.hintPopup =1;
            state.restartButton =false;
            
        }

     
    }
});

export const {setShowHintButton,incrementHintPopup,enableDisableRadio,updateRestart,resetAll} = firstSlice.actions;


//firstSlice.actions;
const firstStoreReducer =  firstSlice.reducer;


export default configureStore({
    reducer:{firstStore:firstStoreReducer}
});