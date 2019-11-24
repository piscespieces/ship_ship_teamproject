import React from 'react'
import CarriersTable from './CarriersTable'

export default class Carriers extends React.Component {
    state = {
        carrierRates: this.props.shipment.rates,
        getCarrierRates: [],
        carrierName: [],
        services: [],
        selectedService: []
    }

    componentDidMount() {
        this.getCarriers()
        this.getCarrierRates()
    }

    getCarriers = () => {
        const uniqCarriers = this.state.carrierRates.map(c => { return c.carrier })
        const filteredCarriers = uniqCarriers.filter(function (car, index) {
            return uniqCarriers.indexOf(car) === index
        })
        this.setState({ carrierName: filteredCarriers })
    }

    getCarrierRates = () => {
        const carrierRatesObj = this.state.carrierRates
        const carrierRates = carrierRatesObj.map(carrier => {
            return ({
                carrier: carrier.carrier,
                service: carrier.service,
                rate: carrier.rate
            })
        })
        this.setState({ getCarrierRates: carrierRates })
    }

    handleOptionChange = e => {
        const option = e.target.value
        this.setState({ selectedService: [option] })
    }

    render() {
        const { carrierRates, carrierName, getCarrierRates, selectedService } = this.state
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
                        carrierName={carrierName}
                        carrierRates={carrierRates}
                        getCarrierRates={getCarrierRates}
                        handleOptionChange={this.handleOptionChange}
                        selectedService={selectedService}
                    />
                </main>
                <section className="carriers-section-footer">

                </section>
            </>
        )
    }
}