import React from 'react';

function OfferCard(props) {
    const product = props.product
    console.log(product)
    return (
        <div className='flex flex-col gap-3'>
        <img className='rounded-xl w-full sm:w-64 md:w-80 lg:w-96 h-auto object-contain' src= {product.image} alt="" />
       <a href= {'/products/'+product.id}><h2>
            {
                product.title
            }
        </h2></a> 
        <div>
        <span className='font-bold bg-orange-200 rounded-lg p-1 text-orange-600'> {product.offer} </span>

        </div>
        </div>
      
    );
}

export default OfferCard;