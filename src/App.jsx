import {useState,useEffect} from "react";
import { Provider } from "./context/store";
import Navigation from "./pages/Navigation";

function App() {
  const [tasksData,setTaskData] =  useState(()=>{
    const storedList = localStorage.getItem('todos');
    return storedList ? JSON.parse(storedList) : []
    })
    const [notes,setNotes]  = useState(()=>{
      const storedNotes = localStorage.getItem('notes');
      return storedNotes ? JSON.parse(storedNotes) : []
      })
  

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(tasksData));
    }, [tasksData]);
    
    useEffect(()=>{
      localStorage.setItem('notes', JSON.stringify(notes));
    },[notes])

    const addTask = (task)=>{
        setTaskData([...tasksData, task]);
    }
    const deleteTask =(id)=>{
        const newData = tasksData.filter((task) => task.id !== id)
        setTaskData([...newData])
    }
    
    
    const addNotes =(note)=>{
      setNotes([...notes, note]);
    }
    
    const deleteNote =(id)=>{
      const newData = notes.filter((note) => note.id !== id)
      setNotes([...newData])
    }
  return (
    <Provider value={{tasksData,addTask,deleteTask,notes,addNotes,deleteNote}}>
      <Navigation />
    </Provider>
  );
}

export default App;
