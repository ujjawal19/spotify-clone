// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#authenticating-with-spotify

//click to login button for authorization
export const authEndPoint = "https://accounts.spotify.com/authorize";

//Redirect to spotify login page
const redirectUri = "http://localhost:3000/"

//we created that in devloper option
const clientId= "c27c2987f10f49c180d59ab40cb118f1"

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
  ];

  export const loginUrl = `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;
