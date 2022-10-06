import React,{useContext,useState} from "react";
import NoteContext from '../Context/notes/NoteContext';


function AddNote() {
    const context = useContext(NoteContext);
    const {addNote} = context;

    const [note,setNote] = useState({title:"",description:"",tag:"default"});

    const handleOnChange=(e)=>{
        setNote({...note,[e.target.name]: e.target.value})

    }

    const handleOnClick =(e) =>{
        e.preventDefault()
        addNote(note.title,note.description,note.tag);
    }
  return (
    <div className="container my-3">
      <h1>Add a Note</h1>
      <form className="my-3">
        <div className="mb-3">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            aria-describedby="emailHelp"
            placeholder="Enter Title"
            onChange={handleOnChange}
          />
    
        </div>
        <div className="mb-3">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            placeholder="Enter Description"
            onChange={handleOnChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tag">Tag</label>
          <input
            type="text"
            className="form-control"
            id="tag"
            name="tag"
            placeholder="Enter tag"
            onChange={handleOnChange}
          />
        </div>
        
        <button type="submit" className="btn btn-primary"  onClick={handleOnClick}>
          Add Note
        </button>
      </form>
    </div>
  );
}

export default AddNote;
