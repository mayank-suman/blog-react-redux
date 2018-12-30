import lo from "lodash";
import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPost = () => {
  return async function (dispatch) {
    const res = await jsonPlaceholder.get("/posts");

    dispatch({
      type: "FETCH_POST",
      payload: res.data
    });
  }
};

export const fetchUser = (id) => dispatch =>  _fetchUser (id, dispatch);

const _fetchUser = lo.memoize(async (id, dispatch) => {
  const res = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({
      type: "FETCH_USER",
      payload: res.data
    });
});
