import Movie from './Movie'
import './MovieList.css'
export default function MovieList(props){
    console.log(2222,props.movies);
    return (
        <div className='carddiv'>
         {
               props.movies.map(value => {
                return( <>
                  <Movie  data = {value} UpdateMovies={props.UpdateMovies}/>

                </>
                )
            
         })
         }   
        
        </div>
    )
}