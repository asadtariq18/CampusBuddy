import * as firebase from "firebase";
import moment from "moment";

function storeUserData(firstName, lastName, mail, gender) {
  firebase
    .database()
    .ref(`db/users/user_${mail.split("@")[0]}`)
    .update({
      name: firstName + " " + lastName,
      userID: mail.split("@")[0],
      mail: mail,
      gender: gender,
      avatar:
        gender === "Female"
          ? "https://www.terrainhopperusa.com/wp-content/uploads/2019/01/avatar-woman.png"
          : "https://www.terrainhopperusa.com/wp-content/uploads/2019/01/avatar-man.png",
      popularity: 0,
      friends_count: 0,
      posts_count: 0,
    });
}
function updateProfile(data) {
  const mail = getCurrentUser().mail;
  firebase
    .database()
    .ref(`db/users/user_${mail.split("@")[0]}`)
    .update({
      avatar: data.image,
      bio: data.bio,
    });
}

function getUpdatedUserData(mail) {
  let user = new Object();
  firebase
    .database()
    .ref(`db/users/user_${mail.split("@")[0]}`)
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
function getUserPosts(userID) {
  let posts = new Object();
  firebase
    .database()
    .ref(`db/posts`)
    .on("value", (snapshot) => {
      const temp = snapshot.val();
      posts = temp;
    });
  return posts;
}

function getPosts() {
  let posts = new Object();
  firebase
    .database()
    .ref(`db/posts`)
    .on("value", (snapshot) => {
      const temp = snapshot.val();
      posts = temp;
    });
  return posts;
}
function likeAction(likes_count, postID) {
  console.log(postID);
  firebase.database().ref(`db/posts/${postID}`).update({
    likes_count: likes_count,
  });
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

function uploadUserStory(image) {
  const user = getCurrentUser();
  let timestamp = moment().format("YYYY/MM/D hh:mm");

  firebase
    .database()
    .ref(
      `db/stories/story_${user.regNo
        .toLowerCase()
        .replace(/-/g, "")}_${moment().format("YYYYMMDDhhmmss")}`
    )
    .update({
      userID: user.mail.split("@")[0],
      owner: user.name,
      image: image,
      timestamp: timestamp,
      views: 0,
    });
}

function uploadUserPost(caption, privacy, type, image) {
  console.log("database 1");
  const user = getCurrentUser();
  let timestamp = moment().format("YYYY/MM/D hh:mm");

  firebase
    .database()
    .ref(
      `db/posts/post_${user.regNo
        .toLowerCase()
        .replace(/-/g, "")}_${moment().format("YYYYMMDDhhmmss")}`
    )
    .update({
      mail: user.mail,
      userID: user.mail.split("@")[0],
      postID: `post_${user.regNo
        .toLowerCase()
        .replace(/-/g, "")}_${moment().format("YYYYMMDDhhmmss")}`,
      caption: caption,
      owner: user.name,
      privacy: privacy,
      type: type,
      image: image,
      timestamp: timestamp,
      likes_count: 0,
      comments_count: 0,
    });
console.log("database 2")
  firebase
    .database()
    .ref(`db/users/user_${user.regNo.toLowerCase()}`)
    .update({
      posts_count: user.posts_count + 1,
      popularity: user.popularity + 3,
    });
}

function uploadDonationHistory(cardDetails, amount) {
  try {
    const user = getCurrentUser();
    let timestamp = moment().format("YYYY/MM/D hh:mm");

    firebase
      .database()
      .ref(
        `db/donation_history/donation_${user.regNo
          .toLowerCase()
          .replace(/-/g, "")}_${moment().format("YYYYMMDDhhmmss")}`
      )
      .update({
        userID: user.mail.split("@")[0],
        cardDetails: cardDetails,
        amount: amount,
        timestamp: timestamp,
      });
  } catch (error) {
    console.log(error);
  }
}

function searchUsers() {
  let users = new Object();
  try {
    firebase
      .database()
      .ref(`db/users`)
      .on("value", (snapshot) => {
        let temp = snapshot.val();
        users = temp;
      });
    return users;
    console.log(users)
  } catch (error) {
    console.log(error);
  }
}

export default {
  storeUserData,
  getUpdatedUserData,
  getCurrentUser,
  uploadUserPost,
  likeAction,
  uploadUserStory,
  getPosts,
  searchUsers,
  getUserPosts,
  updateProfile,
  uploadDonationHistory,
};
