import React,{useState} from 'react'
import axios from 'axios'
import {Server} from "../Config";


function Form() {

    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');

    const inputHandler = (event, number) => {
        if (number === 0)
            setEmail(event.target.value);
        else
            setPwd(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        axios.post(`${Server}user/login`, {
            userName: email,
            password: pwd
        })
            .then(function (response) {
                console.log(response)
                alert(response.status)
            })
            .catch(error => {
                console.log(error);
            })
    };


    return (
        <div class="container">
            <div class="row">
                <div class="mx-auto col-md-6 col-10 bg-white p-5">
                    <h1 class="mb-4">Log in</h1>
                    <form onSubmit={submitHandler}>
                        <div class="form-group"> <input type="email" class="form-control" placeholder="Enter email" id="form9" onChange={(event) => inputHandler(event, 0)}  /> </div>
                        <div class="form-group mb-3"> <input type="password" class="form-control" placeholder="Password" id="form10" onChange={(event) => inputHandler(event, 1)}  /> <small class="form-text text-muted text-right">
                        </small> </div> <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Form
