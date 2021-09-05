import React from "react";

function Card() {
  return (
    <div
      className="container product flex   flex-ai-c"
      
    >
      <figure
       
       className="image product__descript--img ml-3"
     >
       <img
         style={{ borderRadius: "15px", height: "155px",
         width: "155px"}}
         src="https://bulma.io/images/placeholders/256x256.png"
         alt="FF-PUBG"
       />
     </figure>
      <div className="product__descript flex flex-ai-c flex-jc-sa flex-dr-c ml-2" style={{width:"50%",height:"100%"}}>

     <div className="product--text">
       <p className="is-size-7 has-text-weight-medium mt-1 mb-1">
         Nút bấm chơi game PUBG, FF - Hàng chính hãng
       </p>
       <p className="is-size-7">50.000đ</p>
     </div>

     <button className="button is-small is-danger buy-btn">Mua ngay</button>
      </div>
    </div>
  );
}

export default Card;
