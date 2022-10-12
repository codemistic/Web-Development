//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
var _ = require('lodash');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

//creating a database
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/todolistDB');
}
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.on('open', function () {
  console.log("we are connected!!!!!!!");
});


//schema
const itemsSchema = {
  name: String
};

//model
const Item = mongoose.model("Item", itemsSchema);

//documents 
const item1 = new Item({
  name: "Welcome to your To-Do List!"
});

const item2 = new Item({
  name: "Hit the + button for a new item"
});

const item3 = new Item({
  name: "<-- Hit this to delete an item"
});

const defaultItems = [item1, item2, item3];

//definf for custom lists
const listSchema = {
  name: "String",
  items: [itemsSchema]
};

const List = mongoose.model("List", listSchema);


app.get("/", function (req, res) {

  var today = new Date();
  var options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };
 
var day = today.toLocaleDateString("en-US", options);
  Item.find({}, function (err, foundItems) {

    if (foundItems.length === 0) {
      Item.insertMany(defaultItems, function (err) {
        if (err) {
          console.log(err);
        }
        else {
          console.log("Sucessfully saved default items to DB.")
        }
      });
      res.redirect("/");
    }
    else {
      res.render("list", { listTitle: "Today", kindOfDay: day, newListItems: foundItems });
    }
  });

  

});

//for creating multiple custom lists

app.get("/:customListName", function (req, res) {
  var customListName = _.capitalize(req.params.customListName);

  //checking if customlist entered already exists or not 
  //if exists only render, otherwise created and then render
  List.findOne({ name: customListName }, function (err, foundList) {

    if (!err) {
      if (!foundList) {
        //create new list

        const list = new List({
          name: customListName,
          items: defaultItems
        });

        list.save();
        res.redirect("/" + customListName);
      }
      else {
        //Show an existing list

        res.render("list", { listTitle: foundList.name, newListItems: foundList.items });
      }
    }
  });


});


//adding items to list
app.post("/", function (req, res) {

  const itemName = req.body.newItem;
  const listName = req.body.list;

  const item = new Item({
    name: itemName
  });

  //check if the new item created is in today list or ccustomlist

  if (listName === "Today") {
    item.save();
    res.redirect("/");
  }
  else//checking for customlists
  {
    List.findOne({ name: listName }, function (err, foundList) {

      foundList.items.push(item);
      foundList.save();
      res.redirect("/" + listName);

    });

  }
});

app.post("/delete", function (req, res) {
  const checkedItemId = req.body.checkbox;
  const listName = req.body.listName

  //check if the item to be deleted is from the custom list or today list
if(listName === "Today"){
 
  Item.findByIdAndRemove(checkedItemId, function (err) {
    if (!err) {
      console.log("Successfully deleted checked items");
      res.redirect("/");
    }
  });
}
else{

  List.findOneAndUpdate({name: listName}, {$pull: {items: {_id: checkedItemId}}}, function(err, foundList){

    if(!err){
      res.redirect("/"+ listName);
    }

  });
}
});

app.get("/work", function (req, res) {
  res.render("list", { listTitle: "Work List", newListItems: workItems });
});

app.get("/about", function (req, res) {
  res.render("about");
});


app.listen(3000, function () {
  console.log("Server started on port 3000");
});
