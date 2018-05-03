import React from "react";
import "./CharacterCard.css";

const CharacterCard = props => (

    <div className="img-container">
        <a onClick={() => props.selectFriend(props.name)} className = { props.currentScore === 0 ? "style_prevu_kit style_prevu_kit_ex" : "style_prevu_kit"} >
            <img className="card" alt={props.name} src={props.image} />
        </a>
    </div>

);

export default CharacterCard;
