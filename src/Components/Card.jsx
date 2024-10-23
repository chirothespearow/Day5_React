import React from 'react'

function Card({name = "Placeholder",desc = "Lorem Ipsum",price = 999,qty = 0,color = "red" ,iSrc = "../Assets/img/g31.jpg"}) {
  return (
    <div>
        <table
        style ={{boxShadow : "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
            padding : "16px",
            textAlign : "center",
            backgroundColor : "#f1f1f1"
        }}>
        <tr>
            <img src={iSrc} />
        </tr>
          <tr>
        <th>Name :</th><th> {name}</th>
        </tr>
        <tr>
        <th>Description :</th><th> {desc}</th>
        </tr>
        <tr>
        <th>Price :</th><th> {price}</th>
        </tr>
        <tr>
        <th>Quantity :</th><th> {qty}</th>
        </tr>
        <tr>
        <th>Color :</th><th> {color}</th>
        </tr>
        </table>
    </div>
  )
}

export default Card