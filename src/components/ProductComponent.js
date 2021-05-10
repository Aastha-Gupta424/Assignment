import React, { useEffect, useState } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import Like from "./Like.png";
import RedLike from "./RedLike.png";
const axios = require('axios');

export default function Products() {
  const [products, setProducts] = useState(undefined);
  const [isProductsFetched, setProductFetched] = useState(false);
  useEffect(() => {
    if (!isProductsFetched) {
      axios.get(`https://608f88210294cd001765e8bc.mockapi.io/jewellery`)
        .then(({ data }) => {
          const productData = data.payload;
          setProducts(productData);
          setProductFetched(true);

        });
    }

  })
  return (
    <>
      {isProductsFetched &&
        products.map((prop, index) => (
          <div>
            {index % 2 === 0 ? <Product key={index} data={products.slice(index, index + 2)} /> : null}
            {console.log(index)}
          </div>
        ))
      }
    </>
  )
}

const Product = ({ data, key }) => {
  const [isLikeCardOne, setLikeCardOne] = useState(false);
  const [isLikeCardTwo, setLikeCardTwo] = useState(false);

  const imageCardOne = isLikeCardOne ? RedLike : Like;
  const imageCardTwo = isLikeCardTwo ? RedLike : Like;

  return (
    <Card className="card">

      <div className="item">

        <div className="img" wrapped ui={true}>
          <img className="like" src={imageCardOne} onClick={(() => setLikeCardOne(!isLikeCardOne))} />
        </div>

        <div >
          <Card.Content>
            <Card.Header className="brand">{data[0].brand_info.name}</Card.Header>
          </Card.Content>
        </div>

        <Card.Content className="content">

          <Card.Header>{data[0].name}</Card.Header>

          <Card.Description className="BP">
            {`₹ ${data[0].retail_price.value}`}
            <p className="price">₹1200</p>
          </Card.Description>

        </Card.Content>
      </div>

      <div className="item">

        <div className="img1" wrapped ui={true} >
          <img className="like" src={imageCardTwo} onClick={(() => setLikeCardTwo(!isLikeCardTwo))} />
        </div>

        <div >
          <Card.Content>
            <Card.Header className="brand">{data[1].brand_info.name}</Card.Header>
          </Card.Content>
        </div>

        <Card.Content className="content">

          <Card.Header>{data[1].name}</Card.Header>

          <Card.Description className="BP">
            {`₹ ${data[1].retail_price.value}`}
            <p className="price">₹1200</p>
          </Card.Description>

        </Card.Content>

      </div>

    </Card>
  )
}