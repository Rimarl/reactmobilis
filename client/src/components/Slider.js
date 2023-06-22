import './Slider.css'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import img2 from './img/img2.jpg'
import img3 from './img/img3.jpg'
import img1 from './img/img1.jpg'
import img4 from './img/img4.jpg'
import img6 from './img/img6.jpg'

const properties ={ 
  duration : 2000,
  infinite : true,
  
  
  
  }
function Slider () { 
  
  return( 
      <> 
<Carousel autoPlay interval={3000} infiniteLoop showIndicators = {false}
showArrows = {false}
showStatus ={false}
showThumbs={false}
> 



 <div> 
   <img  src ={img4}  height /> 
 </div>
 <div> 
   <img  src ={img6}  height /> 
 </div>

</Carousel>
      </>
  );
}

export default Slider;