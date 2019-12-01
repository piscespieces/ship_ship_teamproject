class DashboardsController < ApplicationController 
  def show
    @locations = (current_user&.locations || []).map do |location|
      {
        id: location.id,
        street1: location.street1,
        street2: location.street2,
        city: location.city,
        state: location.state,
        zip: location.zip,
        country: location.country,
        created_at: location.created_at,
        shipment_id: location.shipment_id,
        shipment_label: ShipmentLabel.find_by(shipment_id: location.shipment_id)
      }
    end
    @keys = [:street1, :street2, :city, :state, :zip, :country]
  end
end 
