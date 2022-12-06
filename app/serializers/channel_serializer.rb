class ChannelSerializer < ActiveModel::Serializer
  attributes :id, :name, :user_count
  def user_count
    count = Subscription.where(:channel_id => object.id).pluck("user_id").count
    count
  end
end
