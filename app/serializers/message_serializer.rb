class MessageSerializer < ActiveModel::Serializer
  attributes :id, :content, :user_id, :channel_id
end
