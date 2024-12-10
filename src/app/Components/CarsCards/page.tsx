import Image from 'next/image'
import React from 'react'

const Cards = () => {

  const data=[
    { 
      id:1,
      name:"Koenigsegg",
    type:"Sports",
     imgurl:"/car1.png",
    specification:"90L",
    cartype:"Manual",
    person:"2 People",
    price:"$99.00/",
    days:"day",
      buttontext:"Rent Now"
  },
    {
      id:2,
      name:"Nissan GT - R",
    type:"Sports",
     imgurl:"/car2.png",
    specification:"90L",
    cartype:"Manual",
    person:"2 People",
    price:"$80.00/",
    days:"day",
    buttontext:"Rent Now"
  },
  { 
    id:3,
    name:"Koenigsegg",
  type:"Sports",
   imgurl:"/car1.png",
  specification:"90L",
  cartype:"Manual",
  person:"2 People",
  price:"$99.00/",
  days:"day",
    buttontext:"Rent Now"
  },
  { 
    id:4,
    name:"Nissan GT - R",
    type:"Sports",
     imgurl:"/car2.png",
    specification:"90L",
    cartype:"Manual",
    person:"2 People",
    price:"$80.00/",
    days:"day",
    buttontext:"Rent Now"
  }, ]
  const data2=[
  { 
    id:1,
    name:"All New Rush",
    type:"SUV",
     imgurl:"/suv1.png",
    specification:"90L",
    cartype:"Manual",
    person:"6 People",
    price:"$76.00/",
    days:"day",
    buttontext:"Rent Now"
  },
    { 
      id:2,
      name:"CR  - V",
    type:"SUV",
     imgurl:"/suv2.png",
    specification:"80L",
    cartype:"Manual",
    person:"6 People",
    price:"$80.00/",
    days:"day",
    buttontext:"Rent Now"
  },
    { 
      id:3,
      name:"All New Terios",
    type:"SUV",
     imgurl:"/suv3.png",
    specification:"70L",
    cartype:"Manual",
    person:"2 People",
    price:"$74.00/",
    days:"day",
    buttontext:"Rent Now"
  },
  
  { 
    id:4,
    name:"CR  - V",
    type:"SUV",
     imgurl:"/suv4.png",
    specification:"80L",
    cartype:"Manual",
    person:"6 People",
    price:"$80.00/",
    days:"day",
    buttontext:"Rent Now"
  },
  
    { 
      id:5,
      name:"MG ZX Exclusice",
    type:"SUV",
     imgurl:"/suv5.png",
    specification:"90L",
    cartype:"Manual",
    person:"6 People",
    price:"$76.00/",
    days:"day",
    buttontext:"Rent Now"
  },
    {
      id:6,
      name:"New MG ZS",
    type:"SUV",
     imgurl:"/suv6.png",
    specification:"90L",
    cartype:"Manual",
    person:"6 People",
    price:"$80.00/",
    days:"day",
    buttontext:"Rent Now"
  },
  { 
    id:7,
    name:"MG ZX Exclusice",
    type:"SUV",
     imgurl:"/suv7.png",
    specification:"90L",
    cartype:"Manual",
    person:"6 People",
    price:"$76.00/",
    days:"day",
    buttontext:"Rent Now"
  },
  
  {
    id:8,
     name:"New MG ZS",
    type:"SUV",
     imgurl:"/suv8.png",
    specification:"90L",
    cartype:"Manual",
    person:"6 People",
    price:"$80.00/",
    days:"day",
    buttontext:"Rent Now"
  },
  
  ]

  return (
    <div>
     <div className='flex w-full  flex-col lg:flex-row items-center justify-center gap-6 mt-12'>
  {/* <!-- First Section --> */}
  <div className='h-[360px] rounded-[10px] relative bg-[#54A6FF] w-[100%] lg:w-[600px]'>  
    <div className='w-[90%] lg:w-[284px] space-y-4 text-white ml-4 lg:ml-8 pt-8 h-[160px]'>
      <h1 className='text-[24px] lg:text-[32px] font-semibold'>The Best Platform for Car Rental</h1>
      <p className='text-[14px] lg:text-[16px]'>Ease of doing a car rental safely and reliably. Of course at a low price.</p> 
      <button className='w-[120px] bg-[#3563E9] rounded-[4px] h-[44px] text-[16px] text-white'>Rental Car</button>
    </div>
    <div className='flex items-center justify-center'>
      <div className='flex w-[90%] sm:h-[200px] lg:w-[406px] h-[116px] absolute bottom-3 ml-0 sm:ml-0 lg:ml-20 items-center justify-center'>
        <img className='object-contain ' src="https://s3-alpha-sig.figma.com/img/2385/cc01/da9bb791587b8022c475d39822c50c17?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Od1UBAJf7E5O46664edEbxigGSpM3-JsBv04704PcK-9d~RrvEs6ppQdIFAuV5SO7DK4KdIOedl7rLfh~ZdB8p2H010WWUIxpXiNh9sQzC8FF~k9lq2soe-51CJOCWNOQ9uBXLpaV2LlgrPiSwu1sOYI0xh~8DBSlQU2flfi~ymjFBtsgzmBfOZ~JLvE2WnajtJi5we3G6HDB9TGun3wd~4ItGLCzi-d13QfTCKEnDG8TSJFZPpuhqdW7969joySadH-urF54-xyCZb73147LVY6vp7yqYicDPozXo-d2EmYfXV9MsNGO99O7z6K3K9ay3ZXZ4wiPTFv3OpE5E4otw__" alt="" />
      </div>
    </div>
  </div>

  {/* <!-- Second Section --> */}
  <div className='h-[360px] hidden lg:block rounded-[10px] relative bg-[#3563E9] w-[100%] lg:w-[600px]'>  
    <div className='w-[90%] lg:w-[284px] space-y-4 text-white ml-4 lg:ml-8 pt-8 h-[160px]'>
      <h1 className='text-[24px] lg:text-[32px] font-semibold'>The Best Platform for Car Rental</h1>
      <p className='text-[14px] lg:text-[16px]'>Ease of doing a car rental safely and reliably. Of course at a low price.</p> 
      <button className='w-[120px] bg-[#54A6FF] rounded-[4px] h-[44px] text-[16px] text-white'>Rental Car</button>
    </div>
    <div className='flex items-center justify-center'>
      <div className='flex w-[90%] ml-0 sm:ml-0 lg:ml-24 lg:w-[406px] sm:h-[200px] h-[116px] absolute bottom-5 items-center justify-center'>
        <img className='object-cover' src="https://s3-alpha-sig.figma.com/img/702f/356e/48fe531e6fd2626c5d1041dbfcde3341?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pqchb2LXG1CzJVi8REocxTFmgsniQaQk94twikFDvW6t8unY0uN2iDgogKE7OynrmQcTaYNIAx5gzKNwVosBBUk67rgYzDQoM~MF6xD~Q4FdJCThW4M9Jx5ivd8zn4ZhbCj1htJh0idZ4nfAHEhovLfAheB7Pzse-8b4sPa3zWL8gnyyGjO7I9oi438zN0Uowsd4br~oZbWBc~d6b94I0IrcmL3OABEejvj1qBBnPvFqVYMuYmR7XEEfzN~EiPGCbSgAvJQJKT8YUrjxu-Ac5KIA5ELqg7y44XdIxm2sy2j~xK35INzWCwGjLIfRoGy3hyxBMeyOALaz0FypwC6N2A__" alt="" />
      </div>
    </div>
  </div>
</div>

{/* <!-- Form Section --> */}
<div className='flex flex-col lg:flex-row items-center mt-10 justify-between'>
  {/* <!-- Pick-Up Section --> */}
  <div className='w-full lg:w-auto  bg-white rounded-[10px]'>
    <div className='flex gap-4 pl-4 lg:pl-12 w-full lg:w-[522px] h-[56px] items-center'>
      <div className='w-[14px] h-[14px] rounded-full bg-[#3563E9] border-[#AEC8FC] border-[2px]'></div>
      <p className='text-[16px] font-semibold'>Pick - Up</p>
    </div>
    <div className='flex flex-wrap gap-4 lg:gap-12 pl-4 lg:pl-12'>
      <div className=''>
        
        <p className='font-bold text-[16px]'>Location</p>
        <div className='flex justify-between items-center gap-12'>
        <div className='flex'>
          <p className='text-[#90A3BF]  lg:mt-0 text-[12px] mt-2'>Select Your City</p>
          <select name="Select Your City" className='bg-white' id=""></select>
        </div>
        <div className='flex'>
          <p className='text-[#90A3BF]  lg:mt-0 text-[12px] mt-2'>Select Your City</p>
          <select name="Select Your City" className='bg-white' id=""></select>
        </div>
        <div className='flex'>
          <p className='text-[#90A3BF]  lg:mt-0 text-[12px] mt-2'>Select Your City</p>
          <select name="Select Your City" className='bg-white' id=""></select>
        </div>
        </div>
      </div>
    </div>
  </div>

  {/* <!-- Arrow --> */}
  <div className='h-[136px] flex items-center'>
    <div className='h-[60px] w-[60px] flex items-center justify-center gap-1 text-white rounded-[4px] bg-[#3563E9]'>
      <i className="text-[18px] fa-solid fa-arrow-up"></i>
      <i className="text-[18px] rotate-[90deg] fa-solid fa-arrow-right"></i>
    </div>
  </div>

  {/* <!-- Drop-Off Section --> */}
  <div className='w-full lg:w-auto  bg-white rounded-[10px]'>
    <div className='flex gap-4 pl-4 lg:pl-12 w-full lg:w-[522px] h-[56px] items-center'>
      <div className='w-[14px] h-[14px] rounded-full bg-[#3563E9] border-[#AEC8FC] border-[2px]'></div>
      <p className='text-[16px] font-semibold'>Pick - Up</p>
    </div>
    <div className='flex flex-wrap gap-4 lg:gap-12 pl-4 lg:pl-12'>
      <div className=''>
        
        <p className='font-bold text-[16px]'>Location</p>
        <div className='flex justify-between items-center gap-12'>
        <div className='flex'>
          <p className='text-[#90A3BF]  lg:mt-0 text-[12px] mt-2'>Select Your City</p>
          <select name="Select Your City" className='bg-white' id=""></select>
        </div>
        <div className='flex'>
          <p className='text-[#90A3BF]  lg:mt-0 text-[12px] mt-2'>Select Your City</p>
          <select name="Select Your City" className='bg-white' id=""></select>
        </div>
        <div className='flex'>
          <p className='text-[#90A3BF]  lg:mt-0 text-[12px] mt-2'>Select Your City</p>
          <select name="Select Your City" className='bg-white' id=""></select>
        </div>
        </div>
      </div>
    </div>
  </div>
        </div>
      
    
  <div className='ml-4 mt-12' >
  <h1 className='text-[16px] font-[600] text-[#90A3BF]'>Popular Car</h1>
  </div>
  <div></div>
  {/* product section */}
{/* Product Section */}

<div className="flex flex-wrap justify-center gap-4 mt-5">
{data.map((d,index)=>(
  <div key={index}> 
    <div className="flex flex-col w-[304px] sm:w-[280px] md:w-[304px] lg:w-[290px] rounded-[10px] max-w-xs overflow-hidden border border-gray-100 bg-white shadow-md h-[368px] sm:h-[368px] md:h-[368px] lg:h-[368px]">
        {/* Header */}
        <div className="h-[48px] w-full flex items-center justify-center">
          <div className="flex justify-between items-center px-4 pt-4 w-full h-[48px]">
            <div className="flex flex-col">
              <p className="text-[16px] sm:text-[18px] md:text-[20px] font-[700] text-[#1A202C]">
                {d.name}
              </p>
              <p className="text-[10px] sm:text-[12px] md:text-[14px] font-[700] text-[#90A3BF] tracking-[-.2%]">
                {d.type}
              </p>
            </div>
            <i className="fa-solid fa-heart text-[#ED3F3F] bg-white p-2 rounded-full shadow-md"></i>
          </div>
        </div>
        {/* Image */}
        <div className="h-[200px] w-full flex items-center justify-center">
          <Image
            className="imge h-[200px] object-contain lg:object-contain w-[200px] sm:h-[230px] sm:w-[230px] md:h-[240px] md:w-[240px] lg:h-[208px] lg:w-[200px]"
            height={200}
            width={200}
            src={d.imgurl}
            alt="my pic"
          />
        </div>
        {/* Specifications */}
        <div className="h-[24px] w-full flex items-center justify-center">
          <div className="flex justify-between w-[256px] h-[24px]">
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-gas-pump text-[14px] sm:text-[16px] text-[#90A3BF]"></i>
              <p className="text-[12px] sm:text-[14px]">{d.specification}</p>
            </div>
            <div className="flex items-center gap-2">
              <img
                className="h-[18px] sm:h-[20px] w-[18px] sm:w-[20px]"
                src="/wheel.jpg"
                alt=""
              />
              <p className="text-[12px] sm:text-[14px]">{d.cartype}</p>
            </div>
            <div className="flex items-center gap-2">
              <img
                className="h-[18px] sm:h-[20px] w-[18px] sm:w-[20px]"
                src="/profile.jpg"
                alt=""
              />
              <p className="text-[12px] sm:text-[14px]">{d.person}</p>
            </div>
          </div>
        </div>
        {/* Pricing and Button */}
        <div className="w-full flex items-center justify-between">
          <div className="mt-4 w-full gap-12 justify-center flex font-sans h-[48px]">
            <a href="#">
              <h5 className="text-[16px] sm:text-[18px] md:text-[20px] font-[700] text-gray-900">
                {d.price}
                <span className="text-[10px] sm:text-[12px] md:text-[14px] font-[700] text-[#90A3BF]">
                  {d.days}
                </span>
              </h5>
              <p className="text-[10px] sm:text-[12px] md:text-[14px] font-[700] text-[#90A3BF]">
                $80.00
              </p>
            </a>
            <button className="w-[80px] sm:w-[100px] md:w-[116px] rounded-[4px] h-[36px] sm:h-[40px] md:h-[44px] bg-[#3563E9] text-[12px] sm:text-[14px] md:text-[16px] font-[600] tracking-[-2%] text-white">
              {d.buttontext}
            </button>
          </div>
        </div>
     </div>
     </div>
 ) )}
 <div className='w-full flex items-start'>
  <div className=' mt-12 flex items-start justify-start' >
  <h1 className='text-[16px] font-[600] text-[#90A3BF]'>Recommendation Car</h1>
  </div>
  </div>
  {/* product section */}
{/* Product Section */}
<div className="flex flex-wrap justify-evenly gap-4 mt-5">
  {data2.map((d, index) => (
    <div key={index}>
      <div className="flex flex-col w-[304px] sm:w-[280px] md:w-[304px] lg:w-[290px] rounded-[10px] max-w-xs overflow-hidden border border-gray-100 bg-white shadow-md h-[368px] sm:h-[368px] md:h-[368px] lg:h-[368px]">
        {/* Header */}
        <div className="h-[48px] w-full flex items-center justify-center">
          <div className="flex justify-between items-center px-4 pt-4 w-full h-[48px]">
            <div className="flex flex-col">
              <p className="text-[16px] sm:text-[18px] md:text-[20px] font-[700] text-[#1A202C]">
                {d.name}
              </p>
              <p className="text-[10px] sm:text-[12px] md:text-[14px] font-[700] text-[#90A3BF] tracking-[-.2%]">
                {d.type}
              </p>
            </div>
            <i className="fa-solid fa-heart text-[#ED3F3F] bg-white p-2 rounded-full shadow-md"></i>
          </div>
        </div>
        {/* Image */}
        <div className="h-[200px] w-full flex items-center justify-center">
          <Image
            className="imge h-[200px] w-[200px] sm:h-[230px] sm:w-[230px] md:h-[240px] md:w-[240px] object-contain lg:object-contain lg:h-[208px] lg:w-[200px]"
            height={400}
            width={400}
            src={d.imgurl}
            alt="my pic"
          />
        </div>
        {/* Specifications */}
        <div className="h-[24px] w-full flex items-center justify-center">
          <div className="flex justify-between w-[256px] h-[24px]">
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-gas-pump text-[14px] sm:text-[16px] text-[#90A3BF]"></i>
              <p className="text-[12px] sm:text-[14px]">{d.specification}</p>
            </div>
            <div className="flex items-center gap-2">
              <img
                className="h-[18px] sm:h-[20px] w-[18px] sm:w-[20px]"
                src="/wheel.jpg"
                alt=""
              />
              <p className="text-[12px] sm:text-[14px]">{d.cartype}</p>
            </div>
            <div className="flex items-center gap-2">
              <img
                className="h-[18px] sm:h-[20px] w-[18px] sm:w-[20px]"
                src="/profile.jpg"
                alt=""
              />
              <p className="text-[12px] sm:text-[14px]">{d.person}</p>
            </div>
          </div>
        </div>
        {/* Pricing and Button */}
        <div className="w-full flex items-center justify-between">
          <div className="mt-4 w-full gap-12 justify-center flex font-sans h-[48px]">
            <a href="#">
              <h5 className="text-[16px] sm:text-[18px] md:text-[20px] font-[700] text-gray-900">
                {d.price}
                <span className="text-[10px] sm:text-[12px] md:text-[14px] font-[700] text-[#90A3BF]">
                  {d.days}
                </span>
              </h5>
              <p className="text-[10px] sm:text-[12px] md:text-[14px] font-[700] text-[#90A3BF]">
                $80.00
              </p>
            </a>
            <button className="w-[80px] sm:w-[100px] md:w-[116px] rounded-[4px] h-[36px] sm:h-[40px] md:h-[44px] bg-[#3563E9] text-[12px] sm:text-[14px] md:text-[16px] font-[600] tracking-[-2%] text-white">
              {d.buttontext}
            </button>
          </div>
        </div>
      </div>
    </div>
  ))}
{/* 
        <div className="flex  w-full sm:w-auto h-[48px] bg-[#f5f5f5] relative">
          </div>
          <div className='h-[auto] w-full flex items-center justify-center'>
         <div className='w-[232px] h-[72px]'>
          <img
            className="object-cover lg:object-cover w-full sm:w-full h-auto   sm:pr-8 sm:pt-24"
            src={d.imgurl}
            alt="product image"
          />
          </div>
          </div>
          </div>
        <div>
        <div className="flex items-center gap-2 sm:gap-4 justify-center text-[10px] sm:text-[12px] md:text-[14px] font-[500] text-[#90a3bf] mt-2 sm:mt-0">
       
        </div>
          
        </div> */}

 



  {/* Product Card */}
 
  <div className='flex items-center mt-6 justify-center'><button className='text-white w-[156px] h-[44px] bg-[#3563E9] rounded-[4px]'>Show more car</button></div>
 
  </div>

  
  







</div>
</div>
)
}


export default Cards;