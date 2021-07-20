// Контекст с информацией об аутентификации

// Хуки и утилита для создания контекста
import { createContext, useReducer, useContext, useState } from 'react'
// Утилита для расшифровки токена
import jwtDecode from 'jwt-decode'

// Константы
const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'
const OPEN = 'OPEN'

// Начальное состояние
const initialState = {
  user: null,
}

// Токен хранится в локальном хранилище
if (window.localStorage.getItem('jwtToken')) {
  // Декодируем токен
  // Получаем id, имя и пароль пользователя
  const decodedToken: any = jwtDecode(
    JSON.parse(window.localStorage.getItem('jwtToken') || '{}')
  )

  // Если срок действия токена (expiresIn, exp) истек,
  // удаляем его из хранилища,
  if (decodedToken.exp * 1000 < Date.now()) {
    window.localStorage.removeItem('jwtToken')
  } else {
    // иначе, добавляем расшифрованный токен в начальное состояние
    initialState.user = decodedToken
  }
}

// Создаем контекст
const AuthContext = createContext<any | null>(null);

// Создаем редуктор
const authReducer = (state: any, { type, payload }: any) => {
  switch (type) {
    case LOGIN: {
      return {
        ...state,
        user: payload
      }
    }
    case LOGOUT: {
      return {
        ...state,
        user: null
      }
    }
    case OPEN: {
      return {
        ...state
      }
    }
    default:
      return state
  }
}

// Создаем и экспортируем провайдер аутентификации
export const AuthProvider = ({ children }:any) => {
  // Получаем состояние и диспетчера
  const [state, dispatch] = useReducer(authReducer, initialState)

  // Функция авторизации
  const login = (userData: any) => {
    // Записываем токен в локальное хранилище
    window.localStorage.setItem('jwtToken', JSON.stringify(userData.jwt))

    dispatch({
      type: LOGIN,
      payload: userData
    })
  }

  // Функция выхода из системы
  const logout = () => {
    // Удаляем токен из локального хранилища
    window.localStorage.removeItem('jwtToken')
    dispatch({ type: LOGOUT })
  }
///////////////////////////////////////////////
  const [click, setClick] = useState(false);
  const openNotaInfo = () => {
    setClick(!click);
    dispatch({ type: OPEN })
  }
///////////////////////////////////////////////
///////////////////////////////////////////////
  return (

    <AuthContext.Provider value={{ user: state.user, login, logout, openNotaInfo, click}}>
      {children}
    </AuthContext.Provider>
  )
}

// Утилита для извлечения значений из контекста
export const useAuthContext = () => useContext(AuthContext)
