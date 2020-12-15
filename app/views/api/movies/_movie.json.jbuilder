json.extract! movie, :id, :title, :rating, :description, :duration
json.movieUrl url_for(movie.clip)
json.onMyList movie.on_my_list(current_user) #will use this to rendering the right icon and right actions in response to clicking the button
# json.myLists @movie.mylists_ids