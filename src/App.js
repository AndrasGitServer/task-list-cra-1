import React, {useState} from 'react';
import './App.css';
import AllTasks from './components/AllTasks';
import TaskDetails from './components/TaskDetails';


let obj_details = [{
  id: '', 
  task: '', 
  due: '', 
  isComplete: ''
}]


function App() {

  const [stateObj, setStateObj] = useState( obj_details );

  const infoFromChild = child_data_obj => {
    console.log('** In App component **');
    console.log( child_data_obj );
    setStateObj( child_data_obj );
  }// ** infoFromChild => function ***********************************


  return (
    <div className="top_div">
      
      <AllTasks infoToParent = {infoFromChild} />

      <br />

      {/* <TaskDetails obj_details={ obj_details }/> */}
      <TaskDetails obj_details={ stateObj }/>

    </div>
  );
}// ** App component *************************************************

export default App;
