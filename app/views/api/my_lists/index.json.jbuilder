# json.movies do 
#     @movies.each do |movie|
#         json.partial! 'api/movies/movie', movie: movie 
#     end 
# end

arr = [];

@mylists.each do |mylist|
    arr.push(mylist);
end

json.mylists arr
 

# json.user do 
#     json.partial! "api/users/user", user: current_user
# end 