import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./TodoList.css"

export const TodoList = () => {
    const [data, setdata] = useState([]);
    const[addData,setAddData]=useState([])
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:8080/todoActivity/alldata', {
            method: "get",
            headers: {
                accessToken: sessionStorage.getItem("accessToken"),
            },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.message !== "jwt malformed") {
                    setdata(data);
                    console.log(data)

                } else {
                    navigate("/");
                }
            });
    },[data]);
    const addActivity=()=>{
        if(addData){
        fetch("http://localhost:8080/todoActivity/add",{
            method:"post",
            headers: {
                accessToken: sessionStorage.getItem("accessToken"),
                "Content-Type": "application/json",
            },
            body: JSON.stringify(addData),
        }).then((res) => res.json())
    }
    }
  return (
    <>
    <button className="add-Activity">Add new Activity</button>
    <div className="tableHeading">
        <table>
            <thead>
            <tr>
                <th>
                    Activity
                </th>
                <th>Status</th>
                <th>Time Taken <br/> (hrs:Min:Sec)</th>
                <th>Action</th>
            </tr></thead>
            <tbody>
               {data.map((user,i)=>{
                    return (
                        <tr key={i}>
                            <td>{user.Activity.charAt(0).toUpperCase() +
                                user.Activity.slice(1)}</td>
                                <td>pending</td>
                                <td>0:50</td>
                                <td>start</td>
                        </tr>
                    )
                })}
            </tbody>

        </table>
    </div>
    </>
  )
}
