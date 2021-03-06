// Eindopdracht Pascal Pater
// Javascript Async/API - ToDo List


const apiUrl = "http://localhost:3000/";

// use async/await to fetch data from api
// use according to api documentation

// GET
const getData = async () => {
  const apiEndpoint = apiUrl;
  try {
    const res = await fetch(apiEndpoint, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("The following went wrong: ", error);
  }
};

// POST
const postData = async (data) => {
  const apiEndpoint = apiUrl;
  try {
    await fetch(apiEndpoint, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log("The following went wrong: ", error);
  }
};

// DELETE
const deleteData = async (id) => {
  const apiEndpoint = apiUrl + id;
  try {
    await fetch(apiEndpoint, {
      method: "DELETE",
    });
  } catch (error) {
    console.log("The following went wrong: ", error);
  }
};

// PUT
const updateData = async (id, data) => {
  const apiEndpoint = apiUrl + id;
  try {
    await fetch(apiEndpoint, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log("The following went wrong: ", error);
  }
};
