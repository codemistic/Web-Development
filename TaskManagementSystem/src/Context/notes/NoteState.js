import React,{useState} from 'react'
import NoteContext from './NoteContext'

const NoteState = (props) =>{
  const host = "http://localhost:5000"
  const notesInitial = [
    
  ]
  const [notes,SetNotes] = useState(notesInitial);


  //get all note
  const getNotes = async() =>{
    const resp = await fetch(`${host}/api/notes/fetchallnotes`,{
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'auth-token':localStorage.getItem('token')
      },
          });
          const json = await resp.json();
  // 
    SetNotes(json)
  }
  //Add note
  const addNote = async(title,description,tag) =>{
    const resp = await fetch(`${host}/api/notes/addnote`,{
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'auth-token':localStorage.getItem('token')
      },
        body: JSON.stringify({title,description,tag})
          });
          // const json = resp.json();
   const note ={
        "_id": "632b77fgee9d4a96006e023xvvw9adf",
        "user": "632b748cd4a96006e0239adb",
        "title": title,
        "description": description,
        "tag": tag,
        "date": "2022-09-21T20:45:29.481Z",
        "__v": 0
      }
    SetNotes(notes.concat(note))
  }
  //delete note
  const deleteNote = async(id) =>{
//  const newNotes = notes.filter((note)=>{return note._id!==id})
//  SetNotes(newNotes)
const resp = await fetch(`${host}/api/notes/deletenote/${id}`,{
  method: 'DELETE',
  headers: {
      'Content-Type': 'application/json',
      'auth-token': localStorage.getItem('token')
  },
      });
      getNotes();

  }
  //edit note
  const editNote = async (id,title,description,tag) =>{
    const resp = await fetch(`${host}/api/notes/updatenote/${id}`,{
method: 'PUT',
headers: {
    'Content-Type': 'application/json',
    'auth-token':localStorage.getItem('token')
},
  body: JSON.stringify({title,description,tag})
    });
    // const json = resp.json();


    for(let i=0;i<notes.length;i++)
    {
      if(notes[i]._id === id)
      {
        notes[i].title = title;
        notes[i].description = description;
        notes[i].tag = tag;
      }
    }

    getNotes();
  }
return(
    <NoteContext.Provider value = {{notes,addNote,deleteNote,editNote,getNotes}}>
        {props.children}
    </NoteContext.Provider>
);
}


export default NoteState;