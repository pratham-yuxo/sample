import React from 'react'
import PropTypes from 'prop-types';

const Card = ({name,referenceNumber,totalItems,totalWeight,status}) => {
  return (
    <div className='flex flex-col gap-7  border-red-600 border w-72 rounded-md px-4 py-5 relative' >
        {/* item name and reference number */}
        <div className='flex flex-col gap-2 justify-center items-center'>
            <h2 className='font-extrabold text-xl'>
                {name}
            </h2>
            <div>
                Ref: <span className='font-extrabold text-xl'>{referenceNumber}</span>
            </div>
        </div>
        {/* item name sectin ends */}
        {/* dimension and status of items */}
        <div className='flex flex-col justify-center text-xs pb-4'>
            <div>
                Total items: <span className='font-extrabold text-xl'>{totalItems}</span>
            </div>
            <div>
                Total weight: <span className='font-extrabold  text-xl'>{totalWeight}</span>
            </div>
            <div>
                Status: <span className='font-extrabold text-red-600 text-xl'>{status}</span>
            </div>
        </div>
        {/* dimension section ends */}
        {/* update dimension button */}
        <div className='absolute bottom-9 right-[-10px] rounded-lg  bg-red-500 p-2'>
            <button className='w-24 text-white font-semibold'>
                Update Dimension
            </button>
        </div>
    </div>
  )
}

Card.propTypes = {
    name: PropTypes.string.isRequired,
    referenceNumber: PropTypes.string.isRequired,
    totalItems: PropTypes.number.isRequired,
    totalWeight: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  };
  
export default Card