import { WebSocketServer } from "ws";

const wss = new WebSocketServer({port : 8000});

wss.on('connection', function (ws){

    console.log("user connected!");

    ws.onmessage = (e)=>{
      
      const msg = e.data;

      if(msg.toString() === "ping"){
        ws.send("pong");
      }
      
      
    } 
    setInterval(() => {
      ws.send("stock price is :"+ Math.random()*0.5);
    }, 500);
  

});