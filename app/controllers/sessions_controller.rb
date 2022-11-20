class SessionsController < ApplicationController
  def create
    user = User.find_by(username: params[:username])
    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      cookies.signed[:user_id] = user.id
      byebug
      # session[:channel_id] = nil
      # ActionCable.server.broadcast('user_channel', user.username)
      render json: user, status: :created
    else
      render json: {error: "Invalid Username or Password"}, status: :unauthorized
    end
  end

  def destroy
    if session[:user_id].nil?
      render json: { error: "Unauthorized. You are not logged in." }, status: :unauthorized
    else
      session.delete :user_id
      head :no_content
    end
  end
end