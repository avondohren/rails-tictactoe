class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.integer :user_id
      t.string :board
      t.boolean :won
      t.string :winner

      t.timestamps
    end
  end
end
