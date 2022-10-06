import React, { useContext,useState, useEffect, useRef } from 'react'
import {useNavigate} from "react-router-dom"
import NoteContext from '../Context/notes/NoteContext';
import AddNote from './AddNote';
import NoteItem from './NoteItem';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};



function Notes() {
  const navigate = useNavigate();
  const context = useContext(NoteContext);
  const { notes, getNotes ,editNote} = context;
  useEffect(() => {
    if(localStorage.getItem('token').length>20)
    {
      getNotes();
      // navigate('/signup')
    }
    else{
 navigate('/')
    }
  },[])

  const [note,setNote] = useState({id:"", etitle:"",edescription:"",etag:""});

  const updateNote = (currentNote) => {
    ref.current.click()
    setNote({id:currentNote._id,etitle:currentNote.title,edescription:currentNote.description,etag:currentNote.tag})

  }

  const ref = useRef(null)

  const handleOnChange=(e)=>{
      setNote({...note,[e.target.name]: e.target.value})

  }

  const handleOnClick =(e) =>{
      e.preventDefault()
      console.log(note._id)
      editNote(note.id,note.etitle,note.edescription,note.etag);
      setOpen(false)
      // setTimeout(() => {
      //   alert("note has been edited")
      // }, 500);
  }

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
    <AddNote/>
    <div>
      <Button ref = {ref} onClick={handleOpen} style={{display:"none"}}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <h4>Edit Note</h4>
        <form className="my-3">
        <div className="mb-3">
          <label htmlFor="etitle">Title</label>
          <input
            type="text"
            className="form-control"
            id="etitle"
            name="etitle"
            aria-describedby="emailHelp"
            value={note.etitle}
            placeholder="Enter Title"
            onChange={handleOnChange}
          />
    
        </div>
        <div className="mb-3">
          <label htmlFor="edescription">Description</label>
          <input
            type="text"
            className="form-control"
            id="edescription"
            name="edescription"
            placeholder="Enter Description"
            value={note.edescription}
            onChange={handleOnChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="etag">Tag</label>
          <input
            type="text"
            className="form-control"
            id="etag"
            name="etag"
            placeholder="Enter tag"
            value={note.etag}
            onChange={handleOnChange}
          />
        </div>
        
        <button type="submit" onClick={handleOnClick} className="btn btn-primary" >
          Edit Note
        </button>
      </form>
        </Box>
      </Modal>
    </div>
      <div className='row my-3'>
        <h1>Your Notes</h1>
        {notes.map((note) => {
          return (
            <NoteItem note={note} updateNote={updateNote} key={note._id} />

          );
        })}
      </div>
    </>
  )
}

export default Notes
