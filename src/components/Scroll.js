import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
const axios = require('axios');

class Scroll extends Component {

    constructor(props) {
        super(props);

        this.state = {
            buttonSelected: 2,
            vendorsList: null,
        }
    }

    componentDidMount() {
        axios.get(`https://608f88210294cd001765e8bc.mockapi.io/vendors`)
        .then(({ data }) => {
            const vendors = data.payload;
            vendors.reverse();
            this.setState({ vendorsList: vendors })
        });
      }

    render() {
        let buttonSelectedTheme = this.state.buttonSelected === 1 ? "mode selected" : "mode NotSelectedButton";
        const vendor = this.state.vendorsList
        return (
            <>
                {vendor != null
                    ? (
                        <MediaQuery minDeviceWidth={1224} values={{ deviceWidth: 1600 }}>
                            <div id="stripe">
                                <button
                                    className={this.state.buttonSelected === 1 ? "mode selected" : "mode NotSelectedButton"}
                                    onClick={() => this.setState({ buttonSelected: 1 })}
                                >
                                    All
                                </button>

                                <button
                                    className={this.state.buttonSelected === 2 ? "mode selected" : "mode NotSelectedButton"}
                                    onClick={() => this.setState({ buttonSelected: 2 })}
                                >
                                    {vendor[0].name}
                                </button>
                                <button
                                    className={this.state.buttonSelected === 3 ? "mode selected" : "mode NotSelectedButton"}
                                    onClick={() => this.setState({ buttonSelected: 3 })}
                                >
                                    {vendor[1].name}
                                </button>
                                <button
                                    className={this.state.buttonSelected === 4 ? "mode selected" : "mode NotSelectedButton"}
                                    onClick={() => this.setState({ buttonSelected: 4 })}
                                >
                                    {vendor[2].name}
                                </button>
                                <button
                                    className={this.state.buttonSelected === 5 ? "mode selected" : "mode NotSelectedButton"}
                                    onClick={() => this.setState({ buttonSelected: 5 })}
                                >
                                    {vendor[3].name}
                                </button>
                                <button
                                    className={this.state.buttonSelected === 6 ? "mode selected" : "mode NotSelectedButton"}
                                    onClick={() => this.setState({ buttonSelected: 6 })}
                                >
                                    {vendor[4].name}
                                </button>
                                <button
                                    className={this.state.buttonSelected === 7 ? "mode selected" : "mode NotSelectedButton"}
                                    onClick={() => this.setState({ buttonSelected: 7 })}
                                >
                                    {vendor[5].name}
                                </button>
                            </div>
                        </MediaQuery>
                    ) : null
                }
            </>
            

        )
    }

}

export default Scroll;