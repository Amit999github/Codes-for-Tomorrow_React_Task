import React, { useEffect, useState } from "react";
import Cards from "./cards/cards";
import { Container, Grid, Paper, Stack } from "@mui/material";
import { Margin, Padding } from "@mui/icons-material";
import PaginationStyle from "./cards/Pagination";

function App() {
  const [isLoding , setIsLoding] = useState(true);

  useEffect(() =>{
    const timer = setTimeout(() => (setIsLoding(false)) ,5000);
    return () => clearTimeout(timer);
  }, [])
  return (
    <>
      <Container maxWidth="md">
        <Paper elevation={3} sx={{ padding: 4, marginTop: 8 }}>
          <Grid
            container
            spacing={{ xs: 3, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {isLoding ? <h1 className="text-center text-xl font-bold">Loading...</h1> : <Cards /> }
          </Grid>
        </Paper>
      <PaginationStyle/>
      </Container>
    </>
  );
}

export default App;
