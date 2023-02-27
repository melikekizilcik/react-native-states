import React, {useState, useEffect} from 'react';
import { SafeAreaView, Text, Button } from 'react-native';

function App(){
  const [number, setNumber] = useState(0);
  const [counter, setCounter] = useState(100);

  useEffect(() => {
    console.log("number updated: "+ number);
  }, [number]);

  function updateCounter(){
    console.log("1. state value: " + number);
    setNumber(number+1);
    console.log("2. state value: " + number);
  }
  
  return(
    <SafeAreaView>
      <Text>HELLO LIFECYCLE!</Text>
      <Text>Number: {number}</Text>
      <Button title='Update Number' onPress={updateCounter}/>
    </SafeAreaView>
  );

}

export default App;