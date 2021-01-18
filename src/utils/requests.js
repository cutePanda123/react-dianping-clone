const headers = new Headers({
  Accept: "application/json",
  "Content-Type": "application/json",
});

function get(url) {
  return fetch(url, {
    method: "GET",
    headers: headers,
  })
    .then((response) => {
      handleResponse(url, response);
    })
    .catch((err) => {
      console.error(`Request failed. URL = ${url} Message=${err}`);
      return Promise.reject({ error: { message: "Requrest failed" } });
    });
}

function post(url, data) {
  return fetch(url, {
    method: "POST",
    headers: headers,
    body: data,
  })
    .then((response) => {
      handleResponse(url, response);
    })
    .catch((err) => {
      console.error(`Request failed. URL = ${url} Message=${err}`);
      return Promise.reject({ error: { message: "Requrest failed" } });
    });
}

function handleResponse(url, response) {
  if (response.status === 200) {
    return response.json();
  }
  console.error(`Request failed. URL = ${url}`);
  return Promise.reject({ error: { message: "Requrest failed" } });
}

export { get, post };
