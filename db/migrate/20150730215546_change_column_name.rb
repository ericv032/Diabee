class ChangeColumnName < ActiveRecord::Migration
  def change
  	rename_column :entries, :Results, :results
  end
end
