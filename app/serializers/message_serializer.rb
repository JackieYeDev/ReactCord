class MessageSerializer < ActiveModel::Serializer
  attributes :id, :content, :user_id, :channel_id
  belongs_to :user, serializer: UserSerializer
end
