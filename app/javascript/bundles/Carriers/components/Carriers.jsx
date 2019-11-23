import React from 'react'

export default class Carriers extends React.Component {
    state = {
        carriers: this.props.shipment.rates,
        provider: []
    }

    componentDidMount() {
        this.getCarriers()
    }

    getCarriers = () => {
        const uniqCarriers = this.state.carriers.map(c => { return c.carrier })
        const filterCarriers = uniqCarriers.filter(function (car, index) {
            return uniqCarriers.indexOf(car) === index
        })
        this.setState({ provider: filterCarriers })
    }

    handleSelectChange = (e) => {
    }

    render() {
        const { carriers, provider } = this.state
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



                <div className="carriers-tablehead">
                    <div className="carriers-tablehead-content">
                        PLACEHOLDER
                    </div>
                    <div className="carriers-tablehead-content">
                        PLACEHOLDER
                    </div>
                    <div className="carriers-tablehead-content">
                        PLACEHOLDER
                    </div>
                    <div className="carriers-tablehead-content">
                        PLACEHOLDER
                    </div>
                </div>

                <main className="carriers-main">

                </main>

                {
                    provider.map(carrier => {
                        return (
                            <div className="shipments-carrier">
                                {carrier}
                            </div>
                        )
                    })
                }

                {/* <h1>Carriers JSX</h1>
                {this.props.shipment.buyer_address.street1} */}
            </>
        )
    }
}