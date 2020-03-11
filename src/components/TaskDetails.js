import React from 'react';


const TaskDetails = (props) => {

  if (props.obj_details === "")
    console.log('===>>> tested ok empty string');
  console.log(props.obj_details[0]);
  alert(JSON.stringify(props.obj_details[0], null, 4));

  
  return (
    <div className="top_div_TaskDetails">

        <fieldset>
            <legend> Show Task Details </legend>
            
            <ul>
              {/* {
                props.obj_details.map( ( task ) =>
                  <>
                    <li>Id: {task.id} </li>
                    <li>Task:  {task.task} </li>
                    <li>Due:  {task.due} </li>
                    <li>Completed: { JSON.stringify(task.isComplete) } </li>
                  </> 
                )
              } */}

              {

              (props.obj_details[0].isComplete === '') ? 
                <h2>Select a Task Details button ! </h2> 
              : 
                <>
                  <li>Id:        { props.obj_details[0].id   } </li>
                  <li>Task:      { props.obj_details[0].task } </li>
                  <li>Due:       { props.obj_details[0].due  } </li>
                  <li className='li_colored'>Completed: { JSON.stringify(props.obj_details[0].isComplete) } </li>
                  <h2> { props.obj_details[0].isComplete ? "Yes !" : "Not yet" } </h2>
                </>
              }
               
            </ul>
            
        </fieldset>
      
    
    </div>
  );
}// ** TaskDetails component *************************************************


export default TaskDetails;
