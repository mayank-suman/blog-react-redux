import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPost = () => {
  const res = jsonPlaceholder.get("/posts");
  return {
    type: "FETCH_POST",
    payload: null
  };
};
