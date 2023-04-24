import { useReducer } from 'react';

const reducer = (prevNumber, action) => {
  // prevNumber : 현재 state
  // action : dispatch 에서 인자로 받고 있는 현재 액션 값

  // 조건이 4개 이상 넘어가면 if보다 switch 사용 ㅊㅊ
  switch (action.type) { //{type:'xx'}
    case 'INCREMENT':
      return { value: prevNumber.value + 1 };
    case 'DECREMENT':
      return { value: prevNumber.value - 1 };
    case 'RESET':
      return { value: 7 };
    default:
      return { value: prevNumber.value };
  }
};

const UseReducerText = () => {
  const [number, dispatch] = useReducer(reducer, { value: 7 });

  const increment = () => {
    dispatch({ type: 'INCREMENT' });
  };
  const decrement = () => {
    dispatch({ type: 'DECREMENT' });
  };
  const reset = () => {
    dispatch({ type: 'RESET' });
  };

  return (
    <>
      <h1>useReducer hook</h1>
      <h2>{number.value}</h2>

      <button onClick={increment}>Plus</button>
      <button onClick={decrement}>Minus</button>
      <button onClick={reset}>Reset</button>
    </>
  );
};

export default UseReducerText;
