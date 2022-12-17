import React, {useContext, useState} from 'react';
import {MDBBtn, MDBCard, MDBCheckbox, MDBContainer, MDBIcon, MDBInput} from "mdb-react-ui-kit";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {useHistory} from "react-router-dom";
import {ADMIN_ROUTE, MAIN_ROUTE, PROFILE_ROUTE} from "../utils/consts";
import {login, registration} from "../http/userAPI";

const Auth = observer(() => {
    const {points} = useContext(Context)
    const {user} = useContext(Context)
    const history = useHistory()
    const [User, setUser] = useState({email:"",password:''})
    const reg = (e) =>{
        try{
            e.preventDefault()
            const Users={
                ...User

            }
            const reg = async ()=>{
                const response = await registration(Users.email,Users.password)
                console.log(response)

                user.setCurrentUser(response)
                user.setIsAuth(true)
                history.push(PROFILE_ROUTE)
            }
            reg()
        }catch(e){
            alert(e.response.data.message)
        }
    }
    const signIn = (e) =>{
        try{
            e.preventDefault()
            const Users={
                ...User

            }
            const log = async ()=>{
                const response = await login(Users.email,Users.password)
                console.log(response)

                user.setCurrentUser(response)
                user.setIsAuth(true)
                history.push(PROFILE_ROUTE)
            }
            log()
        }catch(e){
            alert(e.response.data.message)
        }
    }
    return (
        <MDBContainer className="p-3 my-5 d-flex flex-column w-50 ">
            {
                user.login ?
                    <MDBCard className="d-flex justify-content-center align-items-center p-3 mask-custom"  border={3} style={{borderRadius:21, width:500}}>
                    <h2>Sign In</h2>
                        <MDBInput
                            value={User.email}
                            onChange={e=>setUser({...User,email:e.target.value})}
                            wrapperClass='mb-4' label='Email address' id='form1' type='email'/>
                        <MDBInput
                            value={User.password}
                            onChange={e=>setUser({...User,password:e.target.value})}
                            wrapperClass='mb-4' label='Password' id='form2' type='password'/>


                    <MDBBtn className="mb-4" onClick={signIn}>Sign in</MDBBtn>
                    <span>Dont have account? <a style={{color:"blue",cursor:"pointer"}} onClick={()=>{
                        user.setLogin(false)
                        user.setReg(true)
                        signIn()
                    }

                    }>Register</a></span>
                </MDBCard> : <div></div>

            }
            {
                user.reg ?
                    <MDBCard className="d-flex justify-content-center align-items-center p-3 mask-custom"  border={3} style={{borderRadius:21, width:500}}>
                    <h2>Register</h2>
                    <MDBInput
                        value={User.email}
                        onChange={e=>setUser({...User,email:e.target.value})}
                        wrapperClass='mb-4' label='Email address' id='form1' type='email'/>
                    <MDBInput
                        value={User.password}
                        onChange={e=>setUser({...User,password:e.target.value})}
                        wrapperClass='mb-4' label='Password' id='form2' type='password'/>


                    <MDBBtn className="mb-4" onClick={reg}>Register</MDBBtn>
                    <span>Have account? <a style={{color:"blue",cursor:"pointer"}} onClick={()=>{
                        user.setReg(false)
                        user.setLogin(true)
                    }

                    }>Sign In</a></span>
                </MDBCard> : <div></div>
            }



        </MDBContainer>
    );
});

export default Auth;