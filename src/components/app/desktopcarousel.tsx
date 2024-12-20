
import thumbnail1 from './assets/image-product-1-thumbnail.jpg'
import thumbnail2 from './assets/image-product-2-thumbnail.jpg'
import thumbnail3 from './assets/image-product-3-thumbnail.jpg'
import thumbnail4 from './assets/image-product-4-thumbnail.jpg'

import image1 from './assets/image-product-1.jpg'
import image2 from './assets/image-product-2-thumbnail.jpg'
import image3 from './assets/image-product-3-thumbnail.jpg'
import image4 from './assets/image-product-4-thumbnail.jpg'


function DesktopCarousel() {
   return(
		<>
			<div className=''>
				<div>
					<img src={image1} alt="" />
				</div>
				<div className='flex'>
					<img src={thumbnail1} alt="" />
					<img src={thumbnail2} alt="" />
					<img src={thumbnail3} alt="" />
					<img src={thumbnail4} alt="" />
				</div>

			</div>

		</>
	 ) 
}

export default DesktopCarousel