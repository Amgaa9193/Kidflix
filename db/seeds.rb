# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

User.destroy_all;


demo = User.create!(       
     email: 'demoUser@yahoo.com',    
     password_digest: BCrypt::Password.create('password'),    
     session_token: SecureRandom.base64
)


Movie.destroy_all;
# add the movie u created in the console 
m1 = Movie.create!(
     title: "Happy Birthday!", 
     rating: "PG", 
     description: "Countdown to the Happy Birthday moment!", 
     duration: 0.16
)


# change file.open with open and give 
m1_file = open('https://kidflix-seeds.s3-us-west-2.amazonaws.com/count.mp4')
m1.clip.attach(io: m1_file, filename: "count.mp4")


m2 = Movie.create!(
     title: "True and The Rainbow Kingdom", 
     rating: "TV-Y", 
     description: "True and her friend Bartleby the cat goes on their next adventure.", 
     duration: 0.47
)

m2_file = open('https://kidflix-seeds.s3-us-west-2.amazonaws.com/true.mp4')
m2.clip.attach(io: m2_file, filename: "true.mp4")


m3 = Movie.create!(
     title: "Dr.suess", 
     rating: "PG", 
     description: "Dr.Suess 12 book intro for begginer.", 
     duration: 0.43
)

m3_file = open('https://kidflix-seeds.s3-us-west-2.amazonaws.com/seuss.mp4')
m3.clip.attach(io: m3_file ,filename: "seuss.mp4")



m4 = Movie.create!(
     title: "Star Beam", 
     rating: "PG", 
     description: "StarBeam saves the day and stoppes the trouble with bubbles.", 
     duration: 1.47
)

m4_file = open('https://kidflix-seeds.s3-us-west-2.amazonaws.com/starbeam.mp4')
m4.clip.attach(io: m4_file ,filename: "starbeam.mp4")



m5 = Movie.create!(
     title: "Bo On The Go!", 
     rating: "PG", 
     description: "Bo and her dragon best friend they go on adventures where they have to move all around to get to the next door.", 
     duration: 1.50
)

m5_file = open('https://kidflix-seeds.s3-us-west-2.amazonaws.com/bo.mp4')
m5.clip.attach(io: m5_file, filename: "bo.mp4")



m6 = Movie.create!(
     title: "Luo BaoBei", 
     rating: "TV-Y", 
     description: "Meet Luo Bao Bei, a spirited, imaginative 7 year old exploring and learning about her world!.", 
     duration: 2.08
)

m6_file = open('https://kidflix-seeds.s3-us-west-2.amazonaws.com/lou_baobei.mp4')
m6.clip.attach(io: m6_file, filename: "lou_baobei.mp4")



m7 = Movie.create!(
     title: "Slippery Fish", 
     rating: "TV-Y", 
     description: "Slippery fish, slippery fish Sliding through the water.", 
     duration: 1.58
)

m7_file = open('https://kidflix-seeds.s3-us-west-2.amazonaws.com/fish.mp4')
m7.clip.attach(io: m7_file, filename: "fish.mp4")



m8 = Movie.create!(
     title: "Merry Christmass", 
     rating: "PG-13", 
     description: "Christmas Song and Carol We Wish You A Merry Christmas.", 
     duration: 2.00
)

m8_file = open('https://kidflix-seeds.s3-us-west-2.amazonaws.com/wish.mp4')
m8.clip.attach(io: m8_file, filename: "wish.mp4")



m9 = Movie.create!(
     title: "Santa Claus Is Comin To Town", 
     rating: "PG-13", 
     description: "Santa Claus is Comin' to Town is a 1970 stop motion Christmas television special produced by Rankin/Bass Productions in New York, New York.", 
     duration: 2.08
)

m9_file = open('https://kidflix-seeds.s3-us-west-2.amazonaws.com/santa_claus.mp4')
m9.clip.attach(io: m9_file, filename: "santa_claus.mp4")



m10 = Movie.create!(
     title: "Time with Timmy", 
     rating: "TV-Y", 
     description: "Learning Time with Timmy is a fun and effective way for your child to learn English.", 
     duration: 1.14
)

m10_file = open('https://kidflix-seeds.s3-us-west-2.amazonaws.com/timmy.mp4')
m10.clip.attach(io: m10_file, filename: "timmy.mp4")



# Genre seeding:

Genre.destroy_all;


action = Genre.create!(title: "Action")
educational = Genre.create!(title: "Educational")
social_skills = Genre.create!(title: "Social Skills")
adventure = Genre.create!(title: "Adventure")
she_does_it = Genre.create!(title: "She Does It Her Way")

# connect the genre with movie
 Genrelink.create(movie_id: m1.id, genre_id: action.id)
 Genrelink.create(movie_id: m2.id, genre_id: action.id)
 Genrelink.create(movie_id: m4.id, genre_id: action.id)
 Genrelink.create(movie_id: m5.id, genre_id: action.id)
 Genrelink.create(movie_id: m7.id, genre_id: action.id)

 Genrelink.create(movie_id: m1.id, genre_id: educational.id)
 Genrelink.create(movie_id: m3.id, genre_id: educational.id)
 Genrelink.create(movie_id: m7.id, genre_id: educational.id)
 Genrelink.create(movie_id: m10.id, genre_id: educational.id)
 Genrelink.create(movie_id: m8.id, genre_id: educational.id)

 Genrelink.create(movie_id: m1.id, genre_id: social_skills.id)
 Genrelink.create(movie_id: m3.id, genre_id: social_skills.id)
 Genrelink.create(movie_id: m6.id, genre_id: social_skills.id)
 Genrelink.create(movie_id: m8.id, genre_id: social_skills.id)
 Genrelink.create(movie_id: m9.id, genre_id: social_skills.id)

 Genrelink.create(movie_id: m2.id, genre_id: adventure.id)
 Genrelink.create(movie_id: m4.id, genre_id: adventure.id)
 Genrelink.create(movie_id: m5.id, genre_id: adventure.id)
 Genrelink.create(movie_id: m6.id, genre_id: adventure.id)
 Genrelink.create(movie_id: m9.id, genre_id: adventure.id)


 Genrelink.create(movie_id: m2.id, genre_id: she_does_it.id)
 Genrelink.create(movie_id: m4.id, genre_id: she_does_it.id)
 Genrelink.create(movie_id: m5.id, genre_id: she_does_it.id)
 Genrelink.create(movie_id: m6.id, genre_id: she_does_it.id)
 Genrelink.create(movie_id: m9.id, genre_id: she_does_it.id)


MyList.destroy_all;

ml1 = MyList.create!(
     user_id: demo.id, 
     movie_id: m1.id
);

ml2 = MyList.create!(
     user_id: demo.id, 
     movie_id: m5.id
);

ml3 = MyList.create!(
     user_id: demo.id, 
     movie_id: m7.id
);

ml4 = MyList.create!(
     user_id: demo.id, 
     movie_id: m9.id
);

