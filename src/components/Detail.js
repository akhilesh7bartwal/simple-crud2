import React from "react";

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WorkIcon from '@mui/icons-material/Work';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import { Card, CardContent } from "@mui/material";

const Detail= () =>{
    const mystyle= {
        width: '50px',
        borderRadius: '50%',
    };
    return(
        <div className="container mt-3" >
            <h1 style={{"fontWeight":"400"}}>Welcome Akhilesh</h1>
            <Card sx={{ maxWidth: 700 }}>
                <CardContent>
                    <div className="add_btn">
                        <button className="btn btn-primary mx-2"><EditIcon/></button>
                        <button className="btn btn-danger mx-2"><DeleteIcon/></button>
                    </div>
                    <div className="row">
                        <div className="left_view col-lg-6 col-md-6 col-12">
                            <img src={require("./profile1.jpg" )} style={mystyle} alt="profile"/>
                            <h3 className="mt-3">Name: <span >Akhilesh</span></h3>
                            <h3 className="mt-3">Age: <span >21</span></h3>
                            <p className="mt-3"><MailOutlineIcon/> Email: <span >Akhileshbartwal61@gmail.com</span></p>
                            <p className="mt-3"><WorkIcon/> Occupation: <span>web developer</span></p>
                        </div>
                        <div className="right_view col-lg-6 col-md-6 col-12">
                            <p className="mt-5"><PhoneAndroidIcon/> Mobile: <span>+917895214338</span></p>
                            <p className="mt-3"><LocationOnIcon/> Location: <span>srinagar garhwal</span></p>
                            <p className="mt-3">Description: <span>nothing much to say</span></p>
                        </div>
                    </div>
                </CardContent>
            </Card>
            
        </div>
    )
}
export default Detail