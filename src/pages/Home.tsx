import { useState } from 'react';
import { Text, Column, Input, Button, Row, List } from 'components';

export const Home = () =>{
  const  [taskName, setTaskName] = useState('');
  const [tasks, setTasks] = useState<{label:string}[]>([]);

  const handledOkButton= ()=>{
    if(!taskName) return;
    setTasks((previous) => {
     const copy= [...previous];
     copy.push({label: taskName});
     return copy;
    })
    setTaskName('');
  }
  return (
  <Column width="600px" margin="0 auto">
    <Text fontWeight="bold" my="20px" fontSize="bodyLarge" pl="10px">Tasks</Text>
    <Row width="100%">
      <Input flex={1} placeholder="Enter a task name here....." value={taskName} onChange={(e)=> setTaskName(e.target.value)}/>
    <Button onClick={handledOkButton}>OK</Button>
    </Row>
    <List items={tasks}/>
  </Column>
  )
}