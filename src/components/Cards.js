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
                imgUrl: '../dist/img/earphone/tai_nghe_guxi_sp_n69.png',
                link: '',
                price: '120.000đ'
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
                imgUrl: 'https://cf.shopee.vn/file/6746623c2a2984518abe99fc7d6d1993',
                link: 'https://shopee.vn/product/179381431/8871154244/',
                price: '50.000đ'
            },
            {
                id: 'earphone-2',
                name: 'Tai nghe Guxi N68 - Hàng chính hãng',
                imgUrl: 'https://cf.shopee.vn/file/3a9f37442f2619da57d4584723bcc292',
                link: 'https://shopee.vn/product/179381431/9057879245/',
                price: '50.000đ'
            },
            {
                id: 'earphone-3',
                name: 'Tai nghe Guxi N69 - Hàng chính hãng',
                imgUrl: 'https://cf.shopee.vn/file/32c45e99184f69bdc8533f446bd2a0b5',
                link: 'https://shopee.vn/product/179381431/2947390626/',
                price: '50.000đ'
            }
        ]
    }
]
  return (
    <div className="section flex">
      {productsStore!==null&& productsStore.map(store=>(

          store.products.map(product=>{
              return <Card key={product.id} name={product.name} imgUrl ={product.imgUrl} linkShopee={product.link} price = {
                  product.price
              } />
            })
            )
      )}
    </div>
  );
}

export default Cards;
