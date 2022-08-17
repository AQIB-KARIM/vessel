import Sponsor1 from "../../assets/Logos/logo-01.png"
import Sponsor2 from "../../assets/Logos/logo-02.png"
import Sponsor3 from "../../assets/Logos/logo-03.png"
import Sponsor4 from "../../assets/Logos/logo-04.png"
import Sponsor5 from "../../assets/Logos/logo-05.png"
import Sponsor6 from "../../assets/Logos/logo-06.png"
import Slider from 'react-slick';
import { Box } from '@mui/system';

const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay:true,
    responsive: [
      {
        breakpoint: 2048,
        settings: {
          infinite: true,
          speed: 500,
          slidesToShow: 6,
          slidesToScroll: 1,
        },
        breakpoint: 1024,
        settings: {
          infinite: true,
          speed: 500,
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
    
}
const SponsorsSlider = () => {
  return (
    <Box style={{ margin: "4vmax 0vmax", position: "relative" }}>
          <div className="sponsorsContainer">
            <Box style={{ marginLeft: "2vmax" }}>
    <Box style={{overflow:"hidden"}}>
      <Slider {...settings} className="sponserSlider">
        <div style={{ padding: "2vmax" }}>
        <img src={Sponsor1} className="sponserImage"/>
        </div>
        <div style={{ padding: "2vmax" }}>
        <img src={Sponsor2} className="sponserImage"/>
        </div>
        <div style={{ padding: "2vmax" }}>
        <img src={Sponsor3} className="sponserImage"/>
        </div>
        <div style={{ padding: "2vmax" }}>
        <img src={Sponsor4} className="sponserImage"/>
        </div>
        <div style={{ padding: "2vmax" }}>
        <img src={Sponsor5} className="sponserImage"/>
        </div>
        <div style={{ padding: "2vmax" }}>
        <img src={Sponsor6} className="sponserImage"/>
        </div>
      </Slider>
    </Box>
    </Box>
          </div>
        </Box>
  )
}

export default SponsorsSlider