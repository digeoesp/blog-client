import Post from "../post/Post";
import "./posts.css";

export default function Posts({ posts }) {
  
  const listOfPost = posts.map((p,index) => {
    return(
      <div className="posts" key={index} >
        <Post post={p} key={index} />
      </div>
      )
    })

  console.log(listOfPost)

  return (
    <div className="posts" >
      {listOfPost}
    </div>
  );
}
