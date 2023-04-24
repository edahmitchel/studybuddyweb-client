import { Flex, Input } from "@chakra-ui/react"
import { Welcome } from "../Components/Welcome"
import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from "react-hook-form";
import { Link, Route } from "react-router-dom";
import "../style.css";
import {Modal} from "../Components/Modal";
import { Home } from "./home";
import Svg2 from ".././images/image 6.png";
import { Img } from "../Components/Image";
import { Side } from "../Components/Side";

export const Login =()=>{
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [isOpen, setIsOpen] = useState(false);
    const [rememberme, setRememberme] = useState("")
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        defaultValues:{
          userName:JSON.parse(localStorage.getItem("Username")),
          password:JSON.parse(localStorage.getItem("Password")),
          rememberMe:"null"
        }
      });
      const notify = (message) => {
        toast.error( message , {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
    };
      const onSubmit = ((data) => {
          
        JSON.parse((localStorage.getItem("backend"))).find((item)=>{
            if((item.userName !== data.userName && item.password !== data.password) || (item.email !== data.userName && item.password !== data.password) ) {
                notify("Wrong username or password")
            } 
            else{
                if(data.rememberMe === "on"){
                    setUsername(JSON.parse((localStorage.getItem("Username"))))
                    setPassword(JSON.parse((localStorage.getItem("Password"))))
                    setRememberme(JSON.parse((localStorage.getItem("Rememberme"))))
                    localStorage.setItem("Username", JSON.stringify( data.userName))
                    localStorage.setItem("Password", JSON.stringify( data.password))
                    localStorage.setItem("Rememberme", JSON.stringify( data.rememberMe))
                }else{
                    localStorage.removeItem("Username")
                    localStorage.removeItem("Password")
                    localStorage.removeItem("Rememberme")
                }
                notify("Log in successful")
            }

        })
    
      
        })
        useEffect(()=>{
            const mypassword = JSON.parse((localStorage.getItem("Password")))
            const myusername = JSON.parse((localStorage.getItem("Username")))
            const myrememberme = JSON.parse((localStorage.getItem("Rememberme")))
            if (mypassword) {
              setPassword(mypassword)
            }
            if (myusername) {
              setUsername(myusername)
            }
            if (myrememberme) {
              setRememberme(myrememberme)
            }
          },[])
    return(
        <Flex className="login">
            <div className="log">
                <Welcome sign="Log in"/>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Flex>
                        <label>User Name or Email</label>
                    </Flex>
                    <Flex>
                        <Input className="logInput"
                        type={"text"} required {...register("userName")}/>
                    </Flex>
                    {notify(errors.userName && errors.userName.message)}
                    <Flex>
                        <label>Password</label>
                    </Flex>
                    <Flex>
                        <Input className="logInput"
                        type={"password"} required {...register("password")}/>
                    </Flex>
                    {notify(errors.password && errors.password.message)}
                    <ToastContainer
                    position="top-center"
                    autoClose={500}
                    limit={1}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                />
                    <Flex>
                    <Input onClick={() =>{localStorage.setItem("Rememberme", JSON.stringify("null"))}}  className="logInput" id="radio"
                        type={"radio"} {...register("rememberMe")}/>
                        <label id="remember">Remember me</label>
                    </Flex>
                    <Flex>
                        <Input className="logInput" id="logbutton" type="submit" value="Login"/>
                    </Flex>
                    <h6 id="dont">Don't have an account ? <Link id="dontSign" to="/Dashboard">Sign up</Link></h6>
                </form>
                    <button id="forgot" onClick={() => setIsOpen(true)}>Forgot password?</button>                    
                    {isOpen && <Modal setIsOpen={setIsOpen} />}
                <h4 id="logFaq">FAQ | Features | Support</h4>
            </div>
            <Side id="title"/>
            <img id='svg2' src={Svg2}/>
            <Img/>
        </Flex>
    )
}