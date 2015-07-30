class AddUsernameToExpertusers < ActiveRecord::Migration
  def change
    add_column :expertusers, :username, :string
    add_index :expertusers, :username, unique: true
  end
end
