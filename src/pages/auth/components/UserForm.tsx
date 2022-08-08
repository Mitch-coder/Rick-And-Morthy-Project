import { ChangeEvent, useState,FC, useContext, useEffect, useCallback } from "react"
import { useNavigate } from "react-router-dom";
import UserContext from "../../../types/UserContext";


const UserForm:FC = () =>{
    const [enteredName,setName] = useState("")
    const [enteredPassword,setPassword] = useState("")
    const {performLogin,isLoggedin,performLogout} = useContext(UserContext)
    const navigate= useNavigate();


const nameChangeHandler = (e: ChangeEvent<HTMLInputElement>) =>{
    setName(e.target.value)
}
const passwordChangeHandler = (e: ChangeEvent<HTMLInputElement>) =>{
    setPassword(e.target.value)
}

const  submitHandler = () =>{

            if(enteredName==="admin"&&enteredPassword==="1234"){
              
                console.log("entro xd")
                performLogin()
                navigate("/home")
            }
       
   
}

    return(
        <div className="m-0 vh-100 row justify-content-center align-items-center">
        <form onSubmit={submitHandler } className="col-auto">
        <div className="mb-3">
            <label className="form-label">Insert username</label>
            <input type="text" value = {enteredName} onChange={nameChangeHandler} className="form-control" id="exampleInputPassword1"/>
        </div>

        <div>
            <label>Insert password</label>
            <input type="password" value = {enteredPassword} onChange={passwordChangeHandler}  className="form-control" id="exampleInputPassword1"/>
        </div>
        
        <button className="btn btn-primary"  >Log in</button>
    </form>

    </div> 

    )

}
export default UserForm

function redirect(arg0: string) {
    throw new Error("Function not implemented.");
}
