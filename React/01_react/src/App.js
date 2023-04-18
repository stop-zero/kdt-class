import ClassComponent from './ClassComponent';
import FunctionComponent from './functionComponent';
import Larva from './Larva';

function App() {
  return (
    <>
      {/* <div style={{ backgroundColor: 'black', height: '1000px' }}></div> */}
      {/* 여러 번 재사용 가능 */}
      {/* <Larva /> */}
      {/* <Larva /> */}
      <ClassComponent name="홍길동" age="14" />
      <ClassComponent name="성춘향" age="11" />
      <ClassComponent />
      <FunctionComponent name="둘리" age="11" />
    <FunctionComponent></FunctionComponent>

    </>
  );
}

export default App;
