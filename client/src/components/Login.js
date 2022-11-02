import React, {useState} from "react";

function Login(){
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        passwordConfirmation: "",
    })
    function handleFormDataInput(e){
        setFormData({...formData, [`${e.target.name}`]: e.target.value})
    }
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
                <p>
                    Login Form
                </p>
                <p>
                <input
                    name={"username"}
                    placeholder={"username"}
                    value={formData.username}
                    onChange={(e)=> handleFormDataInput(e)}
                />
                </p>
                <p>
                <input
                    name={"password"}
                    placeholder={"password"}
                    value={formData.password}
                    onChange={(e)=>handleFormDataInput(e)}
                />
                </p>
                <p>
                <input
                    name={"passwordConfirmation"}
                    placeholder={"confirm password"}
                    value={formData.passwordConfirmation}
                    onChange={(e)=>handleFormDataInput(e)}
                />
                </p>
                <p>
                <button type={"submit"}>Login!</button>
                </p>
            </form>
        </div>
    )
}

export default Login;