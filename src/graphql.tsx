// Утилита для формирования запросов и мутаций GraphQL
import gql from 'graphql-tag'

// Авторизация пользователя
export const LOGIN_USER = gql`
  query loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      jwt
    }
  }
`

// Регистрация пользователя
export const REGISTER_USER2 = gql`
  mutation createUser(
    $email: String!,
    $password: String!,
  ) {
    createUser(
        data: {
          email: $email,
          password: $password
        }

    ) {
      jwt
    }
  }
`
// создание проекта

export const CREATE_PROJECT = gql`
  mutation createProject($name: String)
   {
    createProject(
        data: {
          name: $name,
        }

    ) {
      id,
      name,
      url
    }
  }
`



// Получение всех проектов

export const GET_getProjects= gql`
  {
    getProjects {
      projects {
        id,
        name,
        createdAt
      }
  }
}
`
// Получение одного проекта по его id
export const GET_PROJECT= gql`
query($id: Int)
 {
    getProject(where: {
      id: $id
    })
    {
        id
        name
        url
        domain
    }
}
`
// Получение одного поста по его id
export const GET_PRODUCT= gql`
  query($id: ID!) {
    Product(id: $id)  {
        id
        name
        price
    }
}
`

// Создание поста
export const CREATE_POST_MUTATION = gql`
  mutation createPost($body: String!) {
    createPost(body: $body) {
      id
      body
      username
      avatar
      createdAt
      likeCount
      likes {
        id
        username
        createdAt
      }
      commentCount
      comments {
        id
        body
        username
        createdAt
      }
    }
  }
`

// Удаление поста
export const DELETE_POST_MUTATION = gql`
  mutation deletePost($postId: ID!) {
    deletePost(postId: $postId)
  }
`

// Лайк поста
export const LIKE_POST_MUTATION = gql`
  mutation likePost($postId: ID!) {
    likePost(postId: $postId) {
      id
      likes {
        id
        username
      }
      likeCount
    }
  }
`

// Создание комментария
export const CREATE_COMMENT_MUTATION = gql`
  mutation createComment($postId: String!, $body: String!) {
    createComment(postId: $postId, body: $body) {
      id
      comments {
        id
        body
        username
        createdAt
      }
      commentCount
    }
  }
`

// Удаление комментария
export const DELETE_COMMENT_MUTATION = gql`
  mutation deleteComment($postId: ID!, $commentId: ID!) {
    deleteComment(postId: $postId, commentId: $commentId) {
      id
      comments {
        id
        username
        createdAt
        body
      }
      commentCount
    }
  }
`
