class Movie < ApplicationRecord
    validates :title, presence: true 

    has_one_attached :clip



    # def self.find_by_title(title)
    #     movie = Movie.find_by(title: title)
    #     return null unless movie 
    # end 

    # def self.find_by_genre(genre)
    #     movie = Movie.find_by(genre: genre) genre will be table 
    #     return null unless movie 
    # end 
end

