import React from 'react';
import "./Grid.css";

function Grid(props) {
    return (
        <div id="grid">
            {props.arr.map((elem, index) => <div key={index}><div onClick={props.onClick}><img src={elem.logo} /></div><p>{elem.name}</p></div>)}
        </div>
    );
}

export default Grid;