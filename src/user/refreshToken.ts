import { useRefreshTokenMutation } from "../state/api/user";
import { setUserToken } from "../state/slices/common/auth";
import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { AppDispatch } from "../state/store";

type RefreshAccessTokenHook = {
    refreshAccessToken: () => Promise<void>;
  };

export const useRefreshAccessToken = (): RefreshAccessTokenHook => {
  const [refreshToken] = useRefreshTokenMutation();
  const dispatch = useDispatch<AppDispatch>();

  const refreshAccessToken = useCallback(async () => {
    const refresh_token = localStorage.getItem("refresh_token");

    try {
      if (refresh_token) {
        const response = await refreshToken({ refresh: refresh_token });
       
        if ("data" in response) {
          const new_access_token = response.data.access;
          dispatch(setUserToken({ access_token: new_access_token }));
        } else {
          // Handle token refreshing error or expired refresh token
          dispatch(setUserToken({ access_token: "" }));
        }
      } else {
        // Handle missing refresh token
        dispatch(setUserToken({ access_token: "" }));
      }
    } catch (error) {
      // Handle token refreshing error
      dispatch(setUserToken({ access_token: "" }));
    }
  }, [dispatch, refreshToken]);


  return { refreshAccessToken };
};
