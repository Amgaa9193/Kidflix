# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all;
Movie.destroy_all;

User.create!(       
     email: 'demoUser@yahoo.com',    
     password_digest: BCrypt::Password.create('password'),    
     session_token: SecureRandom.base64
)

# add the movie u created in the console 
# 1 Happy Birthday!
m1 = Movie.create!(
     title: "Countdown", 
     rating: "PG", 
     description: "Countdown to the Happy Birthday moment!", 
     duration: 0.16
)

m1.clip.attach(io: File.open("/Users/enkh-amgalankhosbayar/Desktop/movies/count.mp4"),
 filename: "count.mp4"
)


# 2 True banner clip!!!
m2 = Movie.create!(
     title: "True and The Rainbow Kingdom", 
     rating: "TV-Y", 
     description: "True and her friend Bartleby the cat goes on their next adventure.", 
     duration: 0.47
)

m2.clip.attach(io: File.open("/Users/enkh-amgalankhosbayar/Desktop/movies/true.mp4"),
 filename: "true.mp4"
)

m3 = Movie.create!(
     title: "Dr.suess", 
     rating: "PG", 
     description: "Dr.Suess 12 book intro.", 
     duration: 0.43
)


m3.clip.attach(io: File.open("/Users/enkh-amgalankhosbayar/Desktop/movies/seuss.mp4"), 
filename: "seuss.mp4")