class Channel < ApplicationRecord
  validates :name, presence: true, uniqueness: true
  validates :user_id, length: {allow_nil: false}
  belongs_to :users
  has_many :subscriptions
  has_many :users, through: :subscriptions
  has_many :messages, dependent: :destroy
end
