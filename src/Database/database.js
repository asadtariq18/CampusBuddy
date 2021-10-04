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

function getUserData(mail) {
  const user = new Object();
  firebase
    .database()
    .ref(`users/user_${mail.split("@")[0]}`)
    .on("value", (snapshot) => {
      const temp = snapshot.val();
      user.name = temp.name;
      user.mail = temp.mail;
      user.regNo = temp.regNo;
      user.gender = temp.gender;
      user.popularity = temp.popularity;
      user.profile_picture = temp.profile_picture;
      user.posts_count = temp.posts_count;
      user.friends_count = temp.friends_count;
      user.posts = temp.posts;
    });
  return user;
}
function getCurrentUser() {
  const user = getUserData(firebase.auth().currentUser.email);
  return user
}

export default { storeUserData, getUserData, getCurrentUser };
