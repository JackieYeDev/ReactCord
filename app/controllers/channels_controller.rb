class ChannelsController < ApplicationController
  def create
    user_id = session[:user_id]
    if user_id.nil?
      render json: { error: "Unauthorized" }, status: :unauthorized
    else
      channel = Channel.create!(:name=>params[:name], :user_id=> user_id)
      subscription = Subscription.create!(:channel_id=>channel.id, :user_id=> user_id)
      render json: channel, status: :created
    end
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
