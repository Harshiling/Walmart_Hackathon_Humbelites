import React from "react";
import styled from "styled-components";
import { BiPlayCircle } from 'react-icons/bi'

const IMAGE = "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2089&q=80";

const CardWrapper = styled.div`
  height: 600px;
  width: 325px;
  font-family: 'Kiwi Maru', serif;
  border: black 5px solid;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
  #button {
    display: flex;
    align-items: center;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    outline: none;
  }
`
const Card = ({productName, manufacturer, processor, os, audio, price}) => {
    return (
        <CardWrapper>
            <img height="200px" width="300px" src={IMAGE} alt="Just a Laptop"/>
            <h2>{productName}</h2>
            <p>{manufacturer}, {processor}, {os}</p>
            <audio id={productName} controls={false} src={`http://localhost:3001/${productName}.mp3`}
                   onMouseOver={ (e) => e.target.play()}
                   onMouseLeave={ (e) => {
                       e.target.pause();
                   }}
                   type="audio/mp3">
                Your browser does not support the
                <code>audio</code> element.
            </audio>
            <button id="button"
                    onClick={ (e) => {
                        const audioFile = document.getElementById(productName);
                        if(audioFile.paused) {
                            audioFile.play();
                        }
                        else {
                            audioFile.pause();
                        }
                    }
                       }>
                    <BiPlayCircle size="100px"/>
            </button>
            <h3>Price: {price}$</h3>
            <button>Buy Now</button>
            <button>Add to Cart</button>
        </CardWrapper>
    )
}

export default Card;