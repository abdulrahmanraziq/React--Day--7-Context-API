import React, { useContext, useEffect, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Image from "react-bootstrap/Image";
import { UserContext } from "./App";
import Form from "react-bootstrap/Form";

function Cards() {
  let { data, setData } = useContext(UserContext);


  const handleChange = (e, id) => {
      const updatedPrice = e.target.value;
      const updatedData = data.map((item, i) => {
        if(id === item.id){
          return {...item, updatedPrice: item.price * updatedPrice}
        }
        return item
      });
      setData(updatedData)

  }

  return (
    <>
      <h1> Shopping Cart ({data.length})</h1>
      <hr></hr>
      {data.map((item, index) => {
        return (
          <ListGroup variant="flush" key={index}>
            <ListGroup.Item className="list-group-item-custom">
              <div className="row">
                <div className="col-md-8">
                  <div className="col-md-12">
                    <div className="row">
                      <div className="col-md-3">
                        <Image src={item.thumbnail} thumbnail width="200" />
                      </div>
                      <div className="col-md-9">
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-2">
                  <Form.Select
                    aria-label="Default select example"
                    onChange={(e) => handleChange(e, item.id)}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </Form.Select>
                </div>
                <div className="col-md-2">${item.updatedPrice}</div>
              </div>
            </ListGroup.Item>
          </ListGroup>
        );
      })}
    </>
  );
}

export default Cards;
