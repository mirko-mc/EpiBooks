const TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Njg5MDU3MjJiNWMyMDAwMTUyNzFmNDEiLCJpYXQiOjE3MjAyNTU4NTgsImV4cCI6MTcyMTQ2NTQ1OH0.n0MajeLZ6MnSCBxed4Q0foGCtYmkizfM1DfOW8f-hhE";
const URLFETCH = "https://striveschool-api.herokuapp.com/api/";
// GET https://striveschool-api.herokuapp.com/api/books/:asin/comments/
export const loadComments = async (asin) => {
  try {
    const res = await fetch(`${URLFETCH}books/${asin}/comments/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: TOKEN,
      },
    });
    if (!res.ok) throw new Error(res.status);
    const data = await res.json();
    return data;
  } catch (err) {
    alert(`Load Error ${err.message}`);
  }
};

// POST https://striveschool-api.herokuapp.com/api/comments/:elementId con il body che trovi nella prossima slide.
export const saveComment = async (formValue) => {
  try {
    const res = await fetch(`${URLFETCH}comments/`, {
      method: "POST",
      body: JSON.stringify(formValue),
      headers: {
        "Content-Type": "application/json",
        Authorization: TOKEN,
      },
    });
    if (res.ok) alert("Comment saved");
    else throw new Error(res.status);
    return res.json();
  } catch (err) {
    err.message === "400"
      ? alert("Fill in the fields correctly")
      : alert(`Save Error ${err.message}`);
  }
};

// PUT e DELETE https://striveschool-api.herokuapp.com/api/comments/:elementId
export const editComment = async (asin, edit) => {
  try {
    const res = await fetch(`${URLFETCH}comments/${asin}`, {
      method: "PUT",
      body: JSON.stringify(edit),
      headers: {
        "Content-Type": "application/json",
        Authorization: TOKEN,
      },
    });
    res.ok && alert("Comment edited");
    if (!res.ok) throw new Error(res.status);
    return res.json();
  } catch (err) {
    err.message === "400"
      ? alert("Fill in the fields correctly")
      : alert(`Edit Error ${err.message}`);
  }
};

export const delComment = async (asin) => {
  try {
    const res = await fetch(`${URLFETCH}comments/${asin}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: TOKEN,
      },
    });
    res.ok && alert("Comment deleted");
    if (!res.ok) throw new Error(res.status);
    return res.json();
  } catch (err) {
    err.message === "400"
      ? alert("Fill in the fields correctly")
      : alert(`Delete Error ${err.message}`);
  }
};
