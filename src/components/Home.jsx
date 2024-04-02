import React from 'react'
import Card from './Card'
const cardsData = [
    { name: 'Crockery House', referenceNumber: "IBC's", totalWeight: '85', totalItems: 7, status: 'Pending' },
    { name: 'Crockery House', referenceNumber: "IBC's", totalWeight: '85', totalItems: 7, status: 'Pending' },
    { name: 'Crockery House', referenceNumber: "IBC's", totalWeight: '85', totalItems: 7, status: 'Pending' },
    { name: 'Crockery House', referenceNumber: "IBC's", totalWeight: '85', totalItems: 7, status: 'Pending' },
    { name: 'Crockery House', referenceNumber: "IBC's", totalWeight: '85', totalItems: 7, status: 'Pending' },
    // Add more data as needed
  ];

const Home = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='flex flex-wrap gap-6 lg:gap-8 bg-white text-black p-4 lg:p-6'>
        {/* rendering all the cards */}

          {cardsData.map((card, index) => (
            <Card
            key={index} 
            name={card.name}
            referenceNumber={card.referenceNumber} 
            totalWeight={card.totalWeight} 
            totalItems={card.totalItems} 
            status={card.status} 
            />
            ))}
      </div>
    </div>
  )
}

export default Home