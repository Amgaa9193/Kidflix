json.extract! @movie, :id, :title, :rating, :description, :duration
json.movieUrl url_for(@movie.clip)
