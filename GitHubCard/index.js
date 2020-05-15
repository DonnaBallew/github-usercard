/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
const mainCard = document.querySelector(".cards");
const getPromise = axios.get("https://api.github.com/users/DonnaBallew");
// console.log("getPromise", getPromise);

/*
const getFollowers = axios.get(
  "https://api.github.com/users/DonnaBallew/followers"
);
console.log("getFollowers", getFollowers);
*/

getPromise
  .then((response) => {
    console.log(response.data);
    const myData = createCard(response.data);
    mainCard.appendChild(myData);
  })
  .catch((error) => {
    console.log("Oops! No info found.", error);
  });

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function createCard(info) {
  // create elements
  const card = document.createElement("div");
  const userImg = document.createElement("img");
  const cardInfo = document.createElement("div");
  const name = document.createElement("h3");
  const userName = document.createElement("p");
  const location = document.createElement("p");
  const profile = document.createElement("p");
  const link = document.createElement("a");
  const followers = document.createElement("p");
  const following = document.createElement("p");
  const bio = document.createElement("p");

  // structure
  card.appendChild(userImg);
  card.appendChild(cardInfo);
  cardInfo.appendChild(name);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  cardInfo.appendChild(link);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);

  // set class names
  card.classList.add("card");
  cardInfo.classList.add("card-info");
  name.classList.add("name");
  userName.classList.add("username");

  // add content
  userImg.src = info.avatar_url;
  name.textContent = `Name: ${info.name}`;
  userName.textContent = `Username: ${info.login}`;
  location.textContent = `Location: ${info.location}`;
  profile.textContent = `Profile: `;
  link.textContent = `Visit my GitHub: `;
  link.setAttribute("href", info.html_url);
  followers.textContent = `Followers: ${info.followers}`;
  following.textContent = `Following: ${info.following}`;
  bio.textContent = `About Me: ${info.bio}`;

  console.log("card", card);

  return card;
}

const followersArray = [
  "https://api.github.com/users/tetondan",
  "https://api.github.com/users/dustinmyers",
  "https://api.github.com/users/luishrd",
  "https://api.github.com/users/bigknell",
  "https://api.github.com/users/marksayers46",
  "https://api.github.com/users/kmilliner888",
  "https://api.github.com/users/rbabaci1",
  "https://api.github.com/users/schoell411",
];

followersArray.map((element) => {
  axios
    .get(element)
    .then((response) => {
      // console.log(response.data);
      const followersData = createCard;
      mainCard.appendChild(followersData(response.data));
    })
    .catch((error) => {
      console.log("Oops! No info found.", error);
    });
});

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
