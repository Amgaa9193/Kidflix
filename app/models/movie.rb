# == Schema Information
#
# Table name: movies
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  description :text             not null
#  duration    :integer          not null
#  rating      :string
#
class Movie < ApplicationRecord
    validates :title, presence: true 
    validates :description, presence: true 
    validates :duration, presence: true 

    has_many :genrelinks,
    foreign_key: :movie_id,
    class_name: :Genrelink

    has_many :genre,
    through: :genrelinks,
    source: :genre

    has_many :my_lists,
    foreign_key: :movie_id,
    class_name: :MyList,
    dependent: :destroy

    has_many :users,
    through: :my_lists,
    source: :user

    has_one_attached :clip

    def on_my_list(user)
        !!MyList.find_by(user_id: user.id, movie_id: self.id)
    end 



    # def self.find_by_title(title)
    #     movie = Movie.find_by(title: title)
    #     return null unless movie 
    # end 

    # def self.find_by_genre(genre)
    #     movie = Movie.find_by(genre: genre) genre will be table 
    #     return null unless movie 
    # end 
end

