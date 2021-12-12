import {
    PROFILE_UPDATE_BEGIN,
  } from "../../Constants/types";
  
  export const UpdateProfileAction = (data) => {
      return {
        type: PROFILE_UPDATE_BEGIN,
        data
      };
    };