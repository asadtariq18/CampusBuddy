export const REFRESHING = "REFRESHING";
export const REQUESTSENT = "REQUESTSENT";
export const REQUESTRECEIVED = "REQUESTRECEIVED";
export const USER = "USER";
export const POSTS = "POSTS";

export const setRefreshing = (value) => {
  return { actionValue: value, type: REFRESHING };
};
export const setRequestSent = (value) => {
  return { actionValue: value, type: REQUESTSENT };
};
export const setRequestReceived = (value) => {
  return { actionValue: value, type: REQUESTRECEIVED };
};
export const setUser = (value) => {
  return { actionValue: value, type: USER };
};

export const setPosts = (value) => {
  return { actionValue: value, type: POSTS };
};
