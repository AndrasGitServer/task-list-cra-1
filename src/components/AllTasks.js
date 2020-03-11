import React from 'react';

const list_of_tasks = [
  'Do laundry', 'Walk the dog', 'Watch Netflix', 'Clean room'
];

const list_of_tasks_objects = [
  { id: 1, task: 'Do laundry', due: '2020-03-16', isComplete: true}, 
  { id: 2, task: 'Walk the dog' , due: '2020-03-17', isComplete: false},
  { id: 3, task: 'Watch Netflix' , due: '2020-03-18', isComplete: false},
  { id: 4, task: 'Clean room' , due: '2020-03-19', isComplete: false}
];


const AllTasks = props => {


  const showTask = (i, taskObj, event) => {
    console.log('i=',i, '\n', 'obj=',taskObj);
    console.log(list_of_tasks_objects[i]);
    console.log('*** The list_of_tasks_objects[i] = taskObj argument passed !');
    console.log(event);
    props.infoToParent([taskObj]);

  }// *** showTask => function ***

  
  return (
    <div className="top_div_AllTasks">
      
        <fieldset>

            <legend>All Task</legend>

            <h4>List of strings (3 different ways)</h4>
            
            <span> / </span>
            {
              list_of_tasks.map( (oneTask, i) =>
                <span key={i}> {oneTask} / </span>
              )
            }

            {
              list_of_tasks.map( (oneTask, i) =>
                <p key={i}> key={i} -> {oneTask} </p>
              )
            }  

            <ol>
              {
                list_of_tasks.map( ( task, i) =>
                  <li key={i}> { list_of_tasks[i] } </li>
                )
              }
            </ol>
            
            <hr />

            <h4>List of objects</h4>
            {
              list_of_tasks_objects.map ( (oneTaskObj, i) =>
             
                <p key={i}> {oneTaskObj.id}. {oneTaskObj.task} 
                  <button onClick={ event => showTask(i, oneTaskObj, event) }> Details > </button>
                </p>
             
              )
            }


        </fieldset>


    </div>
  );
}// ** AllTasks component ********************************************


export default AllTasks;

