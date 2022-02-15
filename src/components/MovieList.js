import Movie from './Movie'
export default function MovieList(props){
    console.log(2222,props.movies);
    return (
        <>
         {
               props.movies.map(value => {
                return( <>
                  <Movie data = {value}/>

                </>
                )
            
         })
         }   
        
        </>
    )
}