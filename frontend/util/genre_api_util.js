export const getGenres = () => {
    return $.ajax({
        method: "GET",
        url: `/api/genres`
    })
};



export const getGenre = id => {
    return $.ajax({
        method: "GET",
        url: `/api/genres/${id}`
    })
};