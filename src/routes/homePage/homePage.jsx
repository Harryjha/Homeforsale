import { useContext } from "react"
import SearchBar from "../../components/searchBar/SearchBar"
import { AuthContext } from "../../context/AuthContext"
import "./homePage.scss"
function HomePage(){

    const{currentUser} =useContext(AuthContext)
    console.log(currentUser)
    return(
      <div className="homePage">
        <div className="textContainer">
            <div className="wrapper">
            <h1 className="title">
      "Discover your dream home with us,
       
       Start your journey to homeownership today.."
       </h1>
       <p>

       </p>
       <SearchBar/>
       <div className="boxes">
        <div className="box">
            <h1>16+</h1>
            <h2>Years of experience</h2>
        </div>
        <div className="box">
            <h1>200</h1>
            <h2>Award Gained</h2>
        </div>
        <div className="box">
            <h1>2000+</h1>
            <h2>Property Ready</h2>
        </div>
       </div>
       </div>
        </div>
        <div className="imgContainer">
            <img src="/bg.png" alt="" />
        </div>
      </div>
      
    )
    }
    export default HomePage