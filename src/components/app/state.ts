
import { create } from "zustand";

type CounterStore ={
	count: number,
	increment:()=>void,
	decrement:()=>void,

}

const useCartStore=create<CounterStore>((set)=>({
	count:0,
	increment:()=>{
		set((state)=>({ count: state.count + 1 }))
	},
	decrement:()=>{
		set((state)=>({count: state.count -1}))
	}
}))

export default useCartStore
