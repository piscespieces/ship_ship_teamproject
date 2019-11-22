import React from 'react'

export default class Carriers extends React.Component {
    state = {}

    render() {
        console.log(this.props.shipment)
        return (
            <>
                <h1>Carriers JSX</h1>
                {this.props.shipment.buyer_address.street1}
            </>
        )
    }
}