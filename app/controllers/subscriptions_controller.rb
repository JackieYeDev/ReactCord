class SubscriptionsController < ApplicationController
  def create
    # Creates a subscription to a channels
    # /subscribe/channels/:id
    user = User.find(session[:user_id])
    if user
      subscription = user.subscriptions.create!(:channel_id=>params[:id]) unless user.subscriptions.find_by(:channel_id=>params[:id])
      render json: subscription, status: :created
    else
      render json: { error: "Unauthorized. Please login first before subscribing" }, status: :unauthorized
    end
  end

  def channel_list
    # /user/channels
    user = User.find(session[:user_id])
    if user
      subscriptions = Subscription.where(user_id: user.id)
      render json: subscriptions, include: ['channel']
    else
      render json: { error: "Unauthorized" }, status: :unauthorized
    end
  end

  def user_list
    # /channels/:id/user_list
    subscriptions = Subscription.where(channel_id: params[:id])
    render json: subscriptions, include: ['user']
  end

  def destroy
    # Deletes a particular subscription to a channels.
    # Will not delete messages in the channels
    # /unsubscribe/channels/:id
    user = User.find(session[:user_id])
    if user
      subscription = Subscription.find_by(:user_id => user.id, :channel_id => params[:id])
      subscription.destroy
      head :ok
    end
  end
end
