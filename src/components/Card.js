import React from "react";


function Card(props) {
    const {name, imgUrl, linkShopee,price} = props;
    
    console.group(props);
  return (
    <div
      className="container product flex   flex-ai-c m-3"
      style={{maxWidth: "327px"}}
    >
      <figure
       
       className="image product__descript--img ml-3"
     >
       <img
         style={{ borderRadius: "15px", height: "155px", border: "1px solid #ededed",
         width: "155px"}}
         src={imgUrl}
         alt="FF-PUBG"
       />
     </figure>
      <div className="product__descript flex flex-ai-c flex-jc-sa flex-dr-c ml-2" style={{width:"50%",height:"100%"}}>

     <div className="product--text">
       <p className="is-size-7 has-text-weight-medium mr-2 my-1">
         {name}
       </p>
       <p className="is-size-7">{price}</p>
     </div>

     <a className="button is-small is-danger buy-btn" href={linkShopee} target="_blank">Mua ngay</a>
      </div>
    </div>
  );
}

export default Card;
