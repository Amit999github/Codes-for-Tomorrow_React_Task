import React, { createContext, useReducer, useEffect } from 'react'
import axios from "axios";

const PostContext = createContext();

const initial = {
    allPosts:[],
    visiblePost:[],
    removedPost:[],
    currentPage:1,
}
const reducer = (state, action) => {
    switch (action.type) {
        case "SET_POSTS":{
            const visiblePost = action.payload.slice(0,6);
            return {...state , allPosts: action.payload , visiblePost};
        }
        case "PAGES":{
            const setPageFrom = (action.payload - 1)*6;
            const filterPostIds = state.allPosts.filter((post) => !state.removedPost.includes(post.id));
            const visiblePost = filterPostIds.slice(setPageFrom , setPageFrom +6)
        }
        case "REMOVE":{
            const removedPost = [...state.removedPost , action.payload];
            const filterPostIds = state.allPosts.filter((post) => !removedPost.includes(post.id));
            const visiblePost = filterPostIds.slice(0,6);
            console.log("posts",visiblePost, filterPostIds);
            return {...state , removedPost , visiblePost}
        }
        default:
            break;
    }
}

function PostProvider({ children}) {
      const [state , dispatch] = useReducer(reducer , initial);
    
      useEffect(() => {
        axios
          .get("https://jsonplaceholder.typicode.com/posts")
          .then((res) => {
            console.log(res.status);
            dispatch({type:"SET_POSTS" , payload: res.data })
          })
          .catch((e) => {
            console.log(e);
          });
      }, []);
    

    return (
        <PostContext.Provider value={{state, dispatch}}>
            {children}
        </PostContext.Provider>
    );
}

export default PostProvider;

export {PostContext};