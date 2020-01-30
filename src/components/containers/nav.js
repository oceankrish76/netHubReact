import React, { Component } from 'react'

export default class nav extends Component {
    constructor(props) {
        super(props)
        this.state = { show: false };

        this.handleShow = this.handleShow.bind(this)
    }
    handleShow() {
        const { show } = this.state;
        this.setState({ show: !show })
    }

    render() {
        return (

            <div className="navhandle">
                <button className="MarketPLacebutton" onClick={this.handleShow}>Show/Hide A Form to Upload Your Item</button> <br />
                {this.state.show && <NavLinks />}
            </div>
        )
    }
}


class NavLinks extends Component {
    render() {
        return (
            <div className="MarketPLaceFormdiv">
                Hi
            </div>
        )
    }
}
