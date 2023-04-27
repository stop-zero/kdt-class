import { Link } from 'react-router-dom';

const PhotoItem = (props) => {
  const { photo } = props;

  return (
    <Link to={'/photos/' + photo.id}>
      <ul className="PhotoItem">
        <li>상품명: {photo.title}</li>
        <li><img src={photo.url}></img></li>
        
      </ul>
    </Link>
  );
};

export default PhotoItem;
