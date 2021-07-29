import Post from "../post/Post";
import "./posts.css";

export default function Posts({ posts }) {
  const arrOfPost = posts.map((p,index) => (
    <Post post={p} key={index} />
  ))

  return (
    <div className="posts" >
      {arrOfPost}
    </div>
  );
  
}
