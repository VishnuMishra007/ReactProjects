import './Counter.css';
import { useDispatch, useSelector } from "react-redux";
import { IStoreState, counterSliceAction } from "../store";

export const Counter = () => {
  const counter = useSelector((state: IStoreState) => state.counter);
  const dispatch = useDispatch();
  const counterHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(event.currentTarget.name);
    const eventType: string = event.currentTarget.name;
    switch(eventType){
        case 'increment':
            dispatch(counterSliceAction.increment());
            return;
        case 'decrement':
            dispatch(counterSliceAction.decrement());
            return;
        case 'toggle':
            dispatch(counterSliceAction.toggle());
            return;
        case 'increase':
            dispatch(counterSliceAction.increase(10));
            return;
        default:
            return;
    }
  };
  return (
    <div className="counter-container">
      <div className="header-container"><h3>REDUX COUNTER</h3></div>
      <div className="counter-value-container">{counter}</div>
      <br />
      <br />
      <div className="button-container">
        <button className="button-default" name="increment" onClick={counterHandler}>Increment</button>
        <button className="button-default" name="decrement" onClick={counterHandler}>Decrement</button>
        <button className="button-default" name="toggle" onClick={counterHandler}>Toggle Counter</button>
        <button className="button-default" name="increase" onClick={counterHandler}>Increase Counter by 10</button>
      </div>
    </div>
  );
};
