import * as firebase from "firebase";

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

function updateUserData(mail) {
  let user = new Object();
  firebase
    .database()
    .ref(`users/user_${mail.split("@")[0]}`)
    .on("value", (snapshot) => {
      const temp = snapshot.val();
      user = temp
    });
  return user;
}
function getCurrentUser() {
  const user = updateUserData(firebase.auth().currentUser.email);
  return user;
}

function getUserPosts(mail) {
  let postsArray = new Object();
  firebase
    .database()
    .ref(`users/user_${mail.split("@")[0]}/posts`)
    .on("value", (snapshot) => {
      const posts = snapshot.val();
      postsArray = posts

    });
  return postsArray;
  
}

function uploadUserPost(caption, privacy, type, image) {
  const user = getCurrentUser();
  firebase
    .database()
    .ref(
      `users/user_${user.regNo.toLowerCase()}/posts/post_${user.regNo
        .toLowerCase()
        .replace(/-/g, "")}_${user.posts_count + 1}`
    )
    .update({
      caption: caption,
      owner: user.name,
      privacy: privacy,
      type: type,
      image: image,
      timestamp: "05/10/2021",
      likes_count: 0,
      comments_count: 0,
    });

  firebase
    .database()
    .ref(`users/user_${user.regNo.toLowerCase()}`)
    .update({
      posts_count: user.posts_count + 1,
    });
}
export default {
  storeUserData,
  updateUserData,
  getCurrentUser,
  uploadUserPost,
  getUserPosts,
};
