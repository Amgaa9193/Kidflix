@genres.each do |genre|
    json.set! genre.id do 
        json.extract! genre, :id, :title
        json.movieIds genre.movie_ids
    end 
end


