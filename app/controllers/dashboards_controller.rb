class DashboardsController < ApplicationController 
  def show
    @locations = current_user.locations
    @keys = [:street1, :street2, :city, :state, :zip, :country]
  end
end 
