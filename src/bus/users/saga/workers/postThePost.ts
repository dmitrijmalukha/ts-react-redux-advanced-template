import { makeRequest } from "../../../../workers";
import { PostsType } from "../../types";
import { api, PostType } from "../../../../api/index";
import { apiActions } from "../../../api/actions";
import { usersActions } from "../../../users/actions";

export function* postThePost(post: {
  type: string;
  payload: PostType;
}): Generator {
  const options = {
    fetcher: api.post.postMessage,
    fetcherParam: post.payload,
    startFetching: apiActions.startLoading,
    stopFetching: apiActions.stopLoading,
    fill: usersActions.setPost,
    setErrorAction: apiActions.setError
  };
  yield makeRequest<PostsType>(options);
}
