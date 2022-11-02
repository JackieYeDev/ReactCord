class UsersController < ApplicationController
  def show
    user = User.find(session[:user_id])
    if(user)
      render json: user
    else
      render json: { error: "Unauthorized" }, status: :unauthorized
    end
  end

  def create
    user = User.create(user_params)
    if user.valid?
      session[:user_id] = user.id
      render json: user, status: :created
    else
      render json: {errors: user.errors.full_messages}, status: :unprocessable_entity
    end
  end

  private
  def user_params
    params.permit(:username, :full_name, :birthday, :password, :password_confirmation)
  end
end
