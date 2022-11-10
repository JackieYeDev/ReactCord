require 'rails_helper'

RSpec.describe User, type: :model do
  it "can be created sucessfully with valid data" do
    user = User.create(:username => "jackieye", :full_name => "Jackie Ye", :password=>"testing", :password_confirmation=>"testing", :birthday => "02-09-1994")
    expect(user).to be_valid
  end

  describe "authenticate" do
    it "returns the user if credentials match" do
      user = User.create(:username => "jackieye", :full_name => "Jackie Ye", :password=>"testing", :password_confirmation=>"testing", :birthday => "02-09-1994")
      expect(user.authenticate("testing")).to eq(user)
    end

    it "returns false if credentials don't match" do
      user = User.create(:username => "jackieye", :full_name => "Jackie Ye", :password=>"testing", :password_confirmation=>"testing", :birthday => "02-09-1994")
      expect(user.authenticate("123456")).to be(false)
    end
  end
end