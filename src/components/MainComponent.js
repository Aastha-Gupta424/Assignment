import React, { Component } from 'react';
import Header from './Header';
import Scroll from './Scroll';
import Products from './ProductComponent';



class Main extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <Header />
                <Scroll />
                <Products />
            </div>
        )
    }
}
export default Main;