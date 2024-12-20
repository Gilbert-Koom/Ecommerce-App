
import image1 from './assets/image-product-1.jpg'
import image2 from './assets/image-product-2.jpg'
import image3 from './assets/image-product-3.jpg'
import image4 from './assets/image-product-4.jpg'


import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

function MobileCarousel() {
   return(
		<>
			<Carousel className="">
				<CarouselContent className='bg-red-950'>
					<CarouselItem>
						<img src={image1} alt="" className='w-full'/>
					</CarouselItem>
					<CarouselItem>
						<img src={image2} alt="" className='w-full'/>
					</CarouselItem>
					<CarouselItem>
						<img src={image3} alt="" className='w-full'/>
					</CarouselItem>
					<CarouselItem>
						<img src={image4} alt="" className='w-full'/>
					</CarouselItem>
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext className=''/>
			</Carousel>

		</>
	 ) 
}

export default MobileCarousel