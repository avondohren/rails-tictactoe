class ApplicationController < ActionController::Base
  protect_from_forgery
  
  helper_method :current_user
  
  def authorize
    if current_user.nil?
      flash[:notice] = "Please log in before trying that."
      redirect_to :new_login
    end
  end
  
  private
  
  # Return either `nil` or a User object.
  def current_user
    if session[:user_id]
      @current_user ||= User.find(session[:user_id])
    end
  end
end
