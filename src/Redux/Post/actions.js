export const POST = "POST";
export const COMMENTS = "COMMENTS";
export const COMMENTS_ARRAY = "COMMENTS_ARRAY";
export const REFRESHING = "REFRESHING";

export const setPost = (value) => {
  return { actionValue: value, type: POST };
};
export const setComments= (value) => {
  return { actionValue: value, type: COMMENTS };
};
export const setRefreshing = (value) => {
  return { actionValue: value, type: REFRESHING };
};
export const setCommentsArray = (value) => {
  return { actionValue: value, type: COMMENTS_ARRAY };
};