class User < ApplicationRecord
  has_secure_password
  validates :full_name, presence: true
  validates :username, presence: true, uniqueness: true
  validates :password_digest, length: { minimum: 6 }
  validates :birthday, presence: true
  validate :validate_age

  has_many :subscriptions, dependent: :destroy
  has_many :channels
  has_many :channels, through: :subscriptions
  has_many :messages, dependent: :destroy

  private

  def validate_age
    if birthday.present? && birthday > 18.years.ago.to_date
      errors.add(:birthday, 'You need to be 18 years old or older to join.')
    end
  end
end
