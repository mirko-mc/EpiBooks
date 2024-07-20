const TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Njg5MDU3MjJiNWMyMDAwMTUyNzFmNDEiLCJpYXQiOjE3MjE0ODYxMjksImV4cCI6MTcyMjY5NTcyOX0.IZvaEntzLURc15eVD19Wwta-oiacR-Z12IzZe-15HP8";
const URLFETCH = "https://striveschool-api.herokuapp.com/api/";
// GET https://striveschool-api.herokuapp.com/api/books/:asin/comments/
export const loadComments = async (asin) => {
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
};

// POST https://striveschool-api.herokuapp.com/api/comments/:elementId con il body che trovi nella prossima slide.
export const saveComment = async (formValue) => {
  const res = await fetch(`${URLFETCH}comments/`, {
    method: "POST",
    body: JSON.stringify(formValue),
    headers: {
      "Content-Type": "application/json",
      Authorization: TOKEN,
    },
  });
  if (!res.ok) throw new Error(res.status);
  return res.json();
};

// PUT e DELETE https://striveschool-api.herokuapp.com/api/comments/:elementId
export const editComment = async (asin, edit) => {
  const res = await fetch(`${URLFETCH}comments/${asin}`, {
    method: "PUT",
    body: JSON.stringify(edit),
    headers: {
      "Content-Type": "application/json",
      Authorization: TOKEN,
    },
  });
  if (!res.ok) throw new Error(res.status);
  return res.json();
};

export const delComment = async (asin) => {
  const res = await fetch(`${URLFETCH}comments/${asin}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: TOKEN,
    },
  });
  if (!res.ok) throw new Error(res.status);
  return res.json();
};
