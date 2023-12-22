import { useState } from "react";
import allPosts from "./AllPost";


function Posts() {
  const [postContent, setpost] = useState(allPosts);


  const handleLikeClick = (index) => {
    let newLikes = [...postContent]
    newLikes[index].likes = newLikes[index].likes +1
    setpost(newLikes)}

  const handleDislikeClick = (index) => {
    let newLikes = [...postContent]
    if(newLikes[index].likes > 0){   
        newLikes[index].likes = newLikes[index].likes -1
        setpost(newLikes)
    }
    
  };

  

  return (
    <div class="app-wrapper">
      <h1 class="app-title">Posts</h1>
      <div class="post-list">
      {postContent.map((item,index) => {
        return (
          <div key ={index} class="post-item">
          <div class="post-header">
            <h2>{item.title} #{item.id}</h2>
            <div class="post-social-media-stats">
              <span class="stats-topic">Likes: </span>
              <span class="post-likes">{item.likes}</span>
            </div>
          </div>
          <p class="post-content">
            {item.content}
          </p>
          <div class="post-actions">
            <button class="like-button " onClick={() => {handleLikeClick(index)}} >
              Like
            </button>
            <button class="dislike-button" onClick={() => {handleDislikeClick(index)}} >Dislike</button>
          </div>
        </div>
        )
      })}     
      </div>
    </div>
  );
}

export default Posts;
