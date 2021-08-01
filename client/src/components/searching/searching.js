import {React,useState,useEffect, useMemo} from 'react';
import './searching.css';
import Resultbox from './resultbox';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch} from '@fortawesome/free-solid-svg-icons';
import {useSelector, useDispatch} from 'react-redux';
import {getrests} from "../../reducers/restget"

function Searching() {

    // const [restaurants,setRestaurants] = useState([]);
    const [search, setSearch] = useState("");
    const restaurants = useSelector(state => state.rests);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getrests());
    },[dispatch]);

    const data = useMemo(() => {
        if (!search) return restaurants;
        return restaurants.filter((_data) => {
            return (
                _data.name.toLowerCase().includes(search.toLowerCase())
                // || _data.cuisine.toLowerCase().includes(search.toLowerCase())
            );
        });
    },[search,restaurants]);

    return (
        <div className="searching">
            <div className="searchbox">
                <FontAwesomeIcon icon={faSearch} aria-hidden="true" />
                <input 
                    type="text" 
                    placeholder="Search"
                    className="searchbar"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            {data.map((data, idx) => (
                <Resultbox {...data} key={idx} />
            ))}
        </div>
    )
};

export default Searching;

