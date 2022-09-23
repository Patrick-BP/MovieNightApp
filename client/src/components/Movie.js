import React from "react";


function Movie() {
  return (
    <>
      
          <div  className="m-2 movie-box image-container">
            <img src="/avengers.jpg" alt="movie" />
            <div className="overlay d-flex align-items-center justify-content-center">
              <p>movie Title</p>
              
            </div>
          </div>
       
    </>
  );
}

export default Movie;
