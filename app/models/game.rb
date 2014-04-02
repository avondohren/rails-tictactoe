class Game < ActiveRecord::Base
  attr_accessible :board, :user_id, :winner, :won
  
  belongs_to :user
end
