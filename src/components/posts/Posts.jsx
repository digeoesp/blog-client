import Post from "../post/Post";
import "./posts.css";

export default function Posts({ posts }) {
  const listOfPost = <div className="posts" >
  {posts.map((p,index) => (
    <Post post={p} key={index} />
  ))}
</div>
  return (
    <div className="posts" >
      {listOfPost}
    </div>
  );
}
