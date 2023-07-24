// Main Variables

let theInput = document.querySelector("input");
let getButton = document.querySelector(".get-button");
let reposData = document.querySelector(".show-data");

// Get Repos Function

getButton.onclick = function () {
  getRepos();
};

function getRepos() {
  if (theInput.value === "") {
    reposData.innerHTML = "<span>Please Enter a Github UserName.</span>";
  } else {
    fetch(`https://api.github.com/users/${theInput.value}/repos`)
      .then((response) => {
        return response.json();
      })
      .then((repositories) => {
        // Empty the Container
        reposData.innerHTML = "";
        window.console.clear();

        // Loop On Repositories
        repositories.forEach((repo) => {
          // Create The Main Div Element
          let mainDiv = document.createElement("div");

          // Create Repo Name Text
          let repoName = document.createTextNode(repo.name);

          // Append Repo Name to the Main Div
          mainDiv.appendChild(repoName);

          // Create Repo Url "Anchor"
          let theUrl = document.createElement("a");

          // Create Repo Url text
          let urlText = document.createTextNode("Visit");

          // Append the Url text to the Repo Url
          theUrl.appendChild(urlText);

          // Add the href to to theUrl
          theUrl.href = `https://github.com/${theInput.value}/${repo.name}`;

          // Set Attribute Blank
          theUrl.setAttribute("target", "_blank");

          // Append the Url to the MainDiv
          mainDiv.appendChild(theUrl);

          // Create Stars Count Span
          let starsSpan = document.createElement("span");

          // Create Starts count Text
          let starsText = document.createTextNode(
            `Stars ${repo.stargazers_count}`
          );

          // Append stars Count text to the stars span
          starsSpan.appendChild(starsText);

          // Append Stars Span to the Main Div
          mainDiv.appendChild(starsSpan);

          // Add Class ON Main Div
          mainDiv.className = "repo-box";

          // Append the Main Div to the reposData
          reposData.appendChild(mainDiv);
        });
      });
  }
}

// Go to "jsonplaceholder Website" and train YourSelf.  "Important"
