const express = require("express");
const router = express.Router();
var fetchuser = require("./middleware/fetchuser");
const Note = require("../models/Note");
const { body, validationResult } = require("express-validator"); //import express validate

//Route 1 : Get all notes : GET: "api/notes/fetchallnotes". No login required
router.get("/fetchallnotes", fetchuser, async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error occoured");
  }
});

//Route 2 : Add a note : GET: "api/notes/addnote". No login required
router.post(
  "/addnote",
  fetchuser,
  [
    body("title", "Enter a valid title").isLength({ min: 3 }),
    body("description", "Enter atleast 5 letters long description").isLength({min: 5}),
  ],
  async (req, res) => {
    try {
      //use destructuring concept to extract the below from the req.body
      const { title, description, tag } = req.body;
      // if there are errors return the errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const note = new Note({
        title,
        description,
        tag,
        user: req.user.id,
      });
      const saveNote = await note.save();
      res.json(saveNote);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal server error occoured");
    }
  }
);


//Rout 3 : Update an existing note : usinf PUT: "api/notes/updatenote/:id" login required
router.put(
  "/updatenote/:id",fetchuser,async (req, res) => {
  const {title,description,tag} = req.body;
  try {
      //Create a new note object
  const newNote = {};
  if(title){newNote.title = title};
  if(description){newNote.description = description};
  if(tag){newNote.tag = tag};

  //Find the note and update it
  let note = await Note.findById(req.params.id);
  if(!note){
    return res.status(404).send("Note not found");
  }
  if(note.user.toString() != req.user.id ){
    return res.status(401).send("Not Allowed");
  }

  note = await Note.findByIdAndUpdate(req.params.id,{$set:newNote},{new:true});
  res.json({note});
  } catch (error) {
    console.error(error.message);
      res.status(500).send("Internal server error occoured");
  }


  })



//Rout 4 : Delete an existing note using DELETE: ""api/notes/deletenote/:id"" login required
router.delete(
  "/deletenote/:id",fetchuser,async (req, res) => {
  const {title,description,tag} = req.body;
  try {
      //Find the note to be deleted and delete  it
  let note = await Note.findById(req.params.id);
  if(!note){
    return res.status(404).send("Note not found");
  }

  //if user owns this note then allow to delete
  if(note.user.toString() != req.user.id ){
    return res.status(401).send("Not Allowed");
  }

  note = await Note.findByIdAndDelete(req.params.id);
  res.json({"Success":"Note is deleted successfully"});
  } catch (error) {
    console.error(error.message);
      res.status(500).send("Internal server error occoured");
  }

  })

module.exports = router;
