
import { create } from "zustand";

type CounterStore ={
	count: number,
	cart:number,
	increment:()=>void,
	decrement:()=>void,
	addToCart:()=>void

}

const useCartStore=create<CounterStore>((set)=>({
	count:0,
	cart:0,
	increment:()=>{
		set((state)=>({ count: state.count + 1 }))
	},
	decrement:()=>{
		set((state)=>({count: state.count -1}))
	},
	addToCart:()=>{
		set((state)=>({cart: state.count}))
	}
}))

export default useCartStore
