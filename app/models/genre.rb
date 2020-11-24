# == Schema Information
#
# Table name: genres
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Genre < ApplicationRecord
    validates :title, presence: true, uniqueness: true

    has_many :genrelinks,
    foreign_key: :genre_id,
    class_name: :Genrelink 

    has_many :movies,
    through: :genrelinks,
    source: :movie
 
end
