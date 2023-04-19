import ClassComponent from './ClassComponent';
import FunctionComponent from './functionComponent';
import HiComponent from './HiComponent';
import Larva from './Larva';

function App() {
  const test = () => {
    console.log('콘솔체크');
  };
  return (
    <>
      {/* <div style={{ backgroundColor: 'black', height: '1000px' }}></div> */}
      {/* 여러 번 재사용 가능 */}
      {/* <Larva /> */}
      {/* <Larva /> */}
      <ClassComponent name="홍길동" age="14" func={test}/>
      <ClassComponent name="성춘향" age="11" />
      <ClassComponent />
      {/* <FunctionComponent name="둘리" age="11" /> */}
    {/* <FunctionComponent></FunctionComponent> */}
<HiComponent></HiComponent>
    </>
  );
}

export default App;
