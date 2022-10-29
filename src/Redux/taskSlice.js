import { createSlice } from '@reduxjs/toolkit'
import { useAuth } from '../FIrebase/authContext'

const initialState = {
  tasks: [

  ],
}

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    init_data: (state, newTask)=>{
      state.tasks = newTask.payload
    },
    add_task: (state, newTask) => {
        let dataToAdd = {
                state: newTask.payload.state,
                id: state.tasks.length,
                catogery: newTask.payload.catogery,
                title: newTask.payload.title,
                description: newTask.payload.description, 
        }
      state.tasks.push(dataToAdd);
    },
    remove_task: (state) => {
      //state.value -= 1
    },
    update_task: (state, action) => {
        if(!action.payload.destination) return;
        let items = state.tasks;
        items[action.payload.source.index].state = action.payload.destination.droppableId;
        state.tasks = items;
    },
  },
})

export const { init_data,add_task, remove_task, update_task } = taskSlice.actions

export default taskSlice.reducer