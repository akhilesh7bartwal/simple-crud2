import React, { useEffect, useState } from "react";

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WorkIcon from '@mui/icons-material/Work';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import { Card, CardContent } from "@mui/material";
import axios from "axios";
import { NavLink, useNavigate, useParams } from "react-router-dom";

const Detail= () =>{

    const navigate = useNavigate('');

    const [getUser, setGetUser] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    let {id} = useParams("");
    console.log(getUser);
    const getData=async () =>{    
        const url= `http://localhost:8080/getuser/${id}`;
        await axios.get(url)
        .then((response) =>{
            setGetUser(response.data);
            setIsLoading(true);
        }).catch(error =>{
            console.log(error);
        })
    };

    useEffect(()=>{
        getData();
    },[]);

    const deleteUser=async (id)=>{
        const url= `http://localhost:8080/deleteuser/${id}`
        await axios.delete(url)
        .then(response =>{
            console.log('deleted user.');
            navigate('/');
            
        })
        .catch(error => {
            console.log(error);
        })
    }

    const mystyle= {
        width: '50px',
        borderRadius: '50%',
    };

    if(isLoading===false){
        return 'Loading...';
    }

    return(
        <div className="container mt-3" >
            <h1 style={{"fontWeight":"400"}}>Welcome Akhilesh</h1>
            <Card sx={{ maxWidth: 700 }}>
                <CardContent>
                    <div className="add_btn">
                        <NavLink to={`/edit/${getUser._id}`}><button className="btn btn-primary mx-2"><EditIcon/></button></NavLink>
                        <button onClick={()=> deleteUser(getUser._id)} className="btn btn-danger mx-2"><DeleteIcon/></button>
                    </div>

                    <div className="row">
                        <div className="left_view col-lg-6 col-md-6 col-12">
                            <img src={require("./profile1.jpg" )} style={mystyle} alt="profile"/>
                            <h3 className="mt-3">Name: <span >{getUser.name}</span></h3>
                            <h3 className="mt-3">Age: <span >{getUser.age}</span></h3>
                            <p className="mt-3"><MailOutlineIcon/> Email: <span >{getUser.email}</span></p>
                            <p className="mt-3"><WorkIcon/> Occupation: <span>{getUser.work}</span></p>
                        </div>
                        <div className="right_view col-lg-6 col-md-6 col-12">
                            <p className="mt-5"><PhoneAndroidIcon/> Mobile: <span>{getUser.mobile}</span></p>
                            <p className="mt-3"><LocationOnIcon/> Location: <span>{getUser.address}</span></p>
                            <p className="mt-3">Description: <span>{getUser.desc}</span></p>
                        </div>
                    </div>
                </CardContent>
            </Card>
            
        </div>
    )
}
export default Detail