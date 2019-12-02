import React from 'react'
import { Checkbox } from 'semantic-ui-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruck } from '@fortawesome/free-solid-svg-icons'
import { faShippingFast } from '@fortawesome/free-solid-svg-icons'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { faTruckLoading } from '@fortawesome/free-solid-svg-icons'
import { faBoxOpen } from '@fortawesome/free-solid-svg-icons'
import usps from '../../../../assets/images/uspssvg'
import fedex from '../../../../assets/images/fedexsvg'
import ups from '../../../../assets/images/upssvg'

const CARRIER_IMAGE_MAP = { USPS: usps, FedEx: fedex, UPS: ups }

const CarriersTable = ({ carriers, selectedServices, handleOptionChange, finalSelection, handleFinalSelect }) => {
   return (
      <table className="carriers-table">
         <thead className="carriers-tablehead">
            <tr className="carriers-tablehead-tr">
               <th className="carriers-tablehead-th">
                  Carrier &nbsp;
                  <span className="carriers-icon">
                     <FontAwesomeIcon icon={faTruck} />
                  </span>
               </th>
               <th className="carriers-tablehead-th">
                  Service &nbsp;
                  <span className="carriers-icon">
                     <FontAwesomeIcon icon={faShippingFast} />
                  </span>
               </th>
               <th className="carriers-tablehead-th">
                  Rate &nbsp;
                  <span className="carriers-icon">
                     <FontAwesomeIcon icon={faDollarSign} />
                  </span>
               </th>
               <th className="carriers-tablehead-th">
                  Days &nbsp;
                  <span className="carriers-icon">
                     <FontAwesomeIcon icon={faTruckLoading} />
                  </span>
               </th>
               <th className="carriers-tablehead-th">
                  Selection &nbsp;
                  <span className="carriers-icon">
                     <FontAwesomeIcon icon={faBoxOpen} />
                  </span>
               </th>
            </tr>
         </thead>
         <tbody>
            {Object.keys(carriers).map(carrierName => {
               const selectedService = carriers[carrierName][selectedServices[carrierName]]
               const selectedServiceName = selectedServices[carrierName]
               return (
                  <tr className="carriers-tr" key={carrierName}>
                     <td className="carriers-table-carrier">
                        <div className="logo-img-container">
                           <img className={carrierName} src={CARRIER_IMAGE_MAP[carrierName]} alt="carrier" />
                        </div>
                     </td>
                     <td className="carriers-table-select-cell">
                        <select id="carriers-select" onChange={handleOptionChange(carrierName)}>
                           {
                              Object.keys(carriers[carrierName]).map(serviceName => (
                                 <option key={serviceName}>
                                    {serviceName}
                                 </option>
                              ))
                           }
                        </select>
                     </td>
                     <td className="carriers-table-rates">
                        <span id="rate">{`$${selectedService.rate}`}</span>
                     </td>
                     <td className="carriers-table-delivery">
                        <span id="delivery">{selectedService.delivery_days || 0}</span>
                     </td>
                     <td className="carriers-checkbox">
                        <Checkbox label=''
                           type="checkbox"
                           name="selectedService"
                           checked={
                              finalSelection.carrier === carrierName &&
                              finalSelection.service === selectedServiceName
                           }
                           onChange={() => handleFinalSelect(carrierName, selectedServiceName, selectedService.id)} />
                     </td>
                  </tr>
               )
            })}
         </tbody>
      </table>
   )
}

export default CarriersTable
