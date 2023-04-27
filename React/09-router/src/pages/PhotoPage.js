import PhotoItem from '../components/PhotoItem';

const PhotoPage = (props) => {
  console.log(props);
  const { photos } = props;

  return (
    <main className="PhotoPage">
      <h1>여기는 상품 사진 페이지!</h1>
      <div>
      
        {photos.map((photo) => {
          return <PhotoItem key={photo.name} photo={photo} />;
        })}
      </div>
     
    </main>
  );
};

export default PhotoPage;