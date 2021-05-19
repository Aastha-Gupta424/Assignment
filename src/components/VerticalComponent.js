import React, { useEffect, useState } from 'react';
const axios = require('axios');

export default function Menu() {
    const [Menu, setMenu] = useState();
    const [isapifetched, setapifetched] = useState(false);
    useEffect(() => {
        if (!isapifetched) {
            axios.get(`https://6098c01399011f001713f53a.mockapi.io/comment`)
                .then(({ data }) => {
                    const menuData = data.payload;
                    setMenu(menuData);
                    setapifetched(true);
                });
        }

    })
    const [buttonSelected, SetbuttonSelected] = useState(null);
    return (
        <div className="Jumbotron" id="stripe">
            {isapifetched &&
                Menu.map((data, index) => (
                        <button 
                      key={index} 
                      data={Menu}
                        className={index == buttonSelected ? "mode selected" : "mode NotSelectedButton"}
                            onClick={(() => SetbuttonSelected(index))}>
                            {data.name}
                        </button>              
                ))
            }
        </div>
    )
}
