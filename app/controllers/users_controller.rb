class UsersController < ApplicationController
  def index
    @users = User.all
  end

  def show
    @user = User.find(params[:id])
  end

  def new
    @user = User.new
  end
  
  def edit
    authorize
    if current_user.id == params[:id]
      @user = User.find(params[:id])
    else
      flash[:notice] = "Cannot edit another person's profile."
      redirect_to(:root)
    end
  end

  def create
    user = User.new(params[:user])
    
    if user.save
      flash[:notice] = "Welcome #{user.fname}!"
      session[:user_id] = user.id # "auto-login"
      redirect_to(user_path(user.id))
    else
      render "new"
    end
  end

  def update
    authorize
    if current_user.id == params[:id]
      user = User.find(params[:id])
      user.update_attributes(params[:user])
      flash[:notice] = "Profile saved."
    else
      flash[:notice] = "Cannot update another person's profile."
      redirect_to(:root)
    end
    
    redirect_to(user_path(user.id))
  end

  def destroy
    authorize
    if current_user.id == params[:id]
      user = User.find(params[:id])
      user.delete
      session[:user_id] = nil
      flash[:notice] = "User #{user.uname} has beed deleted."
    else
      flash[:notice] = "Cannot delete another person's profile."
    end
    redirect_to(:root)
  end
end
