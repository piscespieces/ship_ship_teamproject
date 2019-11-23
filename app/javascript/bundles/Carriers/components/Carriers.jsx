import React from 'react'
import CarriersTable from './CarriersTable'

export default class Carriers extends React.Component {
    state = {
        carrierRates: this.props.shipment.rates,
        customCarrierRates: [],
        provider: [],
        services: []
    }

    componentDidMount() {
        this.getCarriers()
        this.customCarrierRates()
    }

    getCarriers = () => {
        const uniqCarriers = this.state.carrierRates.map(c => { return c.carrier })
        const filterCarriers = uniqCarriers.filter(function (car, index) {
            return uniqCarriers.indexOf(car) === index
        })
        this.setState({ provider: filterCarriers })
    }

    customCarrierRates = () => {
        const carrierRates = this.state.carrierRates
        const mapCustomCarrierRates = carrierRates.map(carrier => {
            return ({
                carrier: carrier.carrier,
                service: carrier.service,
                rate: carrier.rate
            })
        })
        this.setState({ customCarrierRates: mapCustomCarrierRates })
    }

    render() {
        console.log(this.state.customCarrierRates)
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