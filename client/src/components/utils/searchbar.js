import {React
    // ,useState,useMemo
} from 'react';
import './searchbar.css';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSearch} from '@fortawesome/free-solid-svg-icons';

function Searchbar (){

    // const [restaurants,setRestaurants] = useState([]);
    // const [search, setSearch] = useState("");

    // async function getData (){
    //     await fetch(`http://localhost:5000/restaurant`)
    //     .then((res)=> res.json())
    //     .then((restData)=>{
    //         setRestaurants(restData);
    //     })
    //     .catch((err)=>console.log(err));
    // };
    // getData();
    
    // const data = useMemo(() => {
    //     if (!search) return restaurants;
    //     return restaurants.filter((_data) => {
    //         return (
    //             _data.name.toLowerCase().includes(search.toLowerCase()) ||
    //             _data.cuisine.toLowerCase().includes(search.toLowerCase())
    //         );
    //     });
    // },[search,restaurants]);

    return(
        <div className="searchbar"></div>
        // <div className="search-container">
        //     <div className="searchbar">
        //         <FontAwesomeIcon className="search-icon" icon={faSearch} aria-hidden="true" />
        //         <input 
        //         type="text" 
        //         placeholder="Search"
        //         className="search-bar"
        //         value={search}
        //         onChange={(e) => setSearch(e.target.value)}
        //         />
        //         <div>{`${data?.[0]?.["name"]},${data?.[0]?.["cuisine"]}`}</div>
        //         <div>{`${data?.[1]?.["name"]},${data?.[1]?.["cuisine"]}`}</div>
        //         <div>{`${data?.[2]?.["name"]},${data?.[2]?.["cuisine"]}`}</div>
        //         <div>{`${data?.[3]?.["name"]},${data?.[3]?.["cuisine"]}`}</div>
        //     </div>
        // </div>
    );
}

export default Searchbar;