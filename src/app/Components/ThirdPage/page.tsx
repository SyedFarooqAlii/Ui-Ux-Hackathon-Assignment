import React from 'react'
import Image from 'next/image'
const ThirdPage = () => {

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
<div className='font-sans flex mt-20 '>

{/* first */}
<div className="w-[360px] bg-white rounded pl-4 space-y-4 tracking-[-2%] hidden lg:block">
<p className='text-[12px] font-[600] text-[#90A3BF] tracking-wider'>T Y P E</p>
    <div className='flex items-center gap-4 '>
    
<div className='h-[22px] flex items-center justify-center rounded-[6px] w-[22px] text-[12px] bg-[#3563E9] text-white'>
<i className="fa-solid fa-check"></i></div>
    <div className='flex'><p className='text-[20px] font-[600] text-[#596780]'>Sport <span className='text-[#90A3BF]'> (10)</span></p></div>

    </div>
    <div className='flex items-center gap-4 '>
<div className='h-[22px] flex items-center justify-center rounded-[6px] w-[22px] text-[12px] bg-[#3563E9] text-white'>
<i className="fa-solid fa-check"></i></div>
    <div className='flex'><p className='text-[20px] font-[600] text-[#596780]'>SUV   <span className='text-[#90A3BF]'> (12)</span></p></div>

    </div>
    <div className='flex items-center gap-4 '>
<div className='h-[22px] flex items-center justify-center rounded-[6px] w-[22px] text-[12px] border-black border-[1px] text-white'>
<i className="fa-solid fa-check"></i></div>
    <div className='flex'><p className='text-[20px] font-[600] text-[#596780]'>MPV   <span className='text-[#90A3BF]'> (16)</span></p></div>

    </div>
    <div className='flex items-center gap-4 '>
<div className='h-[22px] flex items-center justify-center rounded-[6px] w-[22px] text-[12px] border-black border-[1px] text-white'>
<i className="fa-solid fa-check"></i></div>
    <div className='flex'><p className='text-[20px] font-[600] text-[#596780]'>Sedan  <span className='text-[#90A3BF]'> (20)</span></p></div>

    </div>
    <div className='flex items-center gap-4 '>
<div className='h-[22px] flex items-center justify-center rounded-[6px] w-[22px] text-[12px] border-black border-[1px] text-white'>
<i className="fa-solid fa-check"></i></div>
    <div className='flex'><p className='text-[20px] font-[600] text-[#596780]'>Coupe  <span className='text-[#90A3BF]'> (14)</span></p></div>

    </div>
    <div className='flex items-center gap-4 '>
<div className='h-[22px] flex items-center justify-center rounded-[6px] w-[22px] text-[12px] border-black border-[1px] text-white'>
<i className="fa-solid fa-check"></i></div>
    <div className='flex'><p className='text-[20px] font-[600] text-[#596780]'>Hatchback   <span className='text-[#90A3BF]'> (14)</span></p></div>

    </div>
{/*  */}
    <div className='h-[240px] pt-10  space-y-6'>
      <p className='text-[12px] font-[600] text-[#90A3BF] tracking-wider'>C A P A C I T Y</p>
      <div className='flex items-center gap-4 '>
<div className='h-[22px] flex items-center justify-center rounded-[6px] w-[22px] text-[12px]  bg-[#3563E9] text-white'>
<i className="fa-solid fa-check"></i></div>
    <div className='flex'><p className='text-[20px] font-[600] text-[#596780]'>MPV   <span className='text-[#90A3BF]'> (16)</span></p></div>

    </div>
    <div className='flex items-center gap-4 '>
<div className='h-[22px] flex items-center justify-center rounded-[6px] w-[22px] text-[12px] border-black border-[1px] text-white'>
<i className="fa-solid fa-check"></i></div>
    <div className='flex'><p className='text-[20px] font-[600] text-[#596780]'>Sedan  <span className='text-[#90A3BF]'> (20)</span></p></div>

    </div>
    <div className='flex items-center gap-4 '>
<div className='h-[22px] flex items-center justify-center rounded-[6px] w-[22px] text-[12px] border-black border-[1px] text-white'>
<i className="fa-solid fa-check"></i></div>
    <div className='flex'><p className='text-[20px] font-[600] text-[#596780]'>Coupe  <span className='text-[#90A3BF]'> (14)</span></p></div>

    </div>
    <div className='flex items-center gap-4 '>
<div className='h-[22px] flex items-center justify-center rounded-[6px] w-[22px] text-[12px] bg-[#3563E9] text-white'>
<i className="fa-solid fa-check"></i></div>
    <div className='flex'><p className='text-[20px] font-[600] text-[#596780]'>Hatchback   <span className='text-[#90A3BF]'> (14)</span></p></div>

   </div>
    </div>

    {/* third */}
    <div className='w-[296px] h-[101px] pt-12 space-y-4'>
    <p className='text-[12px] font-[600] text-[#90A3BF] tracking-wider'>C A P A C I T Y</p>
    <div className='h-[20px]'>
      <img className='' src="/line.jpg" alt="" />
    </div>
    <p className='text-[20px] font-[600] text-[#596780]'>Max. $100.00</p>
    </div>
</div>





<div className="flex flex-col w-full mx-2 max-w-[900px] ">
<div className="flex flex-col w-full lg:w-[900px]">
  {/* Third Page */}
  <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
    {/* First Section */}
    <div>
      <div className="w-full lg:w-[442px] h-auto lg:h-[360px] rounded-[8px] pl-4 pt-8 bg-[#3563E9]">
        <div className="h-auto lg:h-[160px] space-y-4 w-full lg:w-[372px] text-[#fafafa]">
          <p className="text-[24px] lg:text-[32px] font-[600]">
            Sports car with the best design and acceleration
          </p>
          <p className="text-[14px] lg:text-[16px] font-[500]">
            futuristic and elegant sports car
          </p>
          <div className="flex w-full lg:w-[412px] items-center justify-center">
            <img
              className="w-full lg:w-[380px] h-[130px] object-cover"
              src="https://s3-alpha-sig.figma.com/img/702f/356e/48fe531e6fd2626c5d1041dbfcde3341?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pqchb2LXG1CzJVi8REocxTFmgsniQaQk94twikFDvW6t8unY0uN2iDgogKE7OynrmQcTaYNIAx5gzKNwVosBBUk67rgYzDQoM~MF6xD~Q4FdJCThW4M9Jx5ivd8zn4ZhbCj1htJh0idZ4nfAHEhovLfAheB7Pzse-8b4sPa3zWL8gnyyGjO7I9oi438zN0Uowsd4br~oZbWBc~d6b94I0IrcmL3OABEejvj1qBBnPvFqVYMuYmR7XEEfzN~EiPGCbSgAvJQJKT8YUrjxu-Ac5KIA5ELqg7y44XdIxm2sy2j~xK35INzWCwGjLIfRoGy3hyxBMeyOALaz0FypwC6N2A__"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between mt-4 gap-4">
        
          <img
            className="bg-[#3563E9] hidden lg:block rounded-[8px] h-[124px]  w-[132px]"
            src="https://s3-alpha-sig.figma.com/img/702f/356e/48fe531e6fd2626c5d1041dbfcde3341?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pqchb2LXG1CzJVi8REocxTFmgsniQaQk94twikFDvW6t8unY0uN2iDgogKE7OynrmQcTaYNIAx5gzKNwVosBBUk67rgYzDQoM~MF6xD~Q4FdJCThW4M9Jx5ivd8zn4ZhbCj1htJh0idZ4nfAHEhovLfAheB7Pzse-8b4sPa3zWL8gnyyGjO7I9oi438zN0Uowsd4br~oZbWBc~d6b94I0IrcmL3OABEejvj1qBBnPvFqVYMuYmR7XEEfzN~EiPGCbSgAvJQJKT8YUrjxu-Ac5KIA5ELqg7y44XdIxm2sy2j~xK35INzWCwGjLIfRoGy3hyxBMeyOALaz0FypwC6N2A__"
            alt=""
          />
        
        <img
          className="object-cover  h-[124px] rounded-[8px] w-[132px] sm:w-[120px] lg:w-[132px]"
          src="https://s3-alpha-sig.figma.com/img/2a70/cf86/a73f1fdfda8a78629de1874016c972fe?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pVlkG3RXaI1dcRUKsPDpEFlvMHWfe39hpk11xzvvnRGSmTuJ-ML02qCRIPotR5PgyqKdlfUOGAZZoZiKFHbEPilUIrMrvmTJr0LJkwMhen5ZvT5A0nZktG4i6qcLv6feyzegVY73t~VuqOJi1eFr9IcQ46KsNYsa8vfWQVGngbDUJnzxPBdcmrVoBuYLrGpmBPgnySztpNargYCxKY6b3uPakzFvayzT3IJxlTv8xWnScJXfcaWKE81daVm7E8KJoPWBwdcUK7NZSIKQH0Y1ByxGAPC-2-nYzXpFJppjfBIDpOcDstNSY2cYd-f~mf1vGxc3Kr~7iM7UjqWYGmVx0w__"
          alt=""
        />
        <img
          className="object-cover  h-[124px] rounded-[8px] w-[132px] sm:w-[120px] lg:w-[132px]"
          src="https://s3-alpha-sig.figma.com/img/b79c/e842/46da5a33b100b5e944d576a984fba3e1?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TEGTevLeBD6ECtx38EaiwkMZVUVVBCFLybyf3mwya4GRYb6zKfkrwWMU5C32dYm9i3nUpbnSYvxD0V1y0-hvn7MC37DhymhKR7zYrr24o26VMt8OJghxXqlwK22QiuMnU8xFaFazgiMEO3gw6Qk-Ss3iF5IdpRgzJO7ZKmGwEeAELWcK9YMvWsA736vz2aNcPyI6Onagx4lWBL352fGriZJ2lnfHJY-09p1iWO0hO0~rklwGjjfAZLd5kHFcPKgamyAcAWbZty~7RhY6gGP9DwPyERgTCKNzL0~uwW0yoqa5I7KwIbeok8idr7OlbyxOr1PdgblSoLmZRY~TSNhGZw__"
          alt=""
        />
      </div>
    </div>

    {/* Second Section */}
    <div className="w-full sm:w-[100%] rounded-[8px] bg-[#ffffff] lg:w-[428px]  h-[420px] lg:h-[500px]">
      <div className="h-auto w-full mt-8 ">
        <div className="flex  items-center justify-between w-full">
          <p className="text-[24px] pl-2 lg:pl-2 lg:text-[32px] font-[700] text-[#1A202C]">Nissan GT - R</p>
          <i className="fa-solid fa-heart text-[#ED3F3F] bg-white p-2 rounded-full  pr-2 shadow-md"></i>
        </div>
        <div className="flex space-x-1.5 pl-2 lg:pl-2">
          <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
          </svg>
          <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13">
            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
          </svg>
          <p className="text-base text-[14px]  text-[#596780] !ml-2">440+ Reviewer</p>
            </div>
  <div className='h-[120px] mt-6  '> <p className='text-[19px] text-[#596780]
  font-[400] leading-[40px] pl-2 lg:pl-2'>NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the "race track".</p></div>
  <div className='h-[72px] lg:mt-0 mx-2 sm:pt-16'>
    <div className='hidden  lg:block   items-center justify-between'>
      <div className='flex justify-between'><p className='text-[20px] font-[400] text-[#90A3BF]'>Type Car</p> <p className='text-[20px] font-[600] text-[#596780]'>Sport</p> <p className='text-[20px] font-[400] text-[#90A3BF]'>Capacity</p> <p className='text-[20px] font-[600] text-[#596780]'>2 Person</p>
      </div></div>
  
  <div className='h-[72px]   mt-2'>
    <div className=' hidden lg:block items-center justify-between'>
      <div className='flex justify-between'><p className='text-[20px] font-[400] text-[#90A3BF]'>Steering </p> <p className='text-[20px] font-[600] text-[#596780]'>Manual </p> <p className='text-[20px] font-[400] text-[#90A3BF]'>Gasoline </p> <p className='text-[20px] font-[600] text-[#596780]'>70L</p>
      </div>
      </div>
    </div>
    <div className="mt-4 px-1 pb-3 flex font-sans  justify-between gap-6 h-[70px]">
    <a href="#">
      <h5 className="text-[20px] font-[700]  text-gray-900">$72.00/ <span className='text-[14px] font-[700] text-[#90A3BF]'>day</span>
      </h5>
      <p className='text-[14px] font-[700] text-[#90A3BF]'>$80.00</p>
    </a>
    <button className='w-[116px] rounded-[4px] h-[44px] bg-[#3563E9] text-[16px] font-[600] tracking-[-2%] text-[white]'>Rent Now</button>
  </div>
 
          {/* <!-- Similar svg rest --> */}
          </div>
          </div>
          </div>
          </div>
    <div className="lg:mt-16 mt-12 sm:md:mt-36">
  <div className="bg-white py-6 rounded-lg shadow-md max-w-[100%] lg:max-w-[880px] mx-auto">
    {/* <!-- Reviews Header --> */}
    <div className="flex items-center gap-4 mb-4 px-4">
      <h2 className="text-lg font-semibold text-gray-800">Reviews</h2>
      <span className="bg-blue-600 text-white text-sm font-medium px-4 py-1 rounded-[4px]">13</span>
    </div>
    {/* <!-- Review 1 --> */}
    <div className="border-b border-gray-200 pb-4 mb-4 px-4">
      <div className="flex items-center mb-2">
        <img
          src="https://s3-alpha-sig.figma.com/img/9b76/706a/6ff04d2c5ee05f69f07eda85ba8c1846?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O9FcYE6jxntrej7d5ZVZQ6KlKHlVns784wN9Cdf8rOk9QGsVAeL14gPv5e704yfyxKW1jOW6lQ4crYA2oh9MVtxUzlyNuXe3zcBfnEO9Giiqgvy4maL6uo-W9AnQsC7mHu3svZZme9Tgk0uHJgPkcdKQbiKJEv5zbV0jBdIVQtbedaVEPPMYhsoWquLN~aRkqp4qKQq4T597vYV3brDHU-kxtkvthOrtneC67V9qRF1zYpxsjPXx1E~-1LqNToOIQuXJg6k6X4215V70taRWEMzPKQ-NG8nKOaBdJ8JrKFO8kS4e2f6vt9wgaYMNZXuBDuHI5IG0xeaf~lTmQyql7g__"
          alt="User Image"
          className="w-10 h-10 rounded-full"
        />
        <div>
          <h3 className="text-sm font-bold text-gray-800">Alex Stanton</h3>
          <p className="text-xs text-gray-500">CEO at Bukalapak</p>
        </div>
        <div className="ml-auto text-sm text-gray-500 text-right">
          21 July 2022
          <div className="flex space-x-1 justify-end">
            <span className="text-yellow-500">&#9733;</span>
            <span className="text-yellow-500">&#9733;</span>
            <span className="text-yellow-500">&#9733;</span>
            <span className="text-yellow-500">&#9733;</span>
            <span className="text-gray-300">&#9733;</span>
          </div>
        </div>
      </div>
      <p className="text-gray-700 text-sm mb-2">
        We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars
        with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.
      </p>
    </div>
    {/* <!-- Review 2 --> */}
    <div className="border-b border-gray-200 pb-4 mb-4 px-4">
      <div className="flex items-center mb-2">
        <img
          src="https://s3-alpha-sig.figma.com/img/1f59/2390/d69545d7cf9ff5be12e2248ebf54993a?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A2-pOsylgtqrPjE2eCBKljJAe90UADh29h-4hELjzPP5E-vNNa6qrQG9nQQPXzRigcSEhD4PR9GMsni3m9xj56ci8wX~m69RYNzjoqu~AXUZA3W0P2Lh7mCCBxuxwlT7F11wPZvfWRu3TEzWD8upwwb9-wgKek-5HN0zmQe4Z8dfWo5Ml1uc4fhaC7JVToHjiDFAQ6-B3lkpHKIzPpozyKdmNinbQcB56MUHU~VtkrGo1mG4GYuK1upucdgMzLivkD9wFToihYv0MT4DiWOcy7T7DUol5rJ~639Tz0aA3ycBtbOEhlidMvfZwTZ4Zl4f5uHFKtkoo~FZmCpwHvpvUw__"
          alt="User Image"
          className="w-10 h-10 rounded-full"
        />
        <div>
          <h3 className="text-sm font-bold text-gray-800">Skylar Dias</h3>
          <p className="text-xs text-gray-500">CEO at Amazon</p>
        </div>
        <div className="ml-auto text-sm text-gray-500 text-right">
          20 July 2022
          <div className="flex space-x-1 justify-end">
            <span className="text-yellow-500">&#9733;</span>
            <span className="text-yellow-500">&#9733;</span>
            <span className="text-yellow-500">&#9733;</span>
            <span className="text-yellow-500">&#9733;</span>
            <span className="text-gray-300">&#9733;</span>
          </div>
        </div>
      </div>
      <p className="text-gray-700 text-sm mb-2">
        We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars
        with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.
      </p>
    </div>
  

  {/* <!-- Show All Button --> */}
  <div className="text-center">
    <button className="text-blue-600 hover:text-blue-800 font-semibold text-sm">Show All</button>
  </div>
</div>

</div>


</div>


  </div>
  </div>
  <div className='w-full flex items-start'>
  <div className=' mt-12 flex w-full items-start ' >
    <div className='flex w-full justify-between'>
  <h1 className='text-[16px] font-[600] text-[#90A3BF]'>Recent Car</h1>
  <button className='text-[16px] font-[600] text-[#3563E9]'>View All</button>
  </div>
  </div>
  </div>
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



    </div>
    </div>
    </div>
    
  )
}

export default ThirdPage