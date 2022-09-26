import Nav from "../components/Nav";
import "../App.css";
import Movie from "../components/Movie";
import { useContext } from "react";
import AddMovie from "../components/admin/AddMovie";

function HomeAdmin() {



  return (
    <div className="">
      <div className="wrapper d-flex">
        <div className="left-side ">
          <div className="logo-div">
            <img src="/pngwing.com.png" alt="logo"></img>
          </div>

          <div>
            <Nav />
          </div>
        </div>
        {/* midle-side */}
        <div className="midle-side  ">
          <div className=" heading">
            <h4>Movie Night</h4>
          </div>
         
    <AddMovie/>
         
          
        </div>
        {/* end midle-side */}

      </div>

      
    </div>
  );
}

export default HomeAdmin;
