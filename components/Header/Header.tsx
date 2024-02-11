import React, { useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";
import { Assignment } from "../../App";
import styles from "./header.module.css";

type Props= {
  onAddAssignment: (newAssignment: Assignment) => void;
}

export function Header({ onAddAssignment }: Props) {
  const [inputValue, setInputValue] = useState("");

  const createAssignmentButton = (e: React.FormEvent) => {
    e.preventDefault();
  
    let newAssignmentTitle = inputValue.trim();

    if (newAssignmentTitle !== "") {
      const newAssignment: Assignment = {
        id: Date.now(),
        title: newAssignmentTitle,
        completed: false,
      };
      onAddAssignment(newAssignment);
      setInputValue("");
    }
  };
  let buttonDisable ;
 
  if (inputValue.trim()=== ""){
   buttonDisable = true;
  } else{
   buttonDisable = false;
  };



  return (
    <header className={styles.header}>
      <h1>{uppercase("bcit")} Assignment Tracker</h1>
      <form  className={styles.newAssignmentForm}>
      
        <input
          placeholder="Add a new assignment"
          type="text"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        />
        <button 
          onClick={createAssignmentButton}
          type="submit" 
          disabled ={buttonDisable}>
        
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}