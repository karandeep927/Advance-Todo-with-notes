import { createContext } from "react";

export const dataContext = createContext({
    tasksData:[],
    notes:[],
    addTask:(task)=>{},
    deleteTask:(id)=>{},
    addNotes:(note)=>{},
    deleteNote:(id)=>{},
});
export const Provider = dataContext.Provider