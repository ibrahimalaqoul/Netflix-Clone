
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ModalMovie from './ModalMovie';
import { useState } from 'react';

export default function Movie(props) {
    console.log(111113333,props.data);
    const [IsShown, setShown] = useState(false);
    const [chosenMovie, setChosenMovie] = useState();
    const handleClose = () => setShown(false);
    const handleShow = () => setShown(true);
    function handleShowModal(data) {
        console.log(data);
        handleShow();
        setChosenMovie(data)
    }
    return (
        <>
            <h1>movies List:</h1>
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img  variant="top" src={`https://image.tmdb.org/t/p/w500/${props.data.poster_path}`} />

                    <Card.Body>
                        <Card.Title>{props.data.title}</Card.Title>
                        <Button variant="primary" onClick={() => { handleShowModal(props.data) }}>Show Modal</Button>
                    </Card.Body>
                </Card>
                {
                    chosenMovie && <ModalMovie show={IsShown} handleClose={handleClose} chosenMovie={chosenMovie} />
                }

            </div>





        </>
    )
}