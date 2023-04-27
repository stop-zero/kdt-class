//실습 학생 이름
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';

const ProbStudent = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('name');

  return (
    <>
      <h3>
        학생의 이름은 <span style={{ color: 'green' }}>{name}</span>입니다.
      </h3>
      {
        keyword && (<h2>실제이름은 <span style={{color :'pink'}}>{keyword}</span>입니다. </h2>)
      }
      <button onClick={() => navigate(-1)}>이전 페이지로 이동</button>
    </>
  );
};

export default ProbStudent;
