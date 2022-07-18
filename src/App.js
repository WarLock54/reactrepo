// import {BrowserRouter,Routes,Route, Outlet,NavLink} from "react-router-dom";
 
// import Yeter from "./özellikler/yeter";
// import Yeters from "./özellikler/yeters";
// import Error404 from "./özellikler/Error404";
//import {object, ref, string} from "yup";
// w

import React,{ PureComponent } from "react";
import Baslik from "../src/emoji/Header"
import AramaButonu from "../src/emoji/AramaButonu";
import AramaSonucu from "../src/emoji/AramaSonucu";
import FiltreleEmoji from "./emoji/FiltreleEmoji";

export default class App extends PureComponent{

  constructor(props){
    super(props)
    this.state={
      FiltredEmoji:FiltreleEmoji("",10)
    }
  }
  handleSearchChange=(event)=>{
    this.setState({
      FiltredEmoji:FiltreleEmoji(event.target.value,10)
    });
  }
  render(){
    return(
      <div>
  <Baslik />
 <AramaButonu  yazıdegiskeni={this.handleSearchChange}/>
      <AramaSonucu emojiData={this.state.FiltredEmoji}/>

        </div>
    )
  }
}
// function App() {
// // const [filter,setFilter]=useState("All");
// // const [tasks,setTasks]=useState(props.tasks);
// //   const gorevEkle=(gisim)=>{
// //     if(gisim===""){
// //       return;
// //     }
// //     const yenGorev={
// //       id: `task-${nanoid()}`,
// //       gisim: gisim,
// //       completed: false,
// //     };
// //     setTasks([...tasks,yenGorev]);

// //   }
// //   const toggleTaskComplete=(id)=>{
// //       const guncelGorev=tasks.map((gorev)=>{
// //         if(id===gorev.id){
// //           return {...tasks,completed:!gorev.completed}
// //         }
// //         return gorev;
// //       })

// // setTasks(guncelGorev);
// //   }
  
//   //  useEffect(()=>{
//   //    subsucribe((color)=>{
//   //   setAktifcolor(color);
//   // });
//   //  }
//   //   ,[]
//   //  )
//   //const [actifcolor,setAktifcolor]=useState("#282c34");

//   // const messages={
   
//   //   "tr-TR":{
//   //     title:"Merhaba Dunya",
//   //     description:"{count} yeni mesajın var"
//   //   },
      
//   //   "en-US":{
//   //     title:"Hello World",
//   //     description: "You have {count} new messages"
//   //   },

//   // }
//   // const isLocal=localStorage.getItem("dil")
//   //   const normalDil=isLocal?isLocal:navigator.language;
    
//   //   const [dil,setDil]=useState("tr-TR");
//   //   console.log(normalDil);
//   //   useEffect(()=>{
//   //     localStorage.setItem("dil",dil)
//   //   },[dil])

//   return (


  
//   //   <div className='App'>

//   //      <IntlProvider  locale={dil}
//   //     messages={messages[dil]}
//   //      >
      
//   //       <FormattedMessage 
//   //       id="title" /> 
//   //      <p>
//   //       <FormattedMessage id="description" values={{count:5}} />
//   //      </p>
        
//   //   <br />
//   //   <button onClick={()=>setDil("tr-TR")}>
//   //               tr
//   //   </button>
    
//   //   <button onClick={()=>setDil("en-US")}>
//   //                en
//   //   </button>
//   //      </IntlProvider>

//   //  </div>
 
// <>

// </>
 
//  )
 
// }

// export default App;
