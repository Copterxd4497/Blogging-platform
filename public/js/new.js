document.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector("#title");
  const author = document.querySelector("#author");
  const content = document.querySelector("#content");

  document.querySelector(".button").addEventListener("click", (event) => {
    event.preventDefault();
    sendData(title, author, content);
  });

  function sendData(title, author, content) {
    fetch("/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title.value,
        author: author.value,
        content: content.value,
      }),
    })
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          alert("Post blog successful!");
          window.location.href = "/";
        } else {
          return response.text().then((text) => {
            alert("Failed to post blog: " + text);
          });
        }
      })
      .catch((error) => console.error("Error:", error));
  }
});
