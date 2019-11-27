class ShipmentsController < ApplicationController

  def new
  end

  def create
    parsed_params = get_params
    parcel = EasyPost::Parcel.create(parsed_params[:parcel])
    to_address = EasyPost::Address.create(parsed_params[:to])
    from_address = EasyPost::Address.create(parsed_params[:from])
    @shipment = EasyPost::Shipment.create(
      to_address: to_address,
      from_address: from_address,
      parcel: parcel,
      carrier_accounts: [""]
    )
    if params[:save] == "Save as Primary Location"
      if current_user.primary_location
        current_user.primary_location.update(get_params[:from])
      else
        current_user.locations.create(get_params[:from].merge(primary: true))
      end
    end

    current_user.locations.find_or_create_by(get_params[:to])
    redirect_to "/shipments/#{@shipment[:id]}"
  end

  def update
    rate_id = params[:rate_id]
    shipment_id = params[:id]
    shipment = EasyPost::Shipment.retrieve(shipment_id)
    shipment.buy(rate: { id: rate_id })
    render json: { location: "/shipments/#{shipment[:id]}" }
  end

  def show

    shipment_id = params[:id]
    @shipment = EasyPost::Shipment.retrieve(shipment_id)
  end 

  private 
  def get_params 
    {
      to: {
        street1: params[:to_street1],
        street2: params[:to_street2],
        city: params[:to_city],
        state: params[:to_state],
        zip: params[:to_zip],
        country: params[:to_country],
      },
      from: {
        street1: params[:from_street1],
        street2: params[:from_street2],
        city: params[:from_city],
        state: params[:from_state],
        zip: params[:from_zip],
        country: params[:from_country],
      },
      parcel: {
        length: params[:length],
        width: params[:width],
        height: params[:height],
        weight: params[:weight]
      }
    }
  end 
end 
