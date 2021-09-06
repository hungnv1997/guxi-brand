import React from "react";
import Card from "./Card";

function Cards() {
  const productsStore = [
    {
      title: "Bộ sạc",
      id: "1",
      products: [
        {
          id: "charge-1",
          name: "Bộ sạc dành cho Iphone 12 PD 20W Guxi C06 - Hàng chính hãng",
          imgUrl: "https://cf.shopee.vn/file/9566afb77e23bf9cb233e06e8c32c0fa",
          link: "https://shp.ee/gw32th3",
          price: "120.000đ",
        },
        {
            id: "charge-2",
            name: "Củ sạc nhanh 2.5A Guxi C11 - Hàng chính hãng",
            imgUrl: "https://cf.shopee.vn/file/673a73916b058b7a63250107401a78b4",
            link: "https://shp.ee/vbhpkc3",
            price: "78000đ",
          },
          
      ],
    },
    {
      title: "Tai nghe",
      id: "2",
      products: [
        {
          id: "earphone-1",
          name: "Tai nghe Guxi N67 - Hàng chính hãng",
          imgUrl: "https://cf.shopee.vn/file/6746623c2a2984518abe99fc7d6d1993",
          link: "https://shp.ee/5qxbfa3",
          price: "50.000đ",
        },
        {
          id: "earphone-2",
          name: "Tai nghe Guxi N68 - Hàng chính hãng",
          imgUrl: "https://cf.shopee.vn/file/3a9f37442f2619da57d4584723bcc292",
          link: "https://shp.ee/uatmfm3",
          price: "50.000đ",
        },
        {
          id: "earphone-3",
          name: "Tai nghe Guxi N69 - Hàng chính hãng",
          imgUrl: "https://cf.shopee.vn/file/32c45e99184f69bdc8533f446bd2a0b5",
          link: "https://shp.ee/biidu53",
          price: "50.000đ",
        },
      ],
    },
    // 
    {
        title: "Phụ kiện game",
        id: "3",
        products: [
          {
            id: "game-1",
            name: "Nút bấm cơ chơi ff Guxi R01 - Hàng chính hãng",
            imgUrl: "https://cf.shopee.vn/file/7c873a25a5adf8bfc4b2ea2e06bc63a0",
            link: "https://shp.ee/kwpkzah",
            price: "50.000đ",
          },//https://shp.ee/3yhbui3
          {
            id: "game-2",
            name: "Găng tay chơi game R01 - Hàng chính hãng",
            imgUrl: "https://cf.shopee.vn/file/5cc1a22cabcef887cfeaa233689ac300",
            link: "https://shp.ee/3yhbui3",
            price: "10.000đ",
          },
          {
            id: "game-3",
            name: "Tản nhiệt sò lạnh F11 - Hàng chính hãng",
            imgUrl: "https://cf.shopee.vn/file/294e3b53e2a63134f2bb24061096d5a8",
            link: "https://shp.ee/fmdwg53",
            price: "225.000đ",
          }
        ],
      },
  ];
  return (
    <div className="section flex flex-jc-c flex-ai-c">
      {productsStore !== null &&
        productsStore.map((store) =>
          store.products.map((product) => {
            return (
              <Card
                key={product.id}
                name={product.name}
                imgUrl={product.imgUrl}
                linkShopee={product.link}
                price={product.price}
              />
            );
          })
        )}
    </div>
  );
}

export default Cards;
