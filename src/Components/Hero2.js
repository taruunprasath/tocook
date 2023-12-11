import React from 'react'
import food from '../Assets/food.png';
import './Hero.css'

const Hero2 = () => {
  return (
    <div>
    <div className='food_recipe'>
        <h1 className='text'>Good Food Good Life</h1>
        <h2 className='text'>Experience the taste</h2>
      </div>
      <div className='first_cont'>
        <div className='first_text'>
            <h1 className='text'>Why you choose us?</h1>
            <h3 className='text'>Choosing our recipe app offers convenience, organization, and inspiration. It simplifies meal planning, provides easy access to recipes from various devices, and often includes features like shopping lists and nutritional information, making cooking enjoyable and efficient.</h3>
        
        <div className='image_1'>
            <img src={food} alt=''/>
        </div>
        </div>

      </div>
      </div>
  )
}

export default Hero2
