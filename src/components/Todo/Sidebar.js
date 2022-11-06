import React, { useEffect, useState } from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { TodoList } from "../TodoList/TodoList";

function Sidebar() {
  const [user, setuser] = useState("");
  const navigate = useNavigate();
  const handlelogout = () => {
    sessionStorage.removeItem("accessToken");
    navigate("/");
  };

  useEffect(() => {
    fetch("http://localhost:8080/todoActivity//username", {
      method: "get",
      headers: {
        accessToken: sessionStorage.getItem("accessToken"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setuser(data.email);
      });
  }, []);


  return (<>
        <div className="header_container">
        <h3 className="user-name" >{user ? user.split("@")[0].toUpperCase() : `{user}`}</h3>
        </div>
        <div className="show-data">
            <div className="side_container">
                <div><p className="todo-list">
                    Todo List
                </p>
                <p className="history">
                    History
                </p></div>
                <div onClick={handlelogout}
                style={{ cursor: "pointer" }}
                className="logout">
                    <h3>
                        Logout
                    </h3>
                </div>
                
            </div>
            <div className="todo-list-show">
                 <TodoList/>
            </div>
            
        </div>
        
        </>
  );
}
export default Sidebar;
