import Designs from "./Designs"
import Templates from "./Templates"

const Main = () => {
  return (
    <div className='w-full flex justify-center flex-col gap-5 items-center'>
      <Templates/>
      <Designs/>
  </div>
  )
}

export default Main