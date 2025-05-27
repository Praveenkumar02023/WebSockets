"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
require("./App.css");
function App() {
    const [socket, setSocket] = (0, react_1.useState)();
    function sendMessage() {
        if (!socket)
            return;
        //@ts-ignore
        socket.send("ping");
    }
    (0, react_1.useEffect)(() => {
        const ws = new WebSocket("ws://localhost:8000");
        setSocket(ws);
        ws.onmessage = (ev) => {
            alert(ev.data);
        };
    }, []);
    return <>
    <input type="text" placeholder='message...'/>
    <button onClick={sendMessage}>Send</button>
  </>;
}
exports.default = App;
