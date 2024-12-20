
import thumbnail1 from './assets/image-product-1-thumbnail.jpg'
import thumbnail2 from './assets/image-product-2-thumbnail.jpg'
import thumbnail3 from './assets/image-product-3-thumbnail.jpg'
import thumbnail4 from './assets/image-product-4-thumbnail.jpg'


import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

function CarouselComponent() {
   return(
		<>
			<Carousel className="">
				<CarouselContent className='bg-red-950'>
					<CarouselItem>
						<img src={thumbnail1} alt="" className='w-full'/>
					</CarouselItem>
					<CarouselItem>
						<img src={thumbnail2} alt="" className='w-full'/>
					</CarouselItem>
					<CarouselItem>
						<img src={thumbnail3} alt="" className='w-full'/>
					</CarouselItem>
					<CarouselItem>
						<img src={thumbnail4} alt="" className='w-full'/>
					</CarouselItem>
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext className=''/>
			</Carousel>

		</>
	 ) 
}

export default CarouselComponent