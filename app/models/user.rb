class User < ApplicationRecord
  has_secure_password
  validates :full_name, presence: true
  validates :username, presence: true, uniqueness: true
  validates :password_digest, length: { minimum: 6 }
  validates :birthday, presence: true
end
