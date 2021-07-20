// Утилита для приватного роутинга

// Средства для маршрутизации
import { Route, Redirect } from 'react-router-dom'
// Утилита для извлечения данных из контекта
import { useAuthContext } from '../context/Auth'

export const AuthRoute = ({ component: Component, ...rest }: any) => {
  // Получаем пользователя из контекста
  const { user }: any = useAuthContext()

  // В зависимости от того, авторизован ли пользователь,
  // отображаем те или иные ссылки
  // и выполняем перенаправление на главную страницу после авторизации
  return (
    <Route
      {...rest}
      render={(props) =>
        user ?  <Component {...props} /> : <Redirect to='/' />
      }
    />
  )
}
