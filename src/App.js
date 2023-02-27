import React, {useState, useEffect} from 'react';
import { SafeAreaView, Text, Button } from 'react-native';

function App(){
  const [number, setNumber] = useState(0);
  const [counter, setCounter] = useState(100);

  useEffect(() => {
    console.log("number updated");
  }, [number]);


  useEffect(() => {
    console.log("counter updated");
  },[counter]);

  
  return(
    <SafeAreaView>
      <Text>HELLO LIFECYCLE!</Text>
      <Text>Number: {number}</Text>
      <Text>Counter: {counter}</Text>
      <Button title='Update Number' onPress={() => setNumber(number+1)}/>
      <Button title='Update Counter' onPress={() => setCounter(counter+100)}/>
    </SafeAreaView>
  );

}

export default App;