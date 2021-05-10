import React, { Component } from 'react';
import Bag from "./Bag.png";
import Search from "./Search.png";
import Wishlists from "./Wishlists.png";



class Header extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (


            <div className="Jumbotron">
                <span>Jwellary  </span>
                <a id="Search"><img src={Search} /></a>
                <a id="Wishlists"><img src={Wishlists} /></a>
                <a id="bag"><img src={Bag} /></a>

            </div>
        )
    }

}
export default Header;