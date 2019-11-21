class LandingController < ApplicationController
  def show
    return redirect_to dashboard_path if user_signed_in?
  end
end
