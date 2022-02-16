
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2';
import {useEffect, useState} from 'react';


function FavList(){
    const [favListData, setFavListData] = useState();
    async function getDataFromDB(){
       const response = await fetch(`https://ibrahim-alaqoul1.herokuapp.com/getAllFavMovies`);
       const data = await response.json();
       setFavListData(data);
     }
     useEffect(() => {
       getDataFromDB();
     }, []);

   
   async function handleDelete(id){
        const response = await fetch(`https://ibrahim-alaqoul1.herokuapp.com/deleteFavMovies/${id}`,{
            method: 'DELETE',
        });
        
        if(response.status === 204){
            getDataFromDB();
            Swal.fire(
                'It is done!',
                'Movie Deleted Successfully',
                'success'
              )
        }
    }
 return (
     <>
     <h1>This is my favorite list of Movies</h1>
     {
         favListData && favListData.map(movie =>{
             return (
                 <>
                   <Card style={{ width: '18rem' }} key={movie.id}>
                                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                                <Card.Body>
                                    <Card.Title>{movie.title}</Card.Title>
                                    <Card.Text>
                                        {movie.release_date} 
                                    </Card.Text>
                                    <Card.Text>
                                       {movie.overview} 
                                    </Card.Text>
                                    <Card.Text>
                                        {movie.comment ? movie.comment : "No Comment is Added"}
                                    </Card.Text>
                                    <Button variant="primary" onClick={()=>{handleDelete(movie.id)}}>Delete</Button>
                                </Card.Body>
                            </Card>
                 </>
             )
         })
     }
     </>
 )
}

export default FavList;