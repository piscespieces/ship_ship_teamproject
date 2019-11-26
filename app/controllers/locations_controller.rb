class LocationController < ApplicationController
  def update
    if current_user.location.update(
        location.find_by(params[:id]).update!(:street1)
      current_user.profile.update(street1: params[:street1])

    )
  end

  def create
    current_user.location.create(
                  street1: params[:street1],
                  street2: params[:street1],
                  city: params[:city],
                  state: params[:state],
                  zip: params[:zip]
    )
  end
end
