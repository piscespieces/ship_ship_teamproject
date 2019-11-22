class ProfilesController < ApplicationController

  def update
    if current_user.profile
      current_user.profile.update(name: params[:name], phone: params[:phone])
    else
      current_user.create_profile(name: params[:name], phone: params[:phone])
    end
    redirect_back fallback_location: edit_user_registration_path, notice: "Profile Updated"
  end

end
