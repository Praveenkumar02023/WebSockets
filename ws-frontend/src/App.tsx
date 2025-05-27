
import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  
  const [socket , setSocket] = useState();
  const inputRef = useRef()
  function sendMessage(){
    if(!socket)return;
     //@ts-ignore
    const message = inputRef.current.value;
      //@ts-ignore
      socket.send(message);
  }

  useEffect(()=>{
    const ws = new WebSocket("ws://localhost:8000");

    setSocket(ws);

    ws.onmessage = (ev) =>{
      alert(ev.data);
    }
  },[])

  return <>
    <input ref={inputRef} type="text" placeholder='message...' />
    <button onClick={sendMessage} >Send</button>
  </>
}

export default App
