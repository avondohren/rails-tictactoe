class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :fname
      t.string :lname
      t.string :uname
      t.string :passworddigest
      t.string :email

      t.timestamps
    end
  end
end
