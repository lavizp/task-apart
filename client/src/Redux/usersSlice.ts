import { createSlice } from '@reduxjs/toolkit'
const initialState: any = {
  user: {}
}

export const userSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    init_data: (state, newTask)=>{
      state.user = newTask.payload
    },



  },
})

export const { init_data } = userSlice.actions

export default userSlice.reducer