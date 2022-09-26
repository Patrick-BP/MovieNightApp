import Movie from "./Movie";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import FavAndPlayListMovie from './FavAndPlayListMovie'
import {Context} from './context'
axios.defaults.baseURL = 'http://localhost:3001'
function Favorites() {
  const [favlist, setfavList] = useState([]);
  const {user, dispatch} = useContext(Context)
  const [userid, setuserid] = useState(user.data.others)
  useEffect(() => {
    (async function fetch() {
    const listFav = await axios.get(`fav/${userid._id}`);
    console.log(listFav.data);
    setfavList(listFav);
    })();
  }, []);

  return (
    <>
    {favlist.data?.map((fav, index)=>{
        return (
            <div key={index} className="mr-3 mb-4">
         <FavAndPlayListMovie list ={fav} />
      </div>
        )
    })}  
      
      <div className="mr-3">
        <Movie />
      </div>

      <div className="mr-3">
        <Movie />
      </div>
      <div className="mr-3">
        <Movie />
      </div>
    </>
  );
}

export default Favorites;
