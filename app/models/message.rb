class Message < ApplicationRecord
  validates :content, length: {minimum: 1}
  belongs_to :user
  belongs_to :channel
end
