import { useState, useEffect } from 'react';
import { useFonts } from 'expo-font';
import {View} from 'react-native';

function Clock(){

  let [fontsLoaded] = useFonts({
    'DS-DIGITAL': require('./assets/fonts/ds-digital/DS-DIGI.TTF'),
  });

  const [date, setDate] = useState(new Date());
  
  function refreshClock() {
    setDate(new Date());
  }
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);
  return (
    <View style={{backgroundColor:"black", flex: 1, 
    alignItems: 'center',
    justifyContent: 'center',}}>
    <span style={{fontFamily:"DS-DIGITAL", fontSize:60, color:"#fec232",}}>
      {date.toLocaleTimeString()}
    </span>
    </View>
  );
}



export default Clock;
