class AddColumnType < ActiveRecord::Migration[5.2]
  def change
    add_column :movies, :rating, :string
  end
end
