@movies.each do |movie|
    json.set! movie.id do 
        json.extract! movie, :id, :title, :rating, :description, :duration
        json.movieUrl url_for(movie.clip)
    end 
end