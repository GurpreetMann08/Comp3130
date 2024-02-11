
import { AssignmentItem } from "../Assignment/AssignmentItem";
import { Assignment } from "../../App";
import styles from "./assignments.module.css";


type Props= {
  assignments: Assignment[]; 
  handleAssignmentClick :(id: number) => void;
  handleDeleteButton :(id: number) => void;
}

export function AssignmentList({ assignments, handleAssignmentClick,handleDeleteButton }: Props) {
   const completedAssignmentList = assignments.filter((assignment) => assignment.completed).length
  
  return (
    <section className={styles.assignments}>
      <header className={styles.header}>
        <div>
          <p>Created Assignments</p>
          <span>{assignments.length}</span>
        </div>
        <div>
          <p className={styles.textPurple}>Completed Assignments</p>
          <span>{completedAssignmentList}of {assignments.length}</span>   
        </div>
      </header>
      <div className={styles.list}>
        {assignments.map((assignment) => (
          <AssignmentItem
            
            key={assignment.id}
            assignment={assignment}
            handleAssignmentClick={handleAssignmentClick}
            handleDeleteButton ={handleDeleteButton}

          />
        ))}
      </div>
    </section>
  );
}