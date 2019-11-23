import React from 'react'
import CarriersTable from './CarriersTable'

export default class Carriers extends React.Component {
    state = {
        carrierRates: this.props.shipment.rates,
        provider: [],
        services: []
    }

    componentDidMount() {
        this.getCarriers()
    }

    getCarriers = () => {
        const uniqCarriers = this.state.carrierRates.map(c => { return c.carrier })
        const filterCarriers = uniqCarriers.filter(function (car, index) {
            return uniqCarriers.indexOf(car) === index
        })
        this.setState({ provider: filterCarriers })
    }

    render() {
        const { carrierRates, provider } = this.state
        return (
            <>
                <div className="carriers-header">
                    <div className="carriers-header-logo">
                        <span>LOGO</span>
                    </div>
                    <div className="carriers-header-header">
                        <h1>SELECT A CARRIER</h1>
                    </div>
                </div>

                <main className="carriers-main">
                    <CarriersTable
                        carrierProvider={provider}
                        carrierRates={carrierRates}
                    />
                </main>

                {/* <h1>Carriers JSX</h1>
                {this.props.shipment.buyer_address.street1} */}
            </>
        )
    }
}