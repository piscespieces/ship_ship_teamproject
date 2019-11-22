import React from 'react'

export default class Carriers extends React.Component {
    state = {
    }

    handleSelectChange = (e) => {
    }

    render() {
        return (
            <>
                <h1>Carriers JSX</h1>
                <div>
                    {
                        console.log(this.props.shipment.rates.map(d => { return d.carrier }))
                    }
                </div>
                {/* <h1>Carriers JSX</h1>
                {this.props.shipment.buyer_address.street1} */}
            </>
        )
    }
}