export const getMyLists = () => {
    return $.ajax({
        method: "GET",
        url: `/api/my_lists`
    })
};

export const postMyList = (movieId) => {
    return $.ajax({
        method: "POST",
        url: '/api/my_lists',
        // data: {movieId: movieId}
        data: {my_list: {movie_id: movieId}}
    })
}

export const deleteMyList = (mylistId) => {
    return $.ajax({
        method: "DELETE",
        url: `/api/my_lists/${mylistId}`
    })
}
