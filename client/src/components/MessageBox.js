import React, {useState} from "react";

function MessageBox() {
    const [content, setContent] = useState("")
    function handleSend(){
        /*
        fetch(`/channel/${channelId}/message`,{
        method: "POST",
        headers: {
        "Content-Type":"application/json"
        },
        body: JSON.stringify({content: content})
        })
         */
    }
    return(
        <div>
            <input
                placeholder={"Enter a message here ..."}
                value={content}
                onChange={(e)=>setContent(e.target.value)}
            ></input>
            <button onClick={()=>{console.log(content)}}>Send!</button>
        </div>
    )
}

export default MessageBox;