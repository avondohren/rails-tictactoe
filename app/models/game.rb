class Game < ActiveRecord::Base
  attr_accessible :board, :user_id, :won, :winner
  serialize :board
  
  belongs_to :user
end
