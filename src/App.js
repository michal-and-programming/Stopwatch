import Container from "./components/Container/Container";
import Stopwatch from "./components/Stopwatch/Stopwatch";
import Buttons from "./components/Buttons/Buttons";
import React, { useState, useEffect } from "react";

const App= () => {
  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState('');

  const start = () => {
   setTimer(setInterval(() => {
     setTime(prevValue => prevValue + 1);
   }, 1))
 };

  const stop = () => {
    clearInterval(timer);
    setTimer('');
  };

  const reset = () => {
    stop();
    setTime(0);
  };

  useEffect(() => {
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [timer]);

  return(
    <Container>
      <Stopwatch time={time} />
      <Buttons start={start} stop={stop} reset={reset}/>
    </Container>
  )
}

export default App;
