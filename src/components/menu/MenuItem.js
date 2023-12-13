import React from 'react'

const MenuItem = () => {
  return (
    <div className='bg-gray-200 p-4 rounded-lg text-center hover:bg-white transition-all hover:shadow-xl hover:shadow-black/25'>
      <div className='text-center '>

        <img className='max-h-24 block mx-auto ' src="https://www.freeiconspng.com/uploads/pizza-png-15.png" alt='pizza' />
      </div>
      <h4 className='font-semibold my-2 text-xl'>Pepperoni Pizza</h4>
      <p className='text-gray-500 text-sm '>
        ndncsdkcn sdcds cs dcdc sc s f sdc  f fsfscdcsdc sdc sdc sc s cssadasdada dasdas dasd asd asd asd as dad
      </p>
      <button className='bg-primary text-white rounded-full py-2 px-8'>Add to cart $12</button>
    </div>
  )
}

export default MenuItem