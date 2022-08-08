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

    return <form onSubmit={submitHandler }>
        <div>
            <label>Insert username</label>
            <input type="text" value = {enteredName} onChange={nameChangeHandler}/>
        </div>

        <div>
            <label>Insert password</label>
            <input type="text" value = {enteredPassword} onChange={passwordChangeHandler}/>
        </div>
        
        <button  >Log in</button>
    </form>
}
export default UserForm

function redirect(arg0: string) {
    throw new Error("Function not implemented.");
}
