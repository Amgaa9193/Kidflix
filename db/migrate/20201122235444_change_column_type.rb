class ChangeColumnType < ActiveRecord::Migration[5.2]
  def change
    remove_column :movies, :rating
  end
end
