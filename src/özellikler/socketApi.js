import io from 'socket.io-client';
let socket;
export const init=()=>{
    console.log("suncuya bağlanılıyor...");
    socket=io("http://localhost:3000/",{
        transport:["websocket"],
    })
    socket.on("connect",()=>console.log("sucunuyla bağlantı gerçekleşti"));
}
export const send=(color)=>{
    socket.emit("newColor",color)
}
export const subsucribe=(cb)=>{
    socket.on("receive",(color)=>{
        console.log(color)
        cb(color);
    })

}