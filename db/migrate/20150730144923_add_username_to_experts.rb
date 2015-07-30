class AddUsernameToExperts < ActiveRecord::Migration
  def change
    add_column :experts, :username, :string
    add_index :experts, :username, unique: true
  end
end
