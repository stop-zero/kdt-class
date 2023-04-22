import { useEffect, useState } from 'react';

// import (useEffect)

// 자식 컴포넌트
const LifeCycleFuncChild = ({ number }) => {
  // console.log('props >> ', props); //number: 5
  // const { number } = props; //5
  console.log(number);
  const [text, setText] =useState('');

  useEffect(() => {
    //  mount 시점에 실행
    console.log('mount!!');
    
    return () => {
      // unmount 시점에 실행, 사라져
      console.log('unmount!!');
    };
  }, []);
  
  // mount & update 시점에 실행 
  useEffect(()=>{
    console.log('mount or update!!')
  })

// text state 바뀔 때마다 실행
useEffect(()=>{
  console.log('update!!!!!!!')
},[text])

  return (
    <>
      <p>
        LifeCycleFuncChild <b>{number}</b>
      </p>
      <input type="text" value={text} onChange={(e)=> setText(e.target.value)} />
    </>
  );
};

export default LifeCycleFuncChild;
