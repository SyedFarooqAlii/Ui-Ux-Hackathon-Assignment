import React from 'react'
import Searchbar from '../Components/Searchbar'
import Cards from '../Components/CarsCards/page'
import SecondPage from '../Components/Second/page'
import ThirdPage from '../Components/ThirdPage/page'
import FourthPage from '../Components/FourthPage/page'




const Homepage = () => {
  return (
    <div>
<div className='lg:p-4 p-2 bg-[#F6F7F9]'>
    <Searchbar width={'w-full md:hidden'}/>
<Cards/>
<SecondPage/>
<ThirdPage/>
<FourthPage/>

</div>

    </div>
  )
}

export default Homepage