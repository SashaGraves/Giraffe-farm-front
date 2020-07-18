import React, { useState } from 'react';
import addPhoto from '../../../../static/add-photo.jpg';
import './card-template.scss';

function CardAdd({ showMenu, children }) {
    return (
        <div className="card">
            <button type="button" onClick={showMenu} className="card-menu-button">
                <i className="fas fa-ellipsis-h" />
            </button>
            {
                children
            }
            <img src={addPhoto} alt="add giraffe photo" className="giraffe-avatar" />
            <h2 className="giraffe-name">
                {data.name}
            </h2>
            <div className="table">
                <ul className="table-header">
                    <li><i className="fas fa-venus-mars" /></li>
                    <li><i className="fas fa-balance-scale" /></li>
                    <li><i className="fas fa-ruler-vertical" /></li>
                </ul>
                <ul className="table-row">
                    <li>
                        {data.sex}
                    </li>
                    <li>
                        {data.weight}
                    </li>
                    <li>
                        {data.height}
                    </li>
                </ul>
            </div>
            <ul className="description">
                <li>
                    <b>Цвет: </b>
                    {data.color}
                </li>
                <li>
                    <b>Диета: </b>
                    {data.diet}
                </li>
                <li>
                    <b>Характер: </b>
                    {data.temper}
                </li>
            </ul>
        </div>
    )
}

export default CardAdd;
 