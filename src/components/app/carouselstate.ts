import {create} from "zustand"

type carousel={
  image:string,
  imageChanger1:()=>void,
  imageChanger2:()=>void,
  imageChanger3:()=>void,
  imageChanger4:()=>void,
}

const carouselStore=create<carousel>((set)=>({
  image:'first',
  imageChanger1:()=>{
    set(()=>({image: 'first'}))
  },
  imageChanger2:()=>{
    set(()=>({image: 'second'}))
  },
  imageChanger3:()=>{
    set(()=>({image: 'third'}))
  },
  imageChanger4:()=>{
    set(()=>({image: 'fourth'}))
  },

}))

export default carouselStore


