class SubscriptionsController < ApplicationController
  def create
    # Creates a subscription to a channels
    # /channels/:id/subscribe
    user = User.find(session[:user_id])
    if user
      subscription = user.subscriptions.create!(:channel_id=>params[:channel_id])
      render json: subscription, status: :created
    else
      render json: { error: "Unauthorized. Please login first before subscribing" }, status: :unauthorized
    end
  end

  def destroy
    # Deletes a particular subscription to a channels.
    # Will not delete messages in the channels
    # /channels/:id/unsubscribe
    user = User.find(session[:user_id])
    if user
      subscription = Subscription.find_by(:user_id => :user.id, :channel_id => params[:channel_id])
      subscription.destroy
      head :no_content
    end
  end
end
