import React, { useState } from "react";

// Client from React-Query v4
import client from "../react-query-client";

// React Icons
import { AiOutlineDelete } from "react-icons/ai";
import { GiTireIronCross } from "react-icons/gi";
import { useMutation, useQuery } from "@tanstack/react-query";

// Styling
import "./Tasks.scss";

const deletion = (url, body) =>
  fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

const Tasks = ({ postID, backButton, postTitle, fetcher }) => {
  const [titlee, setTitlee] = useState(postTitle);

  //  Request for GET information for Individual Task
  const { data: taskDetail, isLoading, isError, } = useQuery(["todo"], () => {
    return fetch(`http://127.0.0.1:8000/api/task-detail/${postID}`).then((t) =>
      t.json()
    );
  });

  // Post a request for deleting a task
  const mutationD = useMutation(
    (body) =>
      deletion(`http://127.0.0.1:8000/api/task-delete/${postID}/`, body),
    {
      onSuccess(data) {
        console.log("Got response from backend", data);
        client.invalidateQueries("todos");
      },
      onError(error) {
        console.log("Got error from backend", error);
      },
    }
  );

  // POST request for Updating Task
  const mutationU = useMutation(
    (body) => fetcher(`http://127.0.0.1:8000/api/task-update/${postID}/`, body),
    {
      onSuccess(data) {
        console.log("Got response from backend", data);
        client.invalidateQueries("todos");
      },
      onError(error) {
        console.log("Got error from backend", error);
      },
    }
  );

  if (isLoading) return <h1>Loading...</h1>;

  if (isError) return <h1>Error with request</h1>;

  // Calling Delete request
  function deleting_task() {
    mutationD.mutate();
    backButton();
  }

  // Calling Update
  function callMutationU() {
    mutationU.mutate({ title: titlee });
    backButton();
  }

  return (
    <div className="Task_Container">
      <div className="Task_div">
        <div className="Task_cross">
            <p  onClick={backButton}> <GiTireIronCross /></p>
        </div>
        <div className="Task_heading">
          <input type="text" name="todo_title_id" value={titlee} onChange={(a) => setTitlee(a.target.value)} placeholder={taskDetail.title}/>
          <button onClick={() => callMutationU()}>Update</button>
        </div>
        <div className="Task_controls">
          <p onClick={() => deleting_task()} className="delete_container"> <AiOutlineDelete /> </p>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
