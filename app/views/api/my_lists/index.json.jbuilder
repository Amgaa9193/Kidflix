json.movies do 
    @movies.each do |movie|
        json.partial! 'api/movies/movie', movie: movie 
    end 
end
 

json.user do 
    json.partial! "api/users/user", user: current_user
end 