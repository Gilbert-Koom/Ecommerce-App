
import thumbnail1 from './assets/image-product-1-thumbnail.jpg'
import thumbnail2 from './assets/image-product-2-thumbnail.jpg'
import thumbnail3 from './assets/image-product-3-thumbnail.jpg'
import thumbnail4 from './assets/image-product-4-thumbnail.jpg'

import image1 from './assets/image-product-1.jpg'
import image2 from './assets/image-product-2.jpg'
import image3 from './assets/image-product-3.jpg'
import image4 from './assets/image-product-4.jpg'
import carouselStore from './carouselstate'


function DesktopCarousel() {
	const image=carouselStore((state)=>state.image)
	const imageChanger1=carouselStore((state)=>state.imageChanger1)
	const imageChanger2=carouselStore((state)=>state.imageChanger2)
	const imageChanger3=carouselStore((state)=>state.imageChanger3)
	const imageChanger4=carouselStore((state)=>state.imageChanger4)

	console.log(image)

   return(
		<>
			<div className=''>
				<div>
					{
						image==='first' ? <img src={image1} alt="" /> : <p></p>
					}
					{
						image==='second' ? <img src={image2} alt="" /> : <p></p>
					}
					{
						image==='third' ? <img src={image3} alt="" /> : <p></p>
					}
					{
						image==='fourth' ? <img src={image4} alt="" /> : <p></p>
					}
						
				</div>
				<div className='flex'>
					<button onClick={imageChanger1}>
						<img src={thumbnail1} alt="" />
					</button>
					<button onClick={imageChanger2}>
						<img src={thumbnail2} alt="" />
					</button>
					<button onClick={imageChanger3}>
						<img src={thumbnail3} alt="" />
					</button>
					<button onClick={imageChanger4}>
						<img src={thumbnail4} alt="" />
					</button> 

				</div>
				

			</div>

		</>
	 ) 
}

export default DesktopCarousel