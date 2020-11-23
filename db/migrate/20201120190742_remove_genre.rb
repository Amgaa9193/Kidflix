class RemoveGenre < ActiveRecord::Migration[5.2]
  def change
    remove_column :movies, :genre
    add_column :movies, :description, :text, null: false
    add_column :movies, :duration, :integer, null: false
  end
end
