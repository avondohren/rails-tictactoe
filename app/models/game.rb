class Game < ActiveRecord::Base
  attr_accessible :board, :user_id
  serialize :board
  
  belongs_to :user
end
