import React, {createContext, useReducer} from 'react';
import {ActionWithPayload} from './helpers';

type AuthContextProps = {
  isLoggedIn: boolean;
  id: number;
  userName: string;
  dispatch: React.Dispatch<AuthContextActions>;
};

type AuthContextActions = ActionWithPayload<'auth/login', {}>;

const defaultAuthParams: AuthContextProps = {
  isLoggedIn: false,
  id: -1,
  userName: '',
  dispatch: () => {},
};

export const AuthContext = createContext<AuthContextProps>(defaultAuthParams);

function authReducer(
  state: AuthContextProps,
  action: AuthContextActions,
): AuthContextProps {
  switch (action.type) {
    case 'auth/login': {
      return {...state, isLoggedIn: true};
    }
    default: {
      return state;
    }
  }
}

const AuthProvider = ({children}: {children: React.ReactNode}) => {
  const [state, dispatch] = useReducer(authReducer, defaultAuthParams);

  const value = {...state, dispatch};

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Actions
export const loginUser = (): ActionWithPayload<'auth/login', {}> => ({
  type: 'auth/login',
  payload: {},
});

export default AuthProvider;
