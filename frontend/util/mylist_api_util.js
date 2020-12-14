export const getMyLists = () => {
    return $.ajax({
        method: "GET",
        url: `/api/my_lists`
    })
};

export const postMyList = (mylist) => {
    return $.ajax({
        method: "POST",
        url: '/api/my_lists',
        data: {mylist: mylist}
    })
}

export const deleteMyList = (mylistId) => {
    return $.ajax({
        method: "DELETE",
        url: `/api/my_lists/${mylistId}`
    })
}
