class SubscriptionSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :channel_id

  belongs_to :channel
  belongs_to :user
end
