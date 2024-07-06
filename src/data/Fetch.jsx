const TOKEN =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Njg5MDU3MjJiNWMyMDAwMTUyNzFmNDEiLCJpYXQiOjE3MjAyNTU4NTgsImV4cCI6MTcyMTQ2NTQ1OH0.n0MajeLZ6MnSCBxed4Q0foGCtYmkizfM1DfOW8f-hhE";
// GET https://striveschool-api.herokuapp.com/api/books/:asin/comments/
export const loadComments = (asin, setComments) => {
    fetch(
        `https://striveschool-api.herokuapp.com/api/books/${asin}/comments/`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: TOKEN,
            },
        }
    )
        .then((res) => res.json())
        .then((data) => setComments(data))
        // .then((data) => {console.log(data); setComments(data)})
        .catch((err) => console.log(err))
        .finally(() => console.log("finally"));
};
// POST https://striveschool-api.herokuapp.com/api/comments/:elementId con il body che trovi nella prossima slide.
export const handleSaveComment = ({ formValue }) => {
    fetch("https://striveschool-api.herokuapp.com/api/comments/", {
        method: "POST",
        body: JSON.stringify(formValue),
        headers: {
            "Content-Type": "application/json",
            Authorization: TOKEN,
        },
    })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.log(error));
};
// PUT e DELETE https://striveschool-api.herokuapp.com/api/comments/:elementId
export const editComment = (asin, edit) => {
    fetch(`https://striveschool-api.herokuapp.com/api/comments/${asin}`, {
        method: "PUT",
        body: JSON.stringify(edit),
        headers: {
            "Content-Type": "application/json",
            Authorization: TOKEN,
        },
    }).then((response) => response.json())
        .catch(console.error())
}
export const delComment = (asin, del) => {
    fetch(`https://striveschool-api.herokuapp.com/api/comments/${asin}`, {
        method: "DEL",
        body: JSON.stringify(del),
        headers: {
            "Content-Type": "application/json",
            Authorization: TOKEN,
        },
    }).then((response) => response.json())
        .catch(console.error())
}