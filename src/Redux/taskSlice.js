import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  tasks: {
    "BackLog": [
        {
          id: "0",
          catogery: "design",
          title: "Designing UI",
          description: "UI for task-apart"
    
        },
      ],
      "To-Do": [
        {
          id: "1",
          catogery: "code",
          title: "Drag-Drop Feature",
          description: "Make Tasks Draggable",
          image: "asd"
        },
        {
          id: "2",
          catogery: "research",
          title: "Research Redux",
          description: "Learn how Redux Works",
    
        },
      ],
      "In-Process": [
        {
          id: "3",
          catogery: "code",
          title: "Navbar",
          description: "Create Navbar for task-apart"
        },
        {
          id: "4",
          catogery: "design",
          title: "Making Design",
          description: "Design Posts"
        },
      ],
      "Completed": [
        {
          id: "5",
          catogery: "social",
          title: "Meet Obama",
          description: "Test Task"
        },
      ]
  },
}

export const taskSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    add_task: (state, newTask) => {
        let dataToAdd = {
                id: "9",
                catogery: newTask.payload.catogery,
                title: newTask.payload.title,
                description: newTask.payload.description, 
        }
      state.tasks[newTask.payload.state].push(dataToAdd);
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

export const { add_task, remove_task, update_task } = taskSlice.actions

export default taskSlice.reducer