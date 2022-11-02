class ChannelsController < ApplicationController
  def create
    user = User.find(session[:user_id])
    if user
      # channel = Channel.create!(name: params[:name], user_id: user.id)
      channel = Channel.create!(name: params[:name])
      subscription = user.subscriptions.create!(:channel_id => channel.id)
      render json: channel, status: :created
    else
      render json: { error: "Unauthorized" }, status: :unauthorized
    end
  end

  def index
    channels = Channel.all
    render json: channels
  end

  def destroy
    user_id = session[:user_id]
    channel = Channel.find(params[:channel_id])
    if channel.user_id == user_id
      channel.destroy
      head :no_content
    else
      render json: { error: "Unauthorized. You are not the owner of this channel." }, status: :unauthorized
    end
  end
end
