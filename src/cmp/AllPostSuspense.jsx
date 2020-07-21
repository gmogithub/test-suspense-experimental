import React from "react";
import { getPostsForSuspense } from "../repository/PostRepository";

const posts = getPostsForSuspense();
export const AllPostSuspense = (props) => {

  return <div>

        {posts.read().map(({ id, title, body }) => (
          <div key={id} style={{margin: 20, padding: 5, border: "1px solid black"}}>
            <h3>{id} {title}</h3>
            <p>{body}</p>
          </div>))}
  </div>
};