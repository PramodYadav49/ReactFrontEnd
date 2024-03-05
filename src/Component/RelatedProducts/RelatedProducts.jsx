import React from 'react'
import './RelatedProducts.css'
import data_product from '../Assets/data'
import IItem from '../IItems/IItem'
const RelatedProducts = (props) => {
    const {product}=props;
  return (
    <div className='relatedproducts'>
      <h1>Titled Products</h1>
      <hr />
      <div className="relatedproducts-item">
            {data_product.map((item,i)=>{
                
                    return <IItem  key={i}
                    id={item.id}
                    name={item.name}
                    image={item.image}
                    new_price={item.new_price}
                    old_price={item.old_price}></IItem>
                
               

            })}
      </div>
    </div>
  )
}

export default RelatedProducts
