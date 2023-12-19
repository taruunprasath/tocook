import React, { useEffect, useState } from 'react';
import Trend from './Trend';
import { useParams } from 'react-router-dom';
import Youtube from './Youtube';

const RecipeId = () => {
  const { idMeal } = useParams();

  const [data, setData] = useState([]);
  const [active, setActive] = useState('ingredient');

  useEffect(() => {
    const fetchData = async () => {
      const api = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
      const data = await api.json();

      setData(data.meals[0]);
    };

    fetchData();
  }, [idMeal]);

  const ingredients = [
    { name: data.strIngredient1, measure: data.strMeasure1 },
    { name: data.strIngredient2, measure: data.strMeasure2 },
    { name: data.strIngredient3, measure: data.strMeasure3 },
    { name: data.strIngredient4, measure: data.strMeasure4 },
    { name: data.strIngredient5, measure: data.strMeasure5 },
    { name: data.strIngredient6, measure: data.strMeasure6 },
    // Add more ingredients as needed
  ];
   
  return (
    <>
      <div
        style={{
          width: '90%',
          margin: 'auto',
          textAlign: 'center',
          color: 'black',
        }}
      >
        <h1>{data.strMeal}</h1>
        <div
          style={{
            display: 'flex',
            color: 'black',
          }}
        >
          <div className="img" style={{ width: '30%', marginTop: '2rem' }}>
            <img src={data.strMealThumb} alt="" style={{ width: '18rem' }} />
          </div>

          <div className="content" style={{ width: '60%' }}>
            <button className="btn" onClick={() => setActive('ingredient')}>
              Ingredient
            </button>
            <button className="btn" onClick={() => setActive('instruction')}>
              Instruction
            </button>

            {active === 'ingredient' ? (
              <div>
                {ingredients.map((ingredient, index) => (
                  <div
                    key={index}
                    style={{ fontSize: '1.5rem', fontWeight: 'bold' }}
                  >
                    {ingredient.name} - {ingredient.measure}
                  </div>
                ))}
              </div>
            ) : (
              <div className="instruction">
                <p>{data.strInstructions}</p>
              </div>
            )}

            <Youtube videoUrl={data.strYoutube} />
          </div>
        </div>
      </div>
      <div style={{ marginTop: '1rem' }}>
        <Trend />
      </div>
    </>
  );
};

export default RecipeId;
