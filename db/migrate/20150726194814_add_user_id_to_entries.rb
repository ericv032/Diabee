class AddUserIdToEntries < ActiveRecord::Migration
  def change
  	add_column :entries, :user_id, :integer
  	add_index :entries, :user_id
  	remove_column :entries, :name
  end
end
