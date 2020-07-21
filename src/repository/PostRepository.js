import { wrapPromise } from "./utils";

export const getPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (response.ok) {
    const json = await response.json();
    return json;
  }
  return [];
}


export const getPostsForSuspense = () => {

  const promise = new Promise(resolve => {
    setTimeout(() => {
      resolve(getPosts());
    }, 5000);
  });

 return  wrapPromise(promise);
}