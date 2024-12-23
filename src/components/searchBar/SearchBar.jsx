import { useState } from "react";
import "./SearchBar.scss"

const type = ["buy", "rent"];
function SearchBar(){
    const [ query, setQuery] = useState({
        type:"buy",
        location:"",
        minPrice:0,
        maxPrce:0,
    });
    const switchType = (val)=>{
        setQuery((prev)=>({...prev, type:val}))
    };
    return(
        <div className="searchBar">
            <div className="type">
                {type.map((type)=>(
                <button key={type} onClick={()=> switchType(type)}
                className={query.type === type? "active" : " "}
                >{type}</button>
                ))}
                
            </div>
            <form >
            <input type="text" name="location" placeholder='city Location'/>
            <input type="number" name="minPrice" min={0} max={10000000} placeholder='Min Price'/>
            <input type="number" name="maxPrice" min={0} max={10000000} placeholder='Max Price'/>
            <button>
                <img src="/search.png" alt=""/>
            </button>
            </form>
        </div>
    )
}
export default SearchBar;