import React, { Component } from 'react';
import Header from './Header';
import Scroll from './Scroll';
import Products from './ProductComponent';
import Menu from './VerticalComponent';



class Main extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <Menu />
                <Header />
                <Scroll />
                <Products />
            </div>
        )
    }
}
export default Main;