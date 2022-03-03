import React, {useState}from 'react';
import './style.css';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const Header = () => {
  return (
    <header>
      <h1>Welcome</h1>
    </header>
  );
};

const Nav = () => {
  return (
    <nav>
      <ol>
        <li>html</li>
        <li>css</li>
      </ol>
    </nav>
  );
};

const Article = () => {
  const [open, setOpen] = useState(false);
  return (
    <article>
      <h2>Welcome</h2>
      <p>
        What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
        and typesetting industry. 
      </p>

      <br/>
      <ButtonGroup>
        <Button href="" variant="outlined" onClick={()=>setOpen(true)}>Create</Button>
        <Button href="" variant="outlined">Update</Button>
      </ButtonGroup>
        <Button href="" variant="outlined">Delete</Button>
        <Dialog open={open}>
          <DialogTitle>Create</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Hello Create Text !! <br/>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
          <Button href="" variant="outlined">Create</Button>
          <Button href="" variant="outlined" onClick={()=>setOpen(false)}>Cancle</Button>
          </DialogActions>
        </Dialog>
    </article>
  );
};
export default function App() {
  return (
    <Container fixed>
      <Header></Header>
      <Grid container spacing={2}>
        <Grid item xs={2}>
        <Nav></Nav>
        </Grid>
        <Grid item xs={10}>
        <Article></Article>
        </Grid>
      </Grid>
    </Container>
  );
}
