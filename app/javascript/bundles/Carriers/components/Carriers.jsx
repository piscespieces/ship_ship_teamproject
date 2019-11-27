import React from 'react'
import CarriersTable from './CarriersTable'
import Label from './Label'
import axios from 'axios'

export default class Carriers extends React.Component {
    constructor(props) {
        super(props)
        const carriers = props.shipment.rates.reduce((acc, { carrier, rate, service, id, delivery_days }) => {
            acc[carrier] = acc[carrier] || {};
            acc[carrier][service] = { rate, delivery_days, id }
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

    handleFinalSelect = (carrier, service, id) => {
        this.setState({ finalSelection: { carrier, service, id } })
    }

    confirmSelection = selection => {
        axios.patch(`/shipments/${this.props.shipment.id}`, { rate_id: selection.id }, {
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'X-CSRF-TOKEN': ReactOnRails.authenticityToken()
            }
        }).then(response => window.location.href = response.data.location)
    }

    render() {
        const { carriers, selectedServices, finalSelection } = this.state
        const trackingCode = this.props.shipment.tracking_code
        // const postageLabel = this.props.shipment.postage_label.label_url
        if (trackingCode) {
            return (
                <>
                    <Label
                        trackingCode={trackingCode}
                        postageLabel={this.props.shipment.postage_label.label_url}
                    />
                </>
            )
        }
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
                        <>
                            <p>You selected {finalSelection.carrier}: {finalSelection.service} ({finalSelection.id})</p>
                            <button onClick={() => this.confirmSelection(finalSelection)}>
                                Print Label
                            </button>
                        </>
                    }
                </section>
            </>
        )
    }
}
