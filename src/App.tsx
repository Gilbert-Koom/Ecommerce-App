import MobileCarousel from "./components/app/carousel"
import Cartcontent from "./components/app/cartContent"
import Controller from "./components/app/cartController"
import Description from "./components/app/description"
import DesktopHeader from "./components/app/desktop-header"
import DesktopCarousel from "./components/app/desktopcarousel"
import MobileHeader from "./components/app/mobile-header"

function App() {


  return (
    <>
      <MobileHeader />
      <DesktopHeader />
      <Cartcontent />
      <MobileCarousel/>
      <DesktopCarousel />
      <Description />
      <Controller />


    </>
  )
}

export default App


