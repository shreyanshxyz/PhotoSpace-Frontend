import React, { useState, useEffect } from "react";
import {
  Container,
  Grow,
  Grid,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
} from "@material-ui/core";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { useDispatch } from "react-redux";

import { getPosts } from "../../actions/posts";
import Posts from "../Posts/Posts";
import Form from "../Form/Form";

const Home = () => {
  const [currentId, setCurrentId] = useState(0);
  const [openPopup, setOpenPopup] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  const handleClickOpen = () => {
    setOpenPopup(true);
  };

  const handleClickClose = () => {
    setOpenPopup(false);
  };

  return (
    <>
      <Grow in>
        <Container maxwidth="xl">
          <Grid
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
          </Grid>

          <Dialog open={openPopup}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px 10px 0 10px",
              }}
            >
              <DialogTitle>
                <p style={{ fontWeight: "bold", margin: "0" }}> New Post </p>
              </DialogTitle>
              <Button onClick={handleClickClose}>
                <HighlightOffIcon style={{ color: "red" }} />
              </Button>
            </div>

            <DialogContent>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </DialogContent>
          </Dialog>
        </Container>
      </Grow>

      {/* <Form currentId={currentId} setCurrentId={setCurrentId} /> */}
      <Button
        onClick={handleClickOpen}
        style={{
          position: "fixed",
          marginBottom: "30px",
          marginLeft: "30px",
          bottom: "0",
        }}
      >
        <AddCircleIcon
          style={{ color: "#20639B", transform: "scale(1.8)" }}
          fontSize="large"
        />
      </Button>
    </>
  );
};

export default Home;
