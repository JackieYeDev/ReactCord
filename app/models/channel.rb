class Channel < ApplicationRecord
  validates :name, presence: true, uniqueness: true
  has_many :subscriptions
  has_many :users, through: :subscriptions
  has_many :messages, dependent: :destroy
end
