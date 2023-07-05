import React, {useState , useEffect, useMemo, useCallback} from 'react';

const App = () =>  {
  const [counter,setCounter] = useState<number>(0);
  const [name,setName] = useState<string>('');
  useEffect(()=>{
    setCounter(0);
    setName('Viraaj');
  },[]);

  const inCounterHandler = () => {
    setCounter(counter+1);
  };

  const dnCounterHandler = useCallback(() => {
    if(counter===0)
     return;
    setCounter(counter-1);
  },[counter]);


  const dnCounterCallbackHandler = useCallback((arg1: number, arg2: number) => {
    if(arg1===0 || arg2===0 )
     return;
    return arg1+arg2;
  },[]);

  const memoizedName = useMemo(()=> {
    return name ? 'Aviraaj'+counter : '';
  },[name,counter]);
 
  //Here to return
  return (
    <div className="App" style={{ padding: "10px"}}>
     <h1>Counter Value: {counter}</h1>
     <button id='incnt' style={{ marginRight: "10px"}} onClick={inCounterHandler}>Increase Counter</button>
     <button id='decnt' style={{ marginRight: "10px"}} onClick={dnCounterHandler}>Decrease Counter</button>
     <h2>{memoizedName}</h2>
     <h2>{dnCounterCallbackHandler(2,4)}</h2>
     <h2>{dnCounterCallbackHandler(8,4)}</h2>
     <h2>{dnCounterCallbackHandler(7,4)}</h2>
     <h2>{dnCounterCallbackHandler(2,4)}</h2>
    </div>
  );
}

export default App;
