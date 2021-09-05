import React from "react";
import Card from "./Card";

function Cards() {
    const productsStore = [
        {
        title: 'Bộ sạc',
        id: '1',
        products: [
            {   
                id: 'charge-1',
                name: 'Bộ sạc dành cho Iphone 12 PD 20W Guxi C06 - Hàng chính hãng',
                imgUrl: '',
                link: ''
            }
        ]
    },
    {
        title: 'Tai nghe',
        id: '2',
        products: [
            {   
                id: 'earphone-1',
                name: 'Tai nghe Guxi N67 - Hàng chính hãng',
                imgUrl: '',
                link: ''
            },
            {
                id: 'earphone-2',
                name: 'Tai nghe Guxi N68 - Hàng chính hãng',
                imgUrl: '',
                link: ''
            },
            {
                id: 'earphone-3',
                name: 'Tai nghe Guxi N69 - Hàng chính hãng',
                imgUrl: '',
                link: ''
            }
        ]
    }
]
  return (
    <div className="section flex">
      {productsStore!==null&& productsStore.map(store=>(

          store.products.map(product=>{
              return <Card key={product.id} name={product.name} imgUrl ={product.imgUrl} linkShopee={product.link} />
            })
            )
      )}
    </div>
  );
}

export default Cards;
