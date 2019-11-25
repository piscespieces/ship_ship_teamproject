import React from 'react'

const CarriersTable = ({ carrierRatesV2, selectedServicesV2, handleOptionChange }) => (
   <table className="carriers-table">
      <thead className="carriers-tablehead">
         <tr className="carriers-tablehead-tr">
            <th className="carriers-tablehead-th">Carrier</th>
            <th className="carriers-tablehead-th">Service</th>
            <th className="carriers-tablehead-th">Rate</th>
            <th className="carriers-tablehead-th">Placeholder</th>
         </tr>
      </thead>
      <tbody>
         {Object.keys(carrierRatesV2).map(carrier => {
            const currentCarrier = carrierRatesV2[carrier];
            const currentService = selectedServicesV2[carrier];
            return (
               <tr>
                  <td className="carriers-table-carrier">
                     {carrier}
                  </td>
                  <td className="carriers-table-select-cell">
                     <select onChange={handleOptionChange(carrier)}>
                        {(currentCarrier.serviceTypes || []).map(type => (
                           <option value={type}>
                              {type}
                           </option>
                        ))}
                     </select>
                  </td>
                  <td className="carriers-table-rates">
                     {currentCarrier.rateByService[currentService || currentCarrier.serviceTypes[0]]}
                  </td>
                  <td className="carriers-checkbox">
                     <input type="checkbox" name="" value={[carrier, currentService || currentCarrier.serviceTypes[0]]} />
                  </td>
               </tr>
            )
         })}
      </tbody>
   </table>
)

export default CarriersTable