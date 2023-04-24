//Ex_PostItem 풀이
const PostItem = ({post}) => {
    // TODO: 부모 컴포넌트에서 넘겨주는 데이터(props) 구조 분해 할당
    // const {posts}=props;
  
    return (
      // TODO: 데이터 채우기
      <div className="PostItem">
        <div>
          <span className="id">No. {post.id}</span>
          <span className="title">- {post.title}</span>
        </div>
        {/* slice로 50자까지만, 글자가 짤렸다는 것을 알려주기 위해 ... */}
        <p className="body">{post.body.slice(0, 50)}...</p>
      </div>
    );
  };
  
  export default PostItem;