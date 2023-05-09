// import { Flex } from "@chakra-ui/react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Welcome } from "../Components/Welcome"
import { useForm } from "react-hook-form";
import { useState , useEffect } from 'react';
import {Flex, Input} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "../style.css";
import Svg1 from ".././images/image 5 (1).png";
import { Img } from "../Components/Image";
import { Side } from "../Components/Side";
// import { Hi } from "../Components/hi";


export const Signup = () => {
  const [backEnd, setBackEnd] = useState([])
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        defaultValues:{
          fullName:"",
          userName:"",
          email:"",
          password:"",
          confirmPassword:""
        }
      });
      const password = watch("password")
      const onSubmit = (data) => {
        setBackEnd(JSON.parse((localStorage.getItem("backend"))))
        let shouldAdd = true;
        backEnd.forEach((elem)=>{
          if(elem.email === data.email){
            notify("Email belongs to an existing user, use a another email.")
          shouldAdd = false
        }
          return shouldAdd
        
      });
      if(shouldAdd) {
        backEnd.push(data);
        localStorage.setItem("backend", JSON.stringify(backEnd));
        // setWaitList(JSON.parse(localStorage.getItem("waitist")));
      }
      
    
    //authentication to push in waitlist into an empty array called waitList
    if(backEnd.length === 0){
      backEnd.push(data)
      localStorage.setItem("backend", JSON.stringify(backEnd));
      // setWaitList(JSON.parse(localStorage.getItem("waitist")));
    } 
    
    console.log(JSON.parse((localStorage.getItem("backend"))))
    // location.href="../"
      };

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
    useEffect(()=>{
      const mydata = JSON.parse((localStorage.getItem("backend")))
      if (mydata) {
        setBackEnd(mydata)
      }
    },[])
    return(
          <Flex className="flex">
      <div className="signup">
            <Welcome sign="Sign up"/>
        <form onSubmit={handleSubmit(onSubmit)}>
        <label>Full Name</label>
      <Flex>
       <Input 
       type={"text"} required variant="filled" background="#D9D9D9"  minLength={8} {...register("fullName")}/>
          </Flex>
          {notify( errors.fullName && errors.fullName.message)}
          
          <Flex>
      <label>User Name</label>
      </Flex>
          <Flex>
       <Input
       type={"text"} required minLength={6} variant="filled" background="#D9D9D9" back maxLength={30} pattern='^[A-Za-z]+$' {...register("userName")}/>
        </Flex>
        {notify(errors.userName && errors.userName.message)}
        
        <Flex>
      <label>Email</label>
      </Flex>
        <Flex>
       <Input 
       type={"email"} required  variant="filled" background="#D9D9D9" back {...register("email", {
         pattern:{
           // value:/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9]+(?:\.])],
           message:"Email : Invalid email"
          }
        })}/>
        </Flex>
        {notify(errors.email && errors.email.message)}
        <Flex>
      <label>Password</label>
      </Flex>
        <Flex>
       <Input
       type={"password"} required minLength={8} variant="filled" background="#D9D9D9" back maxLength={30} {...register("password", {
          pattern:{
            value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,30}$/,
            message:"Password : Atleast one uppercase, one lowercase and one special character"
          }
        })}/>
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
      <label>Confirm password</label>
      </Flex>
        <Flex>
       <Input colorScheme="teal"
       type={"password"} required minLength={8} variant="filled" background="#D9D9D9" maxLength={30} {...register("confirmPassword", {
         validate:(value)=> value === password || "Confirm password : Passwords don't match"
        })} />
        </Flex>
        {notify(errors.confirmPassword && errors.confirmPassword.message)}
        <h4 id="already">Already have an account ? <Link id="log" to="/login">Login</Link> </h4>
        <Flex>
      <Input id="button" type="submit" value="Get started"/>
      </Flex>
    </form>
    <h4 id="faq">FAQ | Features | Support</h4>
    </div>
    
    <Side id="title"/>
    <img id='svg' src={Svg1}/>
      <Img/>          
      
        </Flex>
        

    )
}