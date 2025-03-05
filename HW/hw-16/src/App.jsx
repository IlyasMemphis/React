import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

function App() { 
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => { 
    setOpen(false);
  }

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Мое React Приложение</Typography>
        </Toolbar>
      </AppBar>


      <Container style={{ marginTop: "20px", textAlign: "center" }}> 
        <Typography variant="h4" gutterBottom>
          Добро пожаловать в наше приложение!
        </Typography>
        <Button variant="contained" color="primary" onClick={handleClickOpen}>
          Открыть диалог
        </Button>
      </Container>


      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Сообщение</DialogTitle>
        <DialogContent>

        <DialogContentText>
          Это диалоговое окно. Нажмите "Закрыть", что бы закрыть его. 
        </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Закрыть
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default App;