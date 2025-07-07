import React, { useContext, useEffect, useState } from "react";
import { Card, CardContent, CardHeader, IconButton, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import axios from "axios";
import { PostContext } from "../context/PostContext";

function Cards() {
    const { state , dispatch } = useContext(PostContext)
//   const [value, setValue] = useState([]);

//   useEffect(() => {
//     axios
//       .get("https://jsonplaceholder.typicode.com/posts")
//       .then((res) => {
//         console.log(res.status);
//         setValue(res.data);
//       })
//       .catch((e) => {
//         console.log(e);
//       });
//   }, []);
  return (
    <>
      {state.visiblePost.map((post) => (
        <Card sx={{ maxWidth: 240 }} key={post.id}>
            <CardHeader
            action={
                <IconButton onClick={() => dispatch({type:"REMOVE" , payload:post.id})}>
                    <CloseIcon/>
                </IconButton>
            }
            title={
                <Typography variant="body2" sx={{ color: "text.secondary", overflow: "hidden" }}>
                    {post.title}
                </Typography>
            }
            />
          <CardContent>
            <Typography noWrap variant="body2" sx={{ color: "text.secondary" }}>
              {post.body}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </>
  );
}

export default Cards;
