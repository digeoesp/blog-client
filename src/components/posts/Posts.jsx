import Post from "../post/Post";
import "./posts.css";


export default function Posts({ posts }) {
  return (
    <div className="posts">
      {posts.map((p, index) => (
        <div key={index}>
         <Post post={p}/>
        </div>
      ))}
    </div>
  );
}
