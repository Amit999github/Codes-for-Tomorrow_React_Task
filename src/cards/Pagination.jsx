import React, { useContext } from "react";
import { Pagination } from "@mui/material";
import { PostContext } from "../context/PostContext";

function PaginationStyle() {
  const { state, dispatch } = useContext(PostContext);
  const filtered = state.allPosts.filter(
    (post) => !state.removedPost.includes(post.id)
  );
  const totalPage = Math.ceil(filtered.length / 6);
  console.log(totalPage);
  return (
    <>
      <Pagination
        count={totalPage}
        variant="outlined"
        sx={{ marginTop: 8 }}
        page={state.currentPage}
        onChange={(e, value) => dispatch({type:"PAGES" , payload: value})}
      />
    </>
  );
}

export default PaginationStyle;
