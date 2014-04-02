class User < ActiveRecord::Base
  has_secure_password
  
  attr_accessible :email, :fname, :lname, :password, :password_confirmation, :uname
  
  has_many :games
  
  validates :fname, :presence => true
  validates :lname, :presence => true
  validates :uname, :uniqueness => true, :format => { :with => /^[a-zA-Z0-9_]+$/ }
  validates :email, :uniqueness => true, :format => { :with => /.+@.+\..+/i }
end
