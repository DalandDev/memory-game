import Grid from './components/Grid'
import './App.css';
import React, { useState, useEffect } from 'react';

import adidas from "./img/adidas.svg";
import amazon from "./img/amazon.svg";
import american_express from "./img/american_express.svg";
import apple from "./img/apple.svg";
import bmw from "./img/bmw.svg";
import coca_cola from "./img/coca_cola.svg";
import disney from "./img/disney.svg";
import ebay from "./img/ebay.svg";
import facebook from "./img/facebook.svg";
import fedex from "./img/fedex.svg";
import ford from "./img/ford.svg";
import ibm from "./img/ibm.svg";
import instagram from "./img/instagram.svg";
import intel from "./img/intel.svg";
import lamborghini from "./img/lamborghini.svg";
import linkedin from "./img/linkedin.svg";
import louis_vuitton from "./img/louis_vuitton.svg";
import marvel from "./img/marvel.svg";
import mercedes_benz from "./img/mercedes_benz.svg";
import microsoft from "./img/microsoft.svg";
import nasa from "./img/nasa.svg";
import nike from "./img/nike.svg";
import nissan from "./img/nissan.svg";
import puma from "./img/puma.svg";
import samsung from "./img/samsung.svg";
import skype from "./img/skype.svg";
import sony from "./img/sony.svg";
import spotify from "./img/spotify.svg";
import starbucks from "./img/starbucks.svg";
import tesla from "./img/tesla.svg";
import tommy_hilfiger from "./img/tommy_hilfiger.svg";
import toyota from "./img/toyota.svg";
import ups from "./img/ups.svg";
import walmart from "./img/walmart.svg";
import whatsapp from "./img/whatsapp.svg";
import youtube from "./img/youtube.svg";

function App() {

  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [test, setTest] = useState("");
  const [items, setItems] = useState([
    {
      name: "Adidas",
      logo: adidas,
      clicked: false,
    },
    {
      name: "NASA",
      logo: nasa,
      clicked: false,
    },
    {
      name: "Disney",
      logo: disney,
      clicked: false,
    },
    {
      name: "Lamborghini",
      logo: lamborghini,
      clicked: false,
    },
    {
      name: "Marvel",
      logo: marvel,
      clicked: false,
    },
    {
      name: "Starbucks",
      logo: starbucks,
      clicked: false,
    },
    {
      name: "Toyota",
      logo: toyota,
      clicked: false,
    },
    {
      name: "Nike",
      logo: nike,
      clicked: false,
    },
    {
      name: "Microsoft",
      logo: microsoft,
      clicked: false,
    },
    {
      name: "Puma",
      logo: puma,
      clicked: false,
    },
    {
      name: "BMW",
      logo: bmw,
      clicked: false,
    },
    {
      name: "Coca Cola",
      logo: coca_cola,
      clicked: false,
    },
    {
      name: "Samsung",
      logo: samsung,
      clicked: false,
    },
    {
      name: "Ford",
      logo: ford,
      clicked: false,
    },
    {
      name: "Fedex",
      logo: fedex,
      clicked: false,
    },
    {
      name: "Apple",
      logo: apple,
      clicked: false,
    },
    {
      name: "Nissan",
      logo: nissan,
      clicked: false,
    },
    {
      name: "Facebook",
      logo: facebook,
      clicked: false,
    },
    {
      name: "Sony",
      logo: sony,
      clicked: false,
    },
    {
      name: "Tesla",
      logo: tesla,
      clicked: false,
    },
    {
      name: "Mercedes Benz",
      logo: mercedes_benz,
      clicked: false,
    },
    {
      name: "IBM",
      logo: ibm,
      clicked: false,
    },
    {
      name: "American Express",
      logo: american_express,
      clicked: false,
    },
    {
      name: "Instagram",
      logo: instagram,
      clicked: false,
    },
    {
      name: "Amazon",
      logo: amazon,
      clicked: false,
    },
    {
      name: "Skype",
      logo: skype,
      clicked: false,
    },
    {
      name: "UPS",
      logo: ups,
      clicked: false,
    },
    {
      name: "WhatsApp",
      logo: whatsapp,
      clicked: false,
    },
    {
      name: "YouTube",
      logo: youtube,
      clicked: false,
    },
    {
      name: "Louis Vuitton",
      logo: louis_vuitton,
      clicked: false,
    },
    {
      name: "Walmart",
      logo: walmart,
      clicked: false,
    },
    {
      name: "LinkedIn",
      logo: linkedin,
      clicked: false,
    },
    {
      name: "Intel",
      logo: intel,
      clicked: false,
    },
    {
      name: "Spotify",
      logo: spotify,
      clicked: false,
    },
    {
      name: "eBay",
      logo: ebay,
      clicked: false,
    },
    {
      name: "Tommy Hilfiger",
      logo: tommy_hilfiger,
      clicked: false,
    },

  ])

  useEffect(() => {
    if (localStorage.getItem("highScore")) {
      setHighScore(localStorage.getItem("highScore"));
    }
  }, []);

  useEffect(() => {
    setItems(shuffle(items));
    setTest(items[0].name);
    //console.log(items);
  }, [items]);

  useEffect(() => {
    localStorage.setItem("highScore", highScore)
  }, [highScore]);

  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function handleClick(e) {
    setTest(items[0].name);

    let arr = [...items];
    let item = arr.filter(item => item.logo === e.target.getAttribute("src"))[0];

    if (!item.clicked) {
      item.clicked = true;
      setCurrentScore(currentScore + 1);
      if (currentScore >= highScore) { setHighScore(currentScore) };
    }
    else {
      setCurrentScore(0);
      arr.forEach(item => {
        item.clicked = false;
      });
    }
    setItems(arr);
  }

  return (
    <div id="main">
      <div id="header">
        <div id="logo">
          <i className="fas fa-puzzle-piece"></i>
          <h1>Memory Game</h1>
        </div>
        <div id="score">
          <p>Current score: {currentScore}</p>
          <p>High score: {highScore}</p>
        </div>
      </div>
      <div id="grid-container">
        <Grid arr={items.slice(0, 9)} onClick={handleClick} id="grid"/>
      </div>
    </div>
  );
}

export default App;
