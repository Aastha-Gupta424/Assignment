import React, { Component } from 'react';
import Header from './Header';
import Scroll from './Scroll';
import ScrollingHorizontally from './ScrollComponent';
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
                <ScrollingHorizontally />
                <Products />
            </div>
        )
    }
}
export default Main;