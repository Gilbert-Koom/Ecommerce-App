

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

function App() {


  return (
    <>
      <p className="bg-red-950 text-lg">hello</p>
      <Accordion type="single" collapsible>
				<AccordionItem value="item-1">
					<AccordionTrigger>Is it accessible?</AccordionTrigger>
					<AccordionContent>
						Yes. It adheres to the WAI-ARIA design pattern.
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-2">
					<AccordionTrigger>Are you hungry?</AccordionTrigger>
					<AccordionContent>
						Yes. I am hungry because I want to be rich.
					</AccordionContent>
				</AccordionItem>
			</Accordion>

    </>
  )
}

export default App
