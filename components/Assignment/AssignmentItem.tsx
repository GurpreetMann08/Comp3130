import { useState } from "react";
import { BsFillCheckCircleFill, BsTrash } from "react-icons/bs";
import { Assignment } from "../../App";
import styles from "./assignment.module.css";


type Props = {
  assignment: Assignment;
  handleAssignmentClick :(id: number) => void;
  handleDeleteButton :(id: number) => void;
}


export function AssignmentItem({ assignment, handleAssignmentClick, handleDeleteButton  }: Props) {

const [completedAssignmentButton, setCompletedAssignmentButton] = useState(false);

const handleButtonClick = () =>{
  setCompletedAssignmentButton(true);
  handleAssignmentClick(assignment.id)

}

  return (
    <div>
      <div className = {`${styles.assignment} ${assignment.completed ? styles.completed: ''}`}>
        <button 
           onClick={handleButtonClick}
            className={styles.checkContainer}> 
            { completedAssignmentButton && assignment.completed ? <BsFillCheckCircleFill /> :  <div/>}
        </button>
          <p className={assignment.completed ? styles.textCompleted :""}> {assignment.title}</p>
      
      <button 
       onClick={() => handleDeleteButton (assignment.id)}
        className={styles.deleteButton} >
        <BsTrash size={20} />
      </button>
      </div>
    </div>
  );
};