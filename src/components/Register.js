import React, { useState } from "react"
import { NavLink } from "react-router-dom"

const Register= ()=>{

    const [inputValue, setInputValue] = useState({
        name: "",
        email:"",
        age:"",
        mobile:"",
        work:"",
        address:"",
        desc:""
    }) 

    const setChange= (event)=>{
        console.log(event.target.value);
        const{name,value} = event.target;
        setInputValue((preValue) =>{
            return{
                ...preValue,
                [name]:value
            }
        })
    };
    return(
        <div className="container">
            <NavLink to='/'>Home</NavLink>
            <form className="mt-4">
                <div className="row">
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                        <input type="name" value={inputValue.name} onChange={setChange}  name="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
                        <input type="email" value={inputValue.email} onChange={setChange}  name="email" className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label htmlFor="name" className="name">Age</label>
                        <input type="number" value={inputValue.age} onChange={setChange} name="age" className="form-control" id="name" />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label htmlFor="name" className="name">Mobile</label>
                        <input type="number" value={inputValue.mobile} onChange={setChange} name="mobile" className="form-control" id="mobile" />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label htmlFor="name" className="name">Work</label>
                        <input type="text" value={inputValue.work} onChange={setChange} name="work" className="form-control" id="mobile" />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label htmlFor="name" className="name">Address</label>
                        <input type="text" value={inputValue.address} onChange={setChange} name="address" className="form-control" id="mobile" />
                    </div>
                    <div className="mb-3 col-lg-12 col-md-12 col-12">
                        <label htmlFor="name" className="name">Description</label>
                        <textarea type='text' name="desc" value={inputValue.desc} onChange={setChange} className="form-control" id="" cols="20" rows="5"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>           
        </div>
    )
}
export default Register