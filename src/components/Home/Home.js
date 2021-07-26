import React, { useState, useEffect } from "react";
import {
  Container,
  Grow,
  Grid,
  Button,
  Dialog,
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
          <Grid item xs={12} sm={4}>
            {/* <Form currentId={currentId} setCurrentId={setCurrentId} /> */}
            <Button onClick={handleClickOpen}>
              <AddCircleIcon
                style={{ transform: "scale(1.8)" }}
                fontSize="large"
              />
            </Button>
          </Grid>
        </Grid>

        <Dialog open={openPopup}>
          {/* <DialogTitle>Create Yout</DialogTitle> */}
          <DialogContent>
            <Button onClick={handleClickClose}>
              <HighlightOffIcon />
            </Button>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </DialogContent>
        </Dialog>
      </Container>
    </Grow>
  );
};

export default Home;
