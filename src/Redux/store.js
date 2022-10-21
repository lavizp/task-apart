import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./taskSlice";

export default configureStore({
    reducer:{
        taskSlice: taskSlice,
    }
});