import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

function Carousels() {
  return (
    <Carousel className='imcar'>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src="https://images7.alphacoders.com/119/1199228.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <Link to="/details/tt9419884"><h3>Doctor Strange: Multiverse Of Madness</h3></Link>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src='https://wallpapercave.com/wp/wp1835180.jpg'
          alt="Second slide"
        />

        <Carousel.Caption>
          <Link to="/details/tt2488496"><h3>Star Wars: The Force Awakens</h3></Link>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src="https://c4.wallpaperflare.com/wallpaper/729/861/179/tv-show-lucifer-chloe-decker-lauren-german-lucifer-tv-show-hd-wallpaper-preview.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <Link to="/details/tt4052886"><h3>Lucifer</h3></Link>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousels;

// https://images7.alphacoders.com/119/1199228.jpg
// https://e1.pxfuel.com/desktop-wallpaper/742/156/desktop-wallpaper-article-15-movie-screening-stalled-in-kanpur-roorkee-article-15.jpg
// https://wiki.d-addicts.com/images/a/a6/Gap_Dong.jpg
//<a href="https://www.flaticon.com/free-icons/search" title="search icons">Search icons created by Catalin Fertu - Flaticon</a>