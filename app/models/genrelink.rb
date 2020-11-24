# == Schema Information
#
# Table name: genrelinks
#
#  id         :bigint           not null, primary key
#  movie_id   :integer          not null
#  genre_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Genrelink < ApplicationRecord
    belongs_to :movie,
    foreign_key: :movie_id,
    class_name: :Movie


    belongs_to :genre,
    foreign_key: :genre_id,
    class_name: :Genre
end
