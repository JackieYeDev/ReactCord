class UserSerializer < ActiveModel::Serializer
  attributes :id, :username

  has_many :channels, through: :subscriptions
  def subscribed_channels
    channels = Subscription.where(:user_id => object.id).pluck("channel_id")
  end
end
