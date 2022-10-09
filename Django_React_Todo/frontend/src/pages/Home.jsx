import React, { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";

// Client from React-Query v4
import client from "../react-query-client";

// Importing Components
import Tasks from "./Tasks";
import Completed from "./Completed";

// Styling
import "./Home.scss";

const fetcher = (url, body) =>
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

function Home() {
  const [lang, setLang] = useState("");
  const [postID, setPostID] = useState(null);
  const [postTitle, setPostTitle] = useState(null);

  //  Request for GET information
  const { data: tasks, isLoading, isError,} = useQuery(["todos"], () => {
    return fetch("http://127.0.0.1:8000/api/task-list/").then((t) => t.json());
  });

  // POST request to the server
  const mutation = useMutation(
    (body) => fetcher("http://127.0.0.1:8000/api/task-create/", body),
    {
      onSuccess(data) {
        console.log("Got response from backend", data);
        client.invalidateQueries("todos");
        setLang(" ");
      },
      onError(error) {
        console.log("Got error from backend", error);
      },
    }
  );

  if (isLoading) return <h1>Loading...</h1>;

  if (isError) return <h1>Error with request</h1>;

  // Calling POST Request
  function callMutation() {
    mutation.mutate({ title: lang });
  }
  
  // Setting PostID null and passing as props to Tasks.jsx so that it can be redirected to Home.jsx
  function backButton() {
    return setPostID(null);
  }
  
  // Passing the Tasks.jsx with PostID and PostTitle
  function settingPost(task) {
    setPostID(task.id);
    setPostTitle(task.title);
  }
  
  // In the event that postID is not null, task components will be rendered
  if (postID !== null) {
    return (
      <Tasks postID={postID} backButton={backButton} postTitle={postTitle} fetcher={fetcher} />
    );
  }

  return (
    <div className="Home_container">
      <div className="Home_Add">
        <div className="Home_task-input">
          <input type="text" name="todo_title" value={lang} onChange={(e) => setLang(e.target.value)} placeholder="Add Todo..." />
        </div>
        <div className="Home_task-post">
          <button onClick={callMutation}>Submit</button>
        </div>
      </div>
      <div className="Home_List">
        {tasks.map((task) => {
          return (
            <div className="Home_list-tasks" key={task.id}>
              <div className="Home_list_tasks-title">
                <a onClick={() => settingPost(task)} href="#0">
                  {task.completed ? ( <strike>{task.title}</strike>) : (<p>{task.title}</p>)}
                </a>
              </div>
              <div>
                <Completed complete={task.completed} taskId={task.id} taskTitle={task.title} fetcher={fetcher} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
