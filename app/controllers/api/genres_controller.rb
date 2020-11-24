class Api::GenresController < ApplicationController
    def index 
        @genres = Genre.all.includes(:movies) #will this work?
        render :index
    end 

    def show
        @genre = Genre.find_by(id: params[:id]) # movies.id??? how do I get array of movieIds in front end???
        render :show
    end 
end
