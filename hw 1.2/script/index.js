
const input = document.querySelector("#inp1"); 
const button = document.querySelector(".searche"); 
const div = document.querySelector('.user-info')
const API = "https://api.github.com/users/"; 

const getUser = async (username) => {
  const url = API + username; 

  try {
    const req = await fetch(url);

  
    if (!req.ok) {
      throw new Error("Пользователь не найден");
    }

 
    const res = await req.json();

  
    renderUser(res);
  } catch (error) {
    console.error(error);
    alert(error.message); 
};
}
const renderUser = (user) => {
  console.log(user); 
};


button.addEventListener("click", () => {
  const username = input.value.trim(); 
  if (username) {
    getUser(username); 
  } else {
    alert("Пожалуйста, введите имя пользователя"); 
  }

  const user_info = (userInfo) => {
    const url_profile = document.createElement("a");
    url_profile.href = userInfo.html_url;

    const avatar = document.createElement("img");
    avatar.src = userInfo.avatar_url;
    avatar.alt = userInfo.login;
    avatar.style.width = "300px";

    url_profile.append(avatar);

    // =====
    const name = document.createElement("h2");
    name.textContent = `Name: ${userInfo.name}`;

    const userLogin = document.createElement("b");
    userLogin.textContent = `Login: ${userInfo.login}`;

    const userLocation = document.createElement("p");
    userLocation.textContent = `Location: ${userInfo.location}`;

    const followersDiv = document.createElement("div");
    followersDiv.classList.add("followersDiv");
    const followers = document.createElement("p");
    followers.textContent = `Followers: ${userInfo.followers}`;

    const following = document.createElement("p");
    following.textContent = `Following: ${userInfo.following}`;

    followersDiv.append(followers, following);

    const infoText = document.createElement("p");
    infoText.textContent = "Чтобы перейти нажмите на аватарку"``;
  };
});

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    button.click(); 
  }
});
