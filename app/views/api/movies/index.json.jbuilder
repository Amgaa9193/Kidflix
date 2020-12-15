@movies.each do |movie|
    json.set! movie.id do 
        json.partial! 'api/movies/movie', movie: movie 
        json.movieUrl url_for(movie.clip)
    end 
end