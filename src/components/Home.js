import React, { useEffect, useState } from "react";
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { NavLink } from "react-router-dom";
import axios from "axios";

const Home= () =>{

    const [getUser, setGetUser] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const getdata = async () =>{
        const url= 'http://localhost:8080/getusers';
        await axios.get(url)
        .then(response => {
            setGetUser(response.data);
            setIsLoading(true);
            console.log(response);
        }).catch(error => {
            console.log(error.response.data);
        });
    }

    useEffect(()=>{
        getdata();
    },[])

    const deleteUser=async (id)=>{
        const url= `http://localhost:8080/deleteuser/${id}`
        await axios.delete(url)
        .then(response =>{
            console.log('deleted user.');
            getdata();
            
        })
        .catch(error => {
            console.log(error);
        })
    }

    if(isLoading===false){
        return 'Loading...';
    }

    return(
        <div className="mt-5">
            <div className="container">
                <div className="add_btn mt-2 mb-2">
                    <NavLink to='/register' className="btn btn-primary">Add Data</NavLink>
                </div>
                    <table className="table">
                    <thead>
                        <tr className="table-dark">
                            <th scope="col">id</th>
                            <th scope="col">Username</th>
                            <th scope="col">Email</th>
                            <th scope="col">Job</th>
                            <th scope="col">Number</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>

                    {getUser.map((element,id) => {
                        return (
                        <>
                        <tr>
                        <th scope="row">{id+1}</th>
                            <td>{element.name}</td>
                            <td>{element.email}</td>
                            <td>{element.work}</td>
                            <td>{element.mobile}</td>
                            <td className="d-flex justify-content-between">
                                <NavLink to={`view/${element._id}`}><button className="btn btn-success"><VisibilityIcon/></button></NavLink>
                                <NavLink to={`edit/${element._id}`}><button className="btn btn-primary"><EditIcon/></button></NavLink>
                                <button onClick={()=>deleteUser(element._id)} className="btn btn-danger"><DeleteIcon/></button>
                            </td>
                    </tr>
                    </>
                    )})}


                    </tbody>
                    </table>

                
            </div>
        </div>
    )
}
export default Home