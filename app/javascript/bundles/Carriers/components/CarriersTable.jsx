import React from 'react'

const CarriersTable = props => (
   <table className="carriers-table-head">
      <thead>
         <tr>
            <th className="">Carrier</th>
            <th className="">Service</th>
            <th className="">Placeholder</th>
            <th className="">Placeholder</th>
         </tr>
      </thead>
      <tbody>

         {
            props.carrierName.map(carrier => {
               return (
                  <tr className="">
                     <td className="">
                        {carrier}
                     </td>
                     <td>
                        <select>
                           {
                              props.customCarrierRates.map(customCarrier => {
                                 if (customCarrier.carrier === carrier) {
                                    return (
                                       <option value={customCarrier.service}>
                                          {customCarrier.service}
                                       </option>
                                    )
                                 }
                              })
                           }
                        </select>
                     </td>
                     <td>
                        {
                           props.customCarrierRates.map(customCarrier => {
                              if (customCarrier.carrier === carrier) {
                                 return (
                                    <ul>
                                       <li>
                                          {customCarrier.rate}
                                       </li>
                                    </ul>
                                 )
                              }
                           })
                        }
                     </td>
                  </tr>
               )
            })
         }

      </tbody>

   </table>
)

export default CarriersTable