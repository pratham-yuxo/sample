import React from 'react'
import Card from './Card'
const cardsData = [
    { name: 'Crockerys House', referenceNumber: 'IBC', totalWeight: '85', totalItems: 7, status: 'Pending' },
    { name: 'Crockerys House', referenceNumber: 'IBC', totalWeight: '85', totalItems: 7, status: 'Pending' },
    { name: 'Crockerys House', referenceNumber: 'IBC', totalWeight: '85', totalItems: 7, status: 'Pending' },
    { name: 'Crockerys House', referenceNumber: 'IBC', totalWeight: '85', totalItems: 7, status: 'Pending' },
    { name: 'Crockerys House', referenceNumber: 'IBC', totalWeight: '85', totalItems: 7, status: 'Pending' },
    // Add more data as needed
  ];

const Home = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='flex flex-wrap gap-6 lg:gap-10 bg-white text-black p-4 lg:p-24'>
        {/* rendering all the cards */}

          {cardsData.map((card, index) => (
            <Card
            key={index} // Always provide a unique key when rendering a list of components
            name={card.name} // Pass name as a prop
            referenceNumber={card.referenceNumber} // Pass referenceNumber as a prop
            totalWeight={card.totalWeight} // Pass totalWeight as a prop
            totalItems={card.totalItems} // Pass totalItems as a prop
            status={card.status} // Pass status as a prop
            />
            ))}
      </div>
    </div>
  )
}

export default Home