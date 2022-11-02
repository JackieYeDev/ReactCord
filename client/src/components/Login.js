import React, {useState} from "react";

function Login(){
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        passwordConfirmation: "",
    })
    function handleSubmit(e){
        e.preventDefault()
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                username: formData.username,
                password: formData.password,
                password_confirmation: formData.passwordConfirmation,
            })
        }).then(res=>res.json()).then(response=>console.log(response))
    }
    return(
        <div>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <input
                    placeholder={"username"}
                    value={formData.username}
                    onChange={(e)=>setFormData({...formData, username: e.target.value})}
                />
                <input
                    placeholder={"password"}
                    value={formData.password}
                    onChange={(e)=>setFormData({...formData, password: e.target.value})}
                />
                <input
                    placeholder={"confirm password"}
                    value={formData.passwordConfirmation}
                    onChange={(e)=>setFormData({...formData, passwordConfirmation: e.target.value})}
                />
                <button type={"submit"}>Login!</button>
            </form>
        </div>
    )
}

export default Login;