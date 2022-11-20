class MessagesController < ApplicationController
  wrap_parameters :message
  def create
    # Create a new message to be broadcasted to the channels
    # /channels/:id/messages
    user = User.find(session[:user_id])
    message = user.messages.create(message_params)
    channel = Channel.find(message.channel_id)
    ChatChannel.broadcast_to(channel, message.to_json(include: :user))
    # render json: message, include: :user
    # if user
    #   message = Message.create!(:content=>params[:content], :user_id=>user.id, :channel_id=>channel.id)
    #   # render json: message, status: :created
    #   ActionCable.server.broadcast('message_channel', message)
    #   head :ok
    # end
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
  private
  def message_params
    params.require(:message).permit(:content, :channel_id, :user_id, :read)
  end
end
