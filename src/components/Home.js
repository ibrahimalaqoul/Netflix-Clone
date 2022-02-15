import React, { useEffect, useState } from "react";
import MovieList from'./MovieList';

function Home() {
    const [movie, setMovie] = useState();
    const getMovie = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_MovieSERVER}/trending`)
            const data = await response.json();
            console.log(data);
            setMovie(data);
        } catch (error) {
            console.log("error", error);
        }
    };
   
    useEffect(() => {
        getMovie();
    }, []);

    return (
        <>
            <h1> Movie App</h1>
                {
                    movie && (<MovieList movies={movie} />)
                }
         

        </>
    )
}

export default Home;