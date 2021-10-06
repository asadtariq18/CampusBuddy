import * as firebase from "firebase";
import moment from "moment";

function storeUserData(firstName, lastName, mail, gender) {
  firebase
    .database()
    .ref(`users/user_${mail.split("@")[0]}`)
    .update({
      name: firstName + " " + lastName,
      regNo: mail.split("@")[0].toUpperCase(),
      mail: mail,
      gender: gender,
      profile_picture:
        gender === "Female"
          ? "https://www.terrainhopperusa.com/wp-content/uploads/2019/01/avatar-woman.png"
          : "https://www.terrainhopperusa.com/wp-content/uploads/2019/01/avatar-man.png",
      popularity: 0,
      friends_count: 0,
      posts_count: 0,
    });
}
function updateProfile_Picture(mail, image) {
  firebase
    .database()
    .ref(`users/user_${mail.split("@")[0]}`)
    .update({
      profile_picture: image,
    });
}

function getUpdatedUserData(mail) {
  let user = new Object();
  firebase
    .database()
    .ref(`users/user_${mail.split("@")[0]}`)
    .on("value", (snapshot) => {
      const temp = snapshot.val();
      user = temp;
    });
  return user;
}
function getCurrentUser() {
  const user = getUpdatedUserData(firebase.auth().currentUser.email);
  return user;
}

function getUserPosts(mail) {
  let postsArray = new Object();
  postsArray = getUpdatedUserData(mail).posts;
  return postsArray;
}
// const uploadImage = async ({image}) => {
//   const [uploading, setUploading] = React.useState(false);
//   const blob = await new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.onload = function () {
//       resolve(xhr.response);
//     };
//     xhr.onerror = function () {
//       reject(new TypeError("Network request failed"));
//     };
//     xhr.responseType = "blob";
//     xhr.open("GET", image, true);
//     xhr.send(null);
//   });

//   const ref = firebase.storage().ref().child(new Date().toISOString);
//   snapshot.on(
//     firebase.storage.TaskEvent.STATE_CHANGED,
//     () => {
//       setUploading(true);
//     },
//     (error) => {
//       setUploading(false);
//       console.log(error);
//       blob.close();
//       return;
//     },
//     () => {
//       snapshot.snapshot.ref.getDownloadURL().then((url) => {
//         console.log("URL: ", url);
//         setUploading(false);
//         blob.close();
//         return uri;
//       });
//     }
//   );
// };

function uploadUserPost(caption, privacy, type, image) {
  const user = getCurrentUser();
  let timestamp = moment().format("YYYY/MM/D hh:mm");

  firebase
    .database()
    .ref(
      `users/user_${user.regNo.toLowerCase()}/posts/post_${user.regNo
        .toLowerCase()
        .replace(/-/g, "")}_${moment().format("YYYYMMDhhmmss")}`
    )
    .update({
      mail: user.mail,
      caption: caption,
      owner: user.name,
      privacy: privacy,
      type: type,
      image: image,
      timestamp: timestamp,
      likes_count: 0,
      comments_count: 0,
    });

  firebase
    .database()
    .ref(`users/user_${user.regNo.toLowerCase()}`)
    .update({
      posts_count: user.posts_count + 1,
      popularity: user.popularity + 3,
    });
}
export default {
  storeUserData,
  getUpdatedUserData,
  getCurrentUser,
  uploadUserPost,
  getUserPosts,
  updateProfile_Picture,
};
