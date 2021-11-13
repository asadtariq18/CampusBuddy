export const REFRESHING = "REFRESHING";
export const USER = "USER";
export const POSTS = "POSTS";

export const setRefreshing = (value) => {
  return { actionValue: value, type: REFRESHING };
};

export const setUser = (value) => {
  return { actionValue: value, type: USER };
};

export const setPosts = (value) => {
  return { actionValue: value, type: POSTS };
};
