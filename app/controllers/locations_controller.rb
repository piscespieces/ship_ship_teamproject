class LocationsController < ApplicationController
  def update
    if current_user.primary_location
      current_user.primary_location
      location = current_user.primary_location
    else
      location = current_user.locations.new(primary: true)
    end
    location.assign_attributes(
      street1: params[:street1],
      street2: params[:street2],
      city: params[:city],
      state: params[:state],
      zip: params[:zip],
      country: params[:country]
    )
    location.save
    redirect_back fallback_location: edit_user_registration_path, notice: "Primary Location updated!"
  end

end
