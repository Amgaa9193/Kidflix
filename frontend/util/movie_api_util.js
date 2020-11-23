export const getMovies = () => {
    return $.ajax({
        method: "GET",
        url: "/api/movies"
    })
};

export const getMovie = id => {
    return $.ajax({
        method: "GET",
        url: `/api/movies/${id}`
    })
};