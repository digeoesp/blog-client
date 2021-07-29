import Post from "../post/Post";
import "./posts.css";

export default function Posts({ posts }) {
  const listOfPost = posts.map((p,index) => {
    return(
      <Post post={p} key={index} />
      )
    })

  

  return (
    <div className="posts" >
      {listOfPost}
    </div>
  );
}
