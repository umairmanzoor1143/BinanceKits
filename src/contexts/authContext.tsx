import React, { useContext, useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';

import Loader from 'components/Loader/SiteLoader';
import { Navigate } from 'react-router-dom';
import { resetAllSlices, useStoreBase } from 'store';
import { getLocalStorage, removeLocalStorage, setLocalStorage } from 'utils';

export enum AuthStatus {
  Loading,
  SignedIn,
  SignedOut,
}
type SessionType = { accessToken?: string; refreshToken?: string };

export type IAuth = {
  user?: any;
  sessionInfo?: {
    username?: string;
    email?: string;
    sub?: string;
    accessToken?: string;
    refreshToken?: string;
  };
  attrInfo?: any;
  authStatus?: AuthStatus;
  signInWithEmail?: (username: string, password: string) => Promise<any>;
  signUpWithEmail?: (username: string, email: string, sigup_code?: string) => Promise<any>;
  signOut?: (callback?: () => void) => void | Promise<any>;
  verifyCode?: (username: string, code: string, password: string) => void;
  getSession?: () => Promise<any>;
  sendCode?: (username: string) => Promise<void>;
  forgotPassword?: (username: string, code: string, password: string) => void;
  changePassword?: (oldPassword: string, newPassword: string) => void;
  getAttributes?: () => Promise<any>;
  setAttribute?: (attr: any) => void | Promise<any>;
};

const defaultState: IAuth = {
  sessionInfo: {},
  authStatus: AuthStatus.Loading,
  user: getLocalStorage('auth_user'),
};

type Props = {
  children?: React.ReactNode;
};

export const AuthContext = React.createContext(defaultState);

export const AuthIsSignedIn = ({ children }: Props) => {
  const { authStatus }: IAuth = useContext(AuthContext);
  if (authStatus === AuthStatus.Loading) {
    return <Loader loading />;
  }
  return <>{authStatus === AuthStatus.SignedIn ? children : <Navigate to={'/signin'} />}</>;
};

export const AuthIsNotSignedIn = ({ children }: Props) => {
  const { authStatus }: IAuth = useContext(AuthContext);
  if (authStatus === AuthStatus.Loading) {
    return <Loader loading />;
  }
  return <>{authStatus === AuthStatus.SignedOut ? children : <Navigate to={'/my-account'} />}</>;
};

const AuthProvider = ({ children }: Props) => {
  const [authStatus, setAuthStatus] = useState(AuthStatus.Loading);
  const [isFetchingUser, setIsFetchingUser] = useState(false);
  const [isFetchingSession, setIsFetchingSession] = useState(false);
  const [sessionInfo, setSessionInfo] = useState<SessionType>({});
  const [attrInfo, setAttrInfo] = useState<any[]>([]);

  const storeBase = useStoreBase();

  // const getUser = () => {
  //   setIsFetchingUser(true);
  //   User.trigger({
  //     slug: '',
  //     options: {},
  //   })
  //     .then((data: any) => {
  //       if (data?.data) {
  //         storeBase.setUser(data.data || {});
  //         setLocalStorage('auth_user', data.data);
  //       }
  //       setIsFetchingUser(false);
  //     })
  //     .catch((e: any) => {
  //       console.log(e);
  //       setIsFetchingUser(false);
  //     });
  // };

  async function getSession() {
    try {
      const accessToken = getLocalStorage('accessToken');
      if (!accessToken) throw new Error('No access token found');
      return jwtDecode(accessToken);
    } catch (err) {
      throw err;
    }
  }

  async function signInWithEmail(username: string, password: string) {
    try {
      const response = await axios.post('/api/login', { username, password });
      const { accessToken, refreshToken } = response.data;
      setLocalStorage('accessToken', accessToken);
      setLocalStorage('refreshToken', refreshToken);
      await getSessionInfo();
      setAuthStatus(AuthStatus.SignedIn);
      return true;
    } catch (err) {
      setAuthStatus(AuthStatus.SignedOut);
      throw err;
    }
  }

  async function signUpWithEmail(username: string, email: string, signup_code?: string) {
    try {
      await axios.post('/api/register', { username, email, signup_code });
    } catch (err) {
      throw err;
    }
  }

  function signOut(callback?: () => void) {
    removeLocalStorage('auth_user');
    removeLocalStorage('accessToken');
    removeLocalStorage('refreshToken');
    resetAllSlices();
    setAuthStatus(AuthStatus.SignedOut);
    setIsFetchingUser(false);
    callback?.();
    setIsFetchingSession(false);
  }

  async function getSessionInfo() {
    try {
      const session = await getSession();
      setSessionInfo(session as SessionType);
      // getUser();
      const attr: any[] = []; // Place to integrate attribute retrieval logic if needed
      setAttrInfo(attr);
      setAuthStatus(AuthStatus.SignedIn);
    } catch (err) {
      setAuthStatus(AuthStatus.SignedOut);
    }
  }

  useEffect(() => {
    if (!isFetchingSession) {
      setIsFetchingSession(true);
      getSessionInfo();
    }
  }, [authStatus]);

  const state: IAuth = {
    authStatus,
    sessionInfo,
    attrInfo,
    signUpWithEmail,
    signInWithEmail,
    signOut,
    getSession,
    user: getLocalStorage('auth_user'),
  };

  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
