import React from 'react'

const CarriersTable = ({ carrierRatesV2, selectedServicesV2, handleOptionChange }) => (
   <table className="carriers-table">
      <thead>
         <tr>
            <th className="">Carrier</th>
            <th className="">Service</th>
            <th className="">Rate</th>
            <th className="">Placeholder</th>
         </tr>
      </thead>
      <tbody>
         {Object.keys(carrierRatesV2).map(carrier => {
            const currentCarrier = carrierRatesV2[carrier];
            const currentService = selectedServicesV2[carrier];
            return (
               <tr>
                  <td className="carrier-table-carrier">
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
                  <td className="carrier-table-rates">
                     {currentCarrier.rateByService[currentService || currentCarrier.serviceTypes[0]]}
                  </td>
               </tr>
            )
         })}
      </tbody>
   </table>
)

export default CarriersTable