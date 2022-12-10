import { createSlice } from '@reduxjs/toolkit'
import { act } from 'react-dom/test-utils'

const initialState: any = {
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
                _id: newTask.payload._id,
                catogery: newTask.payload.catogery,
                title: newTask.payload.title,
                description: newTask.payload.description, 
        }
      state.tasks.push(dataToAdd);
    },
    remove_task: (state, task) => {
      state.tasks = state.tasks.filter((item: any)=>{
          return item.id !== task.payload.id;
      })
    },
    update_task: (state, action) => {

        if(!action.payload.destination) return;
        let items = state.tasks;
        let updatedItem=items.map((task: any)=>{
          if(task._id === action.payload.draggableId){
            return {...task, state: action.payload.destination.droppableId}
          }else{

            return task
          }
        })
        state.tasks = updatedItem;
    },
  },
})

export const { init_data,add_task, remove_task, update_task } = taskSlice.actions

export default taskSlice.reducer