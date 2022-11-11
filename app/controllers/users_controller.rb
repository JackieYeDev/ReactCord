class UsersController < ApplicationController
  before_action :authorize
  skip_before_action :authorize, only: [:create]
  def show
    user = User.find(session[:user_id])
    render json: user
  end

  def create
    user = User.create(user_params)
    if user.valid?
      session[:user_id] = user.id
      session[:channel_id] = nil
      render json: user, status: :created
    else
      render json: {errors: user.errors.full_messages}, status: :unprocessable_entity
    end
  end

  def change_status

  end

  private
  def user_params
    params.permit(:username, :full_name, :birthday, :password, :password_confirmation)
  end

  def authorize
    return render json: { error: "Unauthorized" }, status: :unauthorized unless session.include? :user_id
  end
end
