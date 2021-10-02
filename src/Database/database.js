import * as firebase from "firebase";


  function storeData(firstName, lastName, mail, gender) {
    console.log("storing")
    firebase
      .database()
      .ref(`users/user_${mail.split("@")[0]}`)
      .update({
        name: firstName + " " + lastName,
        regNo: mail.split("@")[0],
        mail: mail,
        gender: gender,
      });
  }

  function getData() {
    firebase
      .database()
      .ref("users/")
      .on("value", (snapshot) => {
        const user = snapshot.val().user1;
        console.log(user.name);
      });
  }
export default {storeData, getData};
