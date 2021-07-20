// Провайдер Apollo
import  App  from './App'
// Утилиты для создания провайдера
import {
  HttpLink,
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from '@apollo/client'
// Утилита для определения контекста
import { setContext } from '@apollo/client/link/context'
import { BrowserRouter , Route, Switch, Redirect, useLocation} from 'react-router-dom';
// Генерируем URL сервера
const httpLink = new HttpLink({
  uri: 'http://localhost:3001/graphql'
})

// Включаем заголовок авторизации в запрос
const authLink = setContext((_, { headers }) => {
  // Получаем токен из локального хранилища
  const token = JSON.parse(window.localStorage.getItem('jwtToken'))

  return {
    headers: {
      ...headers,
      authorization: token ? `${token}` : ''
    }
  }
})


// Создаем клиента
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})

// Экспортируем провайдер
export default () => (
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>
)