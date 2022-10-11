import React from 'react'
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
  let myStyle = {
    minHeight: "auto",
    margin: "40px auto",
    // backgroundColor: "#00071c",
    "display": "flex",
    "flex-direction": "column",
    "border": "2px solid #6c82b9"
  }
  return (
    <div className="container" style={myStyle}>
      <h3 className="my-3">Todos List</h3>
      {props.todos.length === 0 ? "No Todos to display" :
        props.todos.map((todo) => {
          console.log(todo.sno);
          return (<TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
          )
        })
      }
    </div>
  )
}
