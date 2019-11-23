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
            props.carrierProvider.map(carrier => {
               return (
                  <tr className="">
                     <td className="">
                        {carrier}
                     </td>
                     <td>
                        <select>
                           {
                              props.carrierRates.map(data => {
                                 if (data.carrier === carrier) {
                                    return (
                                       <option value={data.service}>
                                          {data.service}
                                       </option>
                                    )
                                 }
                              })
                           }
                        </select>
                     </td>
                  </tr>
               )
            })
         }

      </tbody>

   </table>
)

export default CarriersTable