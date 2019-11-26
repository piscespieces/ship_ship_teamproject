import React from 'react'

const CarriersTable = ({ carriers, selectedServices, handleOptionChange, finalSelection, handleFinalSelect }) => {
      return (
      <table className="carriers-table">
         <thead className="carriers-tablehead">
            <tr className="carriers-tablehead-tr">
               <th className="carriers-tablehead-th">Carrier</th>
               <th className="carriers-tablehead-th">Service</th>
               <th className="carriers-tablehead-th">Rate</th>
               <th className="carriers-tablehead-th">Days</th>
               <th className="carriers-tablehead-th">Placeholder</th>
            </tr>
         </thead>
         <tbody>
            {Object.keys(carriers).map(carrierName => {
               const selectedService = carriers[carrierName][selectedServices[carrierName]]
               const selectedServiceName = Object.keys(carriers[carrierName]).find(serviceName => (
                  serviceName === selectedServices[carrierName]
               ))
               return (
                  <tr key={carrierName}>
                     <td className="carriers-table-carrier">
                        {carrierName}
                     </td>
                     <td className="carriers-table-select-cell">
                        <select onChange={handleOptionChange(carrierName)}>
                           {
                              Object.keys(carriers[carrierName]).map(serviceName => (
                                 <option key={serviceName}>
                                    { serviceName }
                                 </option>
                              ))
                           }
                        </select>
                     </td>
                     <td className="carriers-table-rates">
                        { selectedService.rate }
                     </td>
                     <td className="carriers-table-rates">
                        { selectedService.delivery_days || 0 }
                     </td>
                     <td className="carriers-checkbox">
                        <input
                           type="checkbox"
                           name="selectedService"
                           checked={
                              finalSelection.carrier === carrierName &&
                              finalSelection.service === selectedServiceName
                           }
                           onChange={() => handleFinalSelect(carrierName, selectedServiceName, selectedService.id)}
                        />
                     </td>
                  </tr>
               )
            })}
         </tbody>
      </table>
   )
}

export default CarriersTable
