import LeftSide from "./LeftSide"
import RightSide from "./RightSide"

const Hero = () => {
  return (
    <div className='w-full h-[88vh] xl:flex items-center gap-20 justify-between'>
        <div className="hidden xl:inline-flex w-32 h-full">
            <LeftSide/>
        </div>
        <div>
        Middle
        </div>
        <div className="hidden xl:inline-flex w-32 h-full">
         <RightSide/>
        </div>
    </div>
  )
}

export default Hero