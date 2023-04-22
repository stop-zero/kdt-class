// TODO: 부모 컴포넌트에서 넘겨주는 데이터(props) 구조 분해 할당
const PostItem = ({ posts }) => {
  return (
    // TODO: 데이터 채우기
    <>
      {posts.map((cmt) => {
        return (
          <div class="PostItem">
            <div>
              <span class="id">No.{cmt.id}</span>
              <span class="title">-{cmt.title}</span>
            </div>
            <p class="body">{cmt.body}</p>
          </div>
        );
      })}
    </>
  );
};

export default PostItem;
