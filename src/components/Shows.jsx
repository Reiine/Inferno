import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Shows(props) {

  return (
    <div className='show'>
      <Card style={{ width: '18rem' }} className="s">
        <Link to={`/details/${props.imdbID}`}>
          <Card.Img variant="top" src={props.Poster} />
          <Card.Body>
            <Card.Title><h5>{props.Title}</h5></Card.Title>
            <Card.Text>
              {props.Year}
            </Card.Text>
          </Card.Body>
        </Link> 
      </Card>
    </div>

  );
}

export default Shows;