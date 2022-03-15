import React from "react";
import Post_item from "./Post_item";

const Post_list = ({ posts, title, remove }) => {

   if (!posts.length) {
      return (
         <h2 style={{ textAlign: 'center' }}>Посты не найдены</h2>
      )
   }

   return (
      <div className="post-list">
         <h2 className="title-list">{title}</h2>
         {posts.map((post, index) => <Post_item remove={remove} number={index + 1} post={post} key={post.id} />)}
      </div>
   )
}

export default Post_list;