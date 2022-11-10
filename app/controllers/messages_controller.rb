class MessagesController < ApplicationController
  def create
    # Create a new message to be broadcasted to the channels
    # /channels/:id/messages
    user = User.find(session[:user_id])
    channel = Channel.find(params[:channel_id])
    if user
      message = Message.create!(:content=>params[:content], :user_id=>user.id, :channel_id=>channel.id)
      # render json: message, status: :created
      ActionCable.server.broadcast('message_channel', message)
      head :ok
    end
  end

  def index
    # Displays all messages for a channels through dynamic route
    # /channels/:id/messages
    channel_id = params[:channel_id]
    messages = Message.where(:channel_id => channel_id)
    render json: messages
  end

  def show
    # Will function as a filter function for selecting all messages by params[:id]=:user_id for a particular channels
    # /channels/:id/messages/:id

  end
  def update
    # Edit an existing message that a user owns in a channels
    # /channels/:id/messages/:id

  end

  def destroy
    # Delete an existing message
    # /channels/:id/messages/

  end
end
