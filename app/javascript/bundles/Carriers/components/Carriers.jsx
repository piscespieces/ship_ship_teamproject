import React from 'react'
import CarriersTable from './CarriersTable'


export default class Carriers extends React.Component {
    constructor(props) {
        super(props)
        const carrierRatesV2 = props.shipment.rates.reduce((acc, { carrier, rate, service }) => {
            acc[carrier] = acc[carrier] || {};
            acc[carrier].serviceTypes = [...(acc[carrier].serviceTypes || []), service]
            acc[carrier].rateByService = { ...acc[carrier].rateByService, [service]: rate }
            return acc;
        }, {})
        this.state = {
            carrierRates: this.props.shipment.rates,
            getCarrierRates: [],
            carrierName: [],
            services: [],
            selectedService: [],
            selectedServicesV2: {},
            carrierRatesV2,
        }
    }

    // componentDidMount() {
    //     this.getCarriers()
    //     this.getCarrierRates()
    // }

    // getCarriers = () => {
    //     const uniqCarriers = this.state.carrierRates.map(c => { return c.carrier })
    //     const filteredCarriers = uniqCarriers.filter(function (car, index) {
    //         return uniqCarriers.indexOf(car) === index
    //     })
    //     this.setState({ carrierName: filteredCarriers })
    // }

    // getCarrierRates = () => {
    //     const carrierRatesObj = this.state.carrierRates
    //     const carrierRates = carrierRatesObj.map(carrier => {
    //         return ({
    //             carrier: carrier.carrier,
    //             service: carrier.service,
    //             rate: carrier.rate
    //         })
    //     })
    //     this.setState({ getCarrierRates: carrierRates })
    // }

    handleOptionChange = carrierType => e => this.setState({ selectedServicesV2: { ...this.state.selectedServicesV2, [carrierType]: e.target.value } })

    render() {
        const { carrierRates, carrierName, getCarrierRates, selectedService, carrierRatesV2, selectedServicesV2 } = this.state

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
                        selectedServicesV2={selectedServicesV2}
                        carrierRatesV2={carrierRatesV2}
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