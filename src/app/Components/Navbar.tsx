import React from 'react'
import Searchbar from './Searchbar'

const Navbar = () => {
  return (
    <div className='bg-white'>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css" />
        <div className='flex items-center flex-row-reverse justify-between p-4'>
    {/* Left Section */}
    <div className='flex items-center space-x-6'>
        <div className='hidden md:flex items-center space-x-2'>
            <i className="fa-solid fa-heart  rounded-full text-[24px] text-[#3D5278]"></i>
            <div className='relative'>
                <i className="fa-solid fa-bell  rounded-full text-[#3D5278] text-[24px]"></i>
                <div className='absolute top-0 right-0 bg-red-500 w-2 h-2 rounded-full'></div>
            </div>
            <i className="fa-solid fa-gear  rounded-full text-[#3D5278] text-[24px]"></i>
        </div>
        <img className='w-8 h-8 rounded-full object-cover' src="https://s3-alpha-sig.figma.com/img/f1f5/6cb5/7c6c5d88e94501a481b5f732536c2851?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o3Rx4DP6Md4sfr-geOWzMiecpDr8oAJmmU0QmRfMLXDsq96B1p63oz2cxB6EvRfD-LW~ZVFrdINPIYEkw9x6dmyiWPOtnqcBBXXQ9u-Us8kkEzSB8h6NDv3h6yx5x2mfK0ffo8dnInf6DhZHaWXWLmILwA-6nML-~vORnwd-SFozgREuIehrAFSehXaKlyXccIytONXDxKy1S1Udb5NRJQLzATAyysfsTMxSC-fk7qM1LGlPo5SDqjqTsPSZ87nCeUKrHLqvr4DSdI~1p504Fyf9KlZqrMNBgKGMU78qAmNrfSU6lEgXHEetJFIWVCW4XXPGoZQT1k9fxQ2sKc2MlQ__" alt="User" />
    </div>

    {/* Right Section */}
    <div className='flex items-center space-x-8 ml-2 '>
        <h1 className='text-3xl text-blue-500'>MORENT</h1>
        <div className='hidden md:block'>
            <Searchbar width={'mid:w-[400px]'} />
        </div>
</div>

        </div>

        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        </div>
  )
}

export default Navbar