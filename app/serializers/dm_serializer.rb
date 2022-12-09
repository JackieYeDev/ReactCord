class DmSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :target_id, :content
end
