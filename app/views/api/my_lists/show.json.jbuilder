json.movie do 
    json.partial! 'api/movies/movie', movie: @my_list.movie
end

# json.user do 
#     json.partial! "api/users/user", user: @my_list.user
# end