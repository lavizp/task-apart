import { createSlice } from '@reduxjs/toolkit'
import { useAuth } from '../FIrebase/authContext'

const initialState = {
  tasks: {

  },
}

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    init_data: (state, newTask)=>{
      state.tasks = newTask.payload.value;
    },
    add_task: (state, newTask) => {
        let dataToAdd = {
                state: newTask.payload.state,
                id: newTask.payload.id,
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
        let [currentData] = items[action.payload.source.droppableId].splice(action.payload.source.index, 1);
        items[action.payload.destination.droppableId].splice(action.payload.destination.index , 0, currentData);

        state.tasks = items;
    },
  },
})

export const { init_data,add_task, remove_task, update_task } = taskSlice.actions

export default taskSlice.reducer