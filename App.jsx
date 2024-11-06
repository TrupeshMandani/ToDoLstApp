// App.jsx

import React, { useState } from "react";
import { SafeAreaView, ScrollView } from "react-native";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";

function App() {
  const [tasks, setTasks] = useState([
    { text: "Do laundry", completed: true },
    { text: "Go to gym", completed: false },
    { text: "Walk dog", completed: true },
  ]);

  const addTask = (taskText) => {
    // Avoid duplicate tasks
    if (tasks.some((task) => task.text === taskText)) {
      alert("Task already exists!");
      return;
    }
    const newTask = { text: taskText, completed: false };
    setTasks([...tasks, newTask]);
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <ToDoList tasks={tasks} />
      </ScrollView>
      <ToDoForm onAddTask={addTask} />
    </SafeAreaView>
  );
}

export default App;
