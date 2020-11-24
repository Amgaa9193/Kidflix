class CreateGenrelinks < ActiveRecord::Migration[5.2]
  def change
    create_table :genrelinks do |t|
      t.integer :movie_id, null: false 
      t.integer :genre_id, null: false 
      t.timestamps
    end
  end
end
