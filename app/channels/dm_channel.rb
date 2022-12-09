class DmChannel < ApplicationCable::Channel
  def subscribed
    puts "subscribed to dm_#{params[:id]}"
    dm = Dms.find(params[:id])
    stream_for dm
    DmChannel.broadcast_to(dm, dm.messages.order(created_at: :asc).as_json(include: :user))
  end
end