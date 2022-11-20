class ChatChannel < ApplicationCable::Channel
  # Called when the consumer has successfully
  # become a subscriber to this channels.
  def subscribed
    puts "subscribed to channels_#{params[:id]}"
    channel = Channel.find(params[:id])
    stream_for channel
    ChatChannel.broadcast_to(channel, channel.messages.order(created_at: :desc).as_json(include: :user))
  end

  def receieve(data)
    message = Message.create(content: data["content"], channel_id: data["channel_id"], user_id: data["userId"])
    channel = Channel.find(message.channel_id)
    ChatChannel.broadcast_to(channel, message.as_json(include: :user))
  end

  # For rebroadcasting a message sent by one client to any other connect clients
  # def receive(data)
  #   # ChatChannel.broadcast_to(
  #   # @channel,
  #   # {
  #   #   channel: @channel,
  #   #   messages: @channel.messages,
  #   # },
  #   # )
  #   ActionCable.server.broadcast_to("chat_#{params[:id]}", data)
  # end


  def unsubscribed
    puts "unsubscribed from channel_#{params[:id]}"
    stop_stream_from "channel_#{params[:id]}"
  end
end