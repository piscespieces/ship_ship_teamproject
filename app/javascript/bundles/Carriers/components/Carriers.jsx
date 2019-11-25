import React from 'react'
import CarriersTable from './CarriersTable'


export default class Carriers extends React.Component {
    constructor(props) {
        super(props)
        const carriers = props.shipment.rates.reduce((acc, { carrier, rate, service, delivery_days }) => {
            acc[carrier] = acc[carrier] || {};
            acc[carrier][service] = { rate, delivery_days }
            return acc;
        }, {})
        const selectedServices = Object.keys(carriers).reduce((acc, carrierName) => {
            acc[carrierName] = Object.keys(carriers[carrierName])[0]
            return acc
        }, {})
        this.state = {
            selectedServices,
            carriers,
            finalSelection: {}
        }
    }

    handleOptionChange = carrierType => e => {
        this.setState({
            selectedServices: { ...this.state.selectedServices, [carrierType]: e.target.value },
            finalSelection: {}
        })
    }

    handleFinalSelect = (carrier, service) => {
        this.setState({ finalSelection: { carrier, service }})
    }

    render() {
        const { carriers, selectedServices, finalSelection } = this.state
        return (
            <>
                <div className="carriers-header">
                    <div className="carriers-header-header">
                        <h1>SELECT A CARRIER</h1>
                    </div>
                </div>
                <main className="carriers-main">
                    <CarriersTable
                        selectedServices={selectedServices}
                        carriers={carriers}
                        handleOptionChange={this.handleOptionChange}
                        finalSelection={finalSelection}
                        handleFinalSelect={this.handleFinalSelect}
                    />
                </main>
                <section className="carriers-section-footer">
                    {
                        finalSelection.service &&
                        <p>You selected {finalSelection.carrier}: {finalSelection.service}</p>
                    }
                </section>
            </>
        )
    }
}
