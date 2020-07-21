import React from "react";
import { getPosts } from "../repository/PostRepository";




export const AllPosts = (props) => {

  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    getPosts().then(res => {
      setPosts(res);
    })
  }, [])

  return (
    <div>
      {posts.map(({ id, title, body }) => (
        <div key={id} style={{margin: 20, padding: 5, border: "1px solid black"}}>
          <h3>{id} {title}</h3>
          <p>{body}</p>
        </div>))}
    </div>);
};