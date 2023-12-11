import React from 'react';
import {Link} from 'react-router-dom';


const Recipe = () => {
  return (
    <><div>
    <Link to={`/category/indian`} className="link">
                        <div>Indian</div>
                    </Link>
                    <Link to={`/category/american`} className="link">
                        <div>American</div>
                    </Link>
                    <Link to={`/category/british`} className="link" >
                        <div>British</div>
                    </Link>
                    <Link to={`/category/chinese`} className="link">
                        <div>Chinese</div>
                    </Link>
                    <Link to={`/category/thai`} className="link">
                        <div>Thai</div>
                    </Link>
                    </div>
    </>
  )
}

export default Recipe
