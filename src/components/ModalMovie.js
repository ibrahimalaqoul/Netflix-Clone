import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Card } from 'react-bootstrap';
import { useRef } from 'react';


export default function ModalMovie(props) {
    async function handleAddFav(e, movie) {
        e.preventDefault();
        const dataToBeSent = {
            title: movie.title,
            release_date: movie.release_date,
            poster_path: movie.poster_path,
            overview: movie.overview,
            comment: movie.comment
        }
        const url = "https://ibrahim-alaqoul1.herokuapp.com/addFavMovies"
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataToBeSent)
        })
        const data = await response.json();
        console.log(111111,response.status);
        console.log(data);

    }

    const commmentRef = useRef();
    function handleComment(e) {
        e.preventDefault();
        const comment = commmentRef.current.value;
        const newmovie = { ...props.chosenMovie, comment };
        props.UpdateMovies(newmovie, props.chosenMovie.id);
    }

    return (
        <>
            <Modal show={props.show} onHide={props.ModalMoviehandleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.chosenMovie.title}</Modal.Title>
                </Modal.Header>
                <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500" + `${props.chosenMovie.poster_path}`} />

                <Modal.Footer>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Comment</Form.Label>
                            <Form.Control ref={commmentRef} type="text" placeholder="Enter your comment" />
                            <Form.Text className="text-muted">

                            </Form.Text>
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={handleComment}>
                            Submit
                        </Button>


                    </Form>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" type="submit" onClick={(e) => { handleAddFav(e, props.chosenMovie) }}>
                        Add to Favorites
                    </Button>
                    <Button variant="primary" onClick={props.handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
