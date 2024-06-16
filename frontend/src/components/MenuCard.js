import React from "react";

export default function MenuCard({ name, img, kalori, waktu}) {
    return (
        <div className="menu-card">
            <img className="imagephoto" src={img}></img>
            <p className="menuname">{name}</p>
            <p className="kalori">{kalori}</p>
            <p className="waktu">{waktu}</p>
        </div>
    )
}