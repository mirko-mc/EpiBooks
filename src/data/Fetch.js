const TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Njg5MDU3MjJiNWMyMDAwMTUyNzFmNDEiLCJpYXQiOjE3MjAyNTU4NTgsImV4cCI6MTcyMTQ2NTQ1OH0.n0MajeLZ6MnSCBxed4Q0foGCtYmkizfM1DfOW8f-hhE";

// GET https://striveschool-api.herokuapp.com/api/books/:asin/comments/
export const loadComments = (
  asin,
  setComments,
  setIsLoading,
  setLoadError,
  setUpdateComments
) => {
  setIsLoading(true);
  fetch(`https://striveschool-api.herokuapp.com/api/books/${asin}/comments/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: TOKEN,
    },
  })
    .then((res) => {
      if (!res.ok) throw new Error(res.status);
      return res.json();
    })
    .then((data) => {
      setComments(data);
      return setUpdateComments(false);
    })
    .catch((err) => setLoadError(`Load Error ${err.message}`))
    .finally(() => {
      return setIsLoading(false);
    });
};

// POST https://striveschool-api.herokuapp.com/api/comments/:elementId con il body che trovi nella prossima slide.
export const handleSaveComment = (
  formValue,
  setIsSaving,
  setSaveError,
  setUpdateComments
) => {
  setIsSaving(true);
  fetch("https://striveschool-api.herokuapp.com/api/comments/", {
    method: "POST",
    body: JSON.stringify(formValue),
    headers: {
      "Content-Type": "application/json",
      Authorization: TOKEN,
    },
  })
    .then((res) => {
      if (res.ok) {
        alert("Comment saved");
        setUpdateComments(true);
      } else throw new Error(res.status);
      return res.json();
    })
    .catch((err) =>
      err.message === "400"
        ? setSaveError("Fill in the fields correctly")
        : setSaveError(`Save Error ${err.message}`)
    )
    .finally(() => setIsSaving(false));
};

// PUT e DELETE https://striveschool-api.herokuapp.com/api/comments/:elementId
export const editComment = (asin, edit, setIsEditing, setEditError) => {
  setIsEditing(true);
  fetch(`https://striveschool-api.herokuapp.com/api/comments/${asin}`, {
    method: "PUT",
    body: JSON.stringify(edit),
    headers: {
      "Content-Type": "application/json",
      Authorization: TOKEN,
    },
  })
    .then((res) => {
      res.ok && alert("Comment edited");
      if (!res.ok) throw new Error(res.status);
      return res.json();
    })
    .catch((err) =>
      err.message === "400"
        ? setEditError("Fill in the fields correctly")
        : setEditError(`Edit Error ${err.message}`)
    )
    .finally(() => setIsEditing(false));
};

export const delComment = (
  asin,
  setIsDeleting,
  setDelError,
  setUpdateComments
) => {
  setIsDeleting(true);
  fetch(`https://striveschool-api.herokuapp.com/api/comments/${asin}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: TOKEN,
    },
  })
    .then((res) => {
      res.ok && alert("Comment deleted");
      if (!res.ok) throw new Error(res.status);
      return setUpdateComments(false);
    })
    .catch((err) =>
      err.message === "400"
        ? setDelError("Fill in the fields correctly")
        : setDelError(`Delete Error ${err.message}`)
    )
    .finally(() => setIsDeleting(false));
};
