
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "./components/Modal";

function Home() {
    const navigate = useNavigate();
    const [email, setEmail]=useState('')

    useEffect(() => {
        checkuser()
    },[])
    
    const checkuser = () => {
        const email = localStorage.getItem("email")
        if(email){
            setEmail(email)
        }else{
            navigate("/login")
        }
    }
    const logout = () => {
        localStorage.clear();
        navigate("/login")
    }
    const [show , setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <section>
            
            Welcome , {email}
            <button 
            // onClick={logout}
            onClick={handleShow}
            >
                logout
            </button>
            {show && (

            <Modal show={show} handleClose={handleClose} />
            ) }
        </section>
    )
}

export default Home