import { useState } from "react";
import { AssignmentList } from "./components/Assignments/AssignmentList";
import { Header } from "./components/Header/Header";

export interface Assignment {
  id: number;
  title: string;
  completed: boolean;
 
}

function App() {
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  // TypeScript syntax used to define the type of the assignments state variable.

  const addAssignment = (newAssignment: Assignment) => {
    setAssignments((prevAssignments) => [...prevAssignments, newAssignment]);
  };
// the addAssignment function takes a new assignment and updates the assignments state 
//by appending the new assignment to the existing list of assignments.
  
const handleAssignmentClick = (id: number) => {
  setAssignments(assignments.map((assignment) =>
    assignment.id === id ? { ...assignment, completed: !assignment.completed } : assignment
  ));
};

const handleDeleteButton = (id: number) => {
  setAssignments(assignments.filter((assignment) => assignment.id !== id));
};
return (
    <>
      <Header onAddAssignment={addAssignment} />
      <AssignmentList assignments={assignments} handleAssignmentClick ={handleAssignmentClick} handleDeleteButton={handleDeleteButton}/>
    </>
  );
}

export default App;