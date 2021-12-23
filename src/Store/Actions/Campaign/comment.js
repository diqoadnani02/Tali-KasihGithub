import {
    GET_COMMENT_BEGIN,
    POST_COMMENT_BEGIN,
  } from "../../../Constants/types";
  
  export const getComment = (id) => {
      return {
        type: GET_COMMENT_BEGIN,
        id,
      };
    };

  export const postComment = (body, id) => {
    return {
      type: POST_COMMENT_BEGIN,
      body,
      id,
    };
  };