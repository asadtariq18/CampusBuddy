import React, { useEffect } from "react";
import moment from "moment";
import Firebase from "../config/Firebase";
import "firebase/firestore";
import database from "@react-native-firebase/database";
import * as firebase from "firebase";

const db = firebase.firestore();
const auth = Firebase.auth();
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
async function updateProfile(data) {
  const mail = getCurrentUser().mail;
  console.log(data.image);

  const imageURL = await uploadImage(data.image);
  firebase
    .database()
    .ref(`db/users/user_${mail.split("@")[0]}`)
    .update({
      avatar: imageURL,
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
  const user = getUpdatedUserData(auth.currentUser.email);
  return user;
}
function getUser(userID) {
  let user =  {};
  firebase
    .database()
    .ref(`db/users/user_${userID}`)
    .on("value", (snapshot) => {
      const temp = snapshot.val();
      user = temp;
    });
  return user;
}
function getUserPosts(userID) {
  let posts = new Object();
  firebase
    .database()
    .ref(`db/posts/${userID}`)
    .on("value", (snapshot) => {
      const temp = snapshot.val();
      posts = temp;
    });
  return posts;
}
function getDonationPosts() {
  let posts = new Object();
  try {
    firebase
      .database()
      .ref(`db/donations`)
      .on("value", (snapshot) => {
        let temp = snapshot.val();
        posts = temp;
      });
    return posts;
  } catch (error) {
    console.log(error);
  }
}

function getPosts() {
  let posts = new Object();
  try {
    firebase
      .database()
      .ref(`db/posts`)
      .on("value", (snapshot) => {
        let temp = snapshot.val();
        posts = temp;
      });
    return posts;
  } catch (error) {
    console.log(error);
  }
}
function isPostExist(postID) {
  let posts = getPosts();
  let res = false;
  Object.values(posts).forEach((post) => {
    if (post.postID === postID) res = true;
  });
  return res;
}

function isFriend(userID) {
  const self = getCurrentUser();
  if (self.friendsList[userID]) return true;
  return false;
}

function isFriendRequestReceived(userID) {
  const self = getCurrentUser();
  if (self.friendRequests[`${userID}`]) {
    return true;
  }
  return false;
}

function isFriendRequestSent(userID) {
  const self = getCurrentUser();
  let requests = new Object();
  let result = false

  try {
    firebase
      .database()
      .ref(`db/users/user_${userID}`)
      .on("value", (snapshot) => {
        let temp = snapshot.val();
        if (temp) {
          requests = temp.friendRequests;
          if (requests[self.userID]) {
            result = true;
          } else {
            result = false;
          }
        }
      });
    return result;
  } catch (error) {
    console.log(error);
  }
}

function acceptFriendRequest(userID) {
  const self = getCurrentUser();
  const user = getUser(userID);
  firebase
    .database()
    .ref(`db/users/user_${userID}/friendsList/${self.userID}/`)
    .update({
      userID: self.userID,
      name: self.name,
    });
  firebase
    .database()
    .ref(`db/users/user_${self.userID}/friendsList/${userID}`)
    .update({
      userID: userID,
      name: user.name,
    });

  firebase
    .database()
    .ref(`db/users/user_${userID}/friendsList/${self.userID}/`)
    .update({
      userID: self.userID,
    });
  firebase
    .database()
    .ref(`db/users/user_${self.userID}/friendsList/${userID}`)
    .update({
      userID: userID,
    });
}
function removeFriendRequest(userID) {
  console.log("removeedddddddd");
  const self = getCurrentUser();
  firebase
    .database()
    .ref(`db/users/user_${userID}/friendRequests/${self.userID}`)
    .remove();
}
function sendFriendRequest(userID) {
  let timestamp = moment().format("YYYYMMDDHHmmss");
  const self = getCurrentUser();
  const notificationText = "sent you a friend request";
  firebase
    .database()
    .ref(`db/users/user_${userID}/friendRequests/${self.userID}`)
    .update({
      userID: self.userID,
      name: self.name,
      image: self.avatar,
    });
  sendNotification(userID, timestamp, notificationText);
}

function deleteAccount() {
  // try {
  // let userID = getCurrentUser().userID;
  // var user = firebase.auth().currentUser;
  // user
  //   .delete().then(function () {
  //     console.log("Account Deleted")
  //   })
  //       // firebase.database().ref(`db/users/user_${userID}`).remove();
  //       // firebase
  //       //   .database()
  //       //   .ref(`db/FoodOrders/customers/${userID}`)
  //       //   .remove();
  //       // firebase.database().ref(`db/stories/${userID}`).remove();
  //       // firebase
  //       //   .database()
  //       //   .ref(`db/posts`)
  //       //   .on("child_added", (snapshot) => {
  //       //     const post = snapshot.val();
  //       //     if (post.postID.includes(userID)) {
  //       //       console.log(post.postID);
  //       //       firebase.database().ref(`db/posts/${post.postID}`).remove();
  //       //     }
  //       //     // auth.signOut();
  //       //   });
  //     } catch (error) {
  //       auth.reauthenticateWithCredential()
  //       console.log(error);
  //     }
}

function check() {
  firebase
    .database()
    .ref(`db/posts`)
    .on("child_added", (snapshot) => {
      const post = snapshot.val();
      if (post.postID.includes("asadtariq070")) {
        console.log(post.postID);
      }
    });
}
function sendNotification(userID, timestamp, notificationText) {
  const self = getCurrentUser();
  firebase
    .database()
    .ref(
      `db/users/user_${userID}/notifications/${self.userID
        .toLowerCase()
        .replace(/-/g, "")}_${moment().format("YYYYMMDDHHmmss")}`
    )
    .update({
      userID: self.userID,
      notification: notificationText,
      timestamp: timestamp,
    });
}
function addToChatList(chatID, userID, lastMessage) {
  const self = getCurrentUser();
  let timestamp = moment().format("YYYYMMDDhhmmss");
  firebase
    .database()
    .ref(`db/users/user_${self.userID}/chatList/${chatID}`)
    .update({
      userID: userID,
      chatID: chatID,
      timestamp: timestamp,
      lastMessage: lastMessage,
    });

  firebase.database().ref(`db/users/user_${userID}/chatList/${chatID}`).update({
    userID: self.userID,
    chatID: chatID,
    timestamp: timestamp,
    lastMessage: lastMessage,
  });
}
function getChatList() {
  let chatList = getCurrentUser().chatList;
  return chatList;
}

function getUsers() {
  let filteredResults = [];
  let selfID = getCurrentUser().userID
  let query =""
  if(selfID){
    query = selfID.split("-")[1]
  }
  firebase
    .database()
    .ref(`db/users`)
    .on("value", (snapshot) => {
      const u = snapshot.val();
      let users = u;
      if (users) {
        filteredResults = Object.values(users).filter(function (obj) {
          if (
            !isFriend(obj.userID) &&
            !isFriendRequestReceived(obj.userID) &&
            !isFriendRequestSent(obj.userID) &&
            selfID !== obj.userID
          ) {
            return obj.userID.includes(query);
          }
        });
      }
    });
  return filteredResults;
}

function getFriends(userID) {
  let friendsList;
  firebase
    .database()
    .ref(`db/users/user_${userID}`)
    .on("value", (snapshot) => {
      const u = snapshot.val();
      friendsList = u.friendsList;
    });
  return friendsList;
}

function getStoryViews(storyID, userID) {
  let viewsList;
  firebase
    .database()
    .ref(`db/stories/${userID}/${storyID}/`)
    .on("value", (snapshot) => {
      const s = snapshot.val();
      viewsList = s.viewers;
    });
  return viewsList;
}
function storyViewed(storyID, userID) {
  console.log(storyID);
  let viewers = [];
  firebase
    .database()
    .ref(`db/stories/${userID}/stories/${storyID}`)
    .on("value", (snapshot) => {
      const story = snapshot.val();
      if (story.views) {
        viewers = Object.values(story.views);
      }
    });
  viewers.push(userID);
  firebase.database().ref(`db/stories/${userID}/stories/${storyID}`).update({
    views: viewers,
  });
}

function getNotifications() {
  let notifications = getCurrentUser().notifications;
  let notificationList = []
  if(notifications){
    notificationList = Object.values(notifications)
  }else{
    notificationList = null;
  }
  console.log(notificationList)
  return notificationList

}

function likeAction(likes_count, postID) {
  firebase.database().ref(`db/posts/${postID}`).update({
    likes_count: likes_count,
  });
}

function uploadComment(postID, commentText) {
  let timestamp = moment().format("YYYYMMDDHHmmss");
  let user = getCurrentUser();
  let commentID = `${user.userID}${timestamp}`;
  firebase.database().ref(`db/posts/${postID}/comments/${commentID}`).update({
    commentID: commentID,
    userID: user.userID,
    userName: user.name,
    commentText: commentText,
    timestamp: timestamp,
  });
}

function getComments(postID) {
  let commentsArray;
  firebase
    .database()
    .ref(`db/posts/${postID}`)
    .on("value", (snapshot) => {
      const p = snapshot.val();
      if (p.comments) {
        commentsArray = Object.keys(p.comments).map(function (_) {
          return p.comments[_];
        });
      }
    });
  return commentsArray;
}
const uploadImage = async (uri) => {
  let timestamp = moment().format("YYYYMMDDHHmmss");
  const response = await fetch(uri);
  const blob = await response.blob();
  const ref = firebase
    .storage()
    .ref()
    .child("image" + timestamp);
  const snapshot = await ref.put(blob);
  blob.close();

  const url = await snapshot.ref
    .getDownloadURL()
    .then((result) => {
      return result;
    })
    .catch((error) => console.log(error));

  return url;
};

async function uploadUserStory(image) {
  const user = getCurrentUser();
  let timestamp = moment().format("YYYYMMDDHHmmss");
  let imageURL = await uploadImage(image);
  firebase
    .database()
    .ref(`db/stories/${user.userID.toLowerCase()}`)
    .update({
      user: {
        userID: user.userID,
        lastStoryTime: timestamp,
      },
    });

  firebase
    .database()
    .ref(`db/stories/${user.userID.toLowerCase()}/stories/`)
    .update({
      [`story${timestamp}`]: {
        id: "story" + timestamp,
        imageUri: imageURL,
        postedAt: timestamp,
        viewers: null,
      },
    });
}

function getUserStories() {
  let userStoriesList;
  firebase
    .database()
    .ref(`db/stories/`)
    .on("value", (snapshot) => {
      const userStories = snapshot.val();
      if (userStories) {
        userStoriesList = Object.keys(userStories).map(function (_) {
          return userStories[_];
        });
      }
    });
  return userStoriesList;
}

function uploadDonationPost(bankName, accountTitle, accountNumber, description) {
  const user = getCurrentUser();
  let timestamp = moment().format("YYYYMMDDHHmmss");

  firebase
    .database()
    .ref(
      `db/donations/post_${user.userID
        .toLowerCase()
        .replace(/-/g, "")}_${timestamp}`
    )
    .update({
      bankName: bankName,
      accountTitle: accountTitle,
      userID: user.userID,
      postID: `post_${user.userID
        .toLowerCase()
        .replace(/-/g, "")}_${timestamp}`,
      description: description,
      name: user.name,
      accountNumber: accountNumber,
      timestamp: timestamp,
    });
}

async function uploadUserPost(caption, privacy, type, image) {
  const user = getCurrentUser();
  let timestamp = moment().format("YYYYMMDDHHmmss");
  const imageURL = await uploadImage(image);

  firebase
    .database()
    .ref(
      `db/posts/post_${user.userID
        .toLowerCase()
        .replace(/-/g, "")}_${moment().format("YYYYMMDDHHmmss")}`
    )
    .update({
      mail: user.mail,
      userID: user.mail.split("@")[0],
      postID: `post_${user.userID
        .toLowerCase()
        .replace(/-/g, "")}_${moment().format("YYYYMMDDHHmmss")}`,
      caption: caption,
      owner: user.name,
      privacy: privacy,
      type: type,
      image: imageURL,
      timestamp: timestamp,
      likes_count: 0,
      comments_count: 0,
    });

  firebase
    .database()
    .ref(`db/users/user_${user.userID.toLowerCase()}`)
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
        `db/donation_history/donation_${user.userID
          .toLowerCase()
          .replace(/-/g, "")}_${moment().format("YYYYMMDDHHmmss")}`
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
function setOrderStatus(orderID, cafeID) {
  console.log(orderID);
  console.log(cafeID);
  try {
    const user = getCurrentUser();
    firebase.database().ref(`db/FoodOrders/cafes/${cafeID}/${orderID}`).update({
      status: "Completed",
    });
    firebase
      .database()
      .ref(`db/FoodOrders/customers/${user.userID}/${orderID}`)
      .update({
        status: "Completed",
      });
  } catch (error) {
    console.log(error);
  }
}

function deletePost(postID) {
  try {
    const user = getCurrentUser();
    firebase.database().ref(`db/posts/${postID}`).remove();

    firebase
      .database()
      .ref(`db/users/user_${user.userID}`)
      .update({
        posts_count: user.posts_count - 1,
        popularity: user.popularity - 3,
      });
  } catch (error) {
    console.log(error);
  }
}

function deleteItem(orderID, cafeID) {
  console.log(cafeID);
  try {
    const user = getCurrentUser();
    firebase
      .database()
      .ref(`db/FoodOrders/cafes/${cafeID}/${orderID}`)
      .remove();
    firebase
      .database()
      .ref(`db/FoodOrders/customers/${user.userID}/${orderID}`)
      .remove();
  } catch (error) {
    console.log(error);
  }
}
async function placeFoodOrder(orderDetails, total, cafeID, location, cafeName) {
  try {
    console.log("Place Order");
    let cords = `${location.coords.latitude},${location.coords.longitude}`;
    const user = getCurrentUser();
    let loc = `geo:${cords}?center=${cords}&q=${cords}&z=20`;
    let timestamp = moment().format("YYYYMMDDHHmmss");
    let orderID = `order${timestamp}`;
    firebase.database().ref(`db/FoodOrders/cafes/${cafeID}/${orderID}`).update({
      userID: user.userID,
      customerName: user.name,
      orderDetails: orderDetails,
      total: total,
      cafeID: cafeID,
      timestamp: timestamp,
      status: "New",
      orderID: orderID,
      location: loc,
    });

    firebase
      .database()
      .ref(`db/FoodOrders/customers/${user.userID}/${orderID}`)
      .update({
        userID: user.userID,
        username: user.name,
        orderDetails: orderDetails,
        cafeID: cafeID,
        cafeName: cafeName,
        timestamp: timestamp,
        status: "New",
        orderID: orderID,
      });
  } catch (error) {
    console.log(error);
  }
}

function getPendingOrders(userID) {
  let orders = new Object();
  try {
    firebase
      .database()
      .ref(`db/FoodOrders/customers/${userID}`)
      .on("value", (snapshot) => {
        let temp = snapshot.val();
        orders = temp;
      });
    return orders;
    console.log(orders);
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
    console.log(users);
  } catch (error) {
    console.log(error);
  }
}

export default {
  storeUserData,
  getUpdatedUserData,
  getCurrentUser,
  getUser,
  uploadUserPost,
  uploadDonationPost,
  likeAction,
  uploadComment,
  getComments,
  uploadUserStory,
  getUserStories,
  storyViewed,
  getPosts,
  getDonationPosts,
  isFriend,
  isFriendRequestReceived,
  isFriendRequestSent,
  sendFriendRequest,
  acceptFriendRequest,
  removeFriendRequest,
  getFriends,
  getStoryViews,
  getNotifications,
  getChatList,
  addToChatList,
  searchUsers,
  getUserPosts,
  uploadImage,
  updateProfile,
  uploadDonationHistory,
  placeFoodOrder,
  getPendingOrders,
  setOrderStatus,
  deleteItem,
  deletePost,
  isPostExist,
  deleteAccount,
  check,
  getUsers,
};
