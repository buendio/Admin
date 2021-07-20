// Страница авторизации

// Хук React
import { useState , useEffect } from 'react'
// Средство для маршрутизации
import { useParams, Link } from 'react-router-dom'
// Хук Apollo
import { useMutation, useQuery } from '@apollo/client'

// Утилита для извлечения значений из контекста
import { useAuthContext } from '../../context/Auth'
// Кастомный хук для работы с формой
import { useForm } from '../../utils/useForm'
// Мутация GraphQL
import { LOGIN_USER } from '../../graphql'
// Индикатор загрузки
//import { Loader } from '../utils'

export const Login = (props: any) => {


  // Состояние для ошибок
  const [errors, setErrors] = useState({})
  // Получаем контекст
  const context = useAuthContext()
  // Извлекаем средства для работы с формой
  const { formData, handleChange }: any = useForm(loginUserCb, {
    email: '',
    password: ''
  })
  const handleSubmit = (e: any) => {
    e.preventDefault()

    if(data) {

      context.login(data.loginUser)

    }
// context.login(formData)
  }
  const  { data } = useQuery(LOGIN_USER,  {
    // Передаем серверу id поста
    variables: {
      email: formData.email,
      password: formData.password
    }
  });
//console.log(data.loginUser.jwt);

  // Получаем функцию для авторизации и статус загрузки от сервера
  // const [loginUser, { loading }] = useMutation(LOGIN_USER, {
  //   // Передаем данные из формы на сервер
  //   variables: formData,
  //   // После успешного выполнения мутации
  //   update(_, { data: { login: formData } }) {
  //     // Выполняем авторизацию
  //     context.login(formData)
  //     props.history.push("/main");
  //     // и перенаправление на главную страницу
  //     return
  //   },
  //   // В случае возникновения ошибки
  //   onError(err: any) {
  //     // Обновляем состояние ошибок
  //     setErrors(err&&err.graphQLErrors[0]?err.graphQLErrors[0].extensions.exception.errors:{});
  //   }
  // })

  // Хак, обусловленный hoisting
  function loginUserCb() {
    data();
  }

  const inputs = document.querySelectorAll('.authInp');
  const inpSvgHandler = (target: any) => {
    target.preventDefault();
    var input = document.getElementById('authpassword');
    if (input.getAttribute('type') === 'password') {
        target.target.classList.add('view');
        input.setAttribute('type', 'text');
    } else {
        target.target.classList.remove('view');
        input.setAttribute('type', 'password');
    }
    return false;
  }

/////////////////////////////////////////////////////////////////
    inputs.forEach(input => {
      input.addEventListener('focusin', e => {
      e.target.closest('.inpWr').classList.remove('error');
      e.target.closest('.inpWr').classList.remove('full');
      e.target.closest('.inpWr').classList.add('focus')

      })
      input.addEventListener('input', e => {
          e.target.closest('.inpWr').classList.add('full')

      })
      input.addEventListener('focusout', e => {
      if(e.target.closest('.inpWr').classList.contains('focus'))
      e.target.closest('.inpWr').classList.remove('full')
      e.target.closest('.inpWr').classList.remove('focus')
      })
    })

  // Определяем пустые поля для блокировки кнопки
  const isEmpty = formData.email.trim() === '' || formData.password.trim() === ''
  if(context.user) props.history.push("/main");

  return (
    <div className="authPage anime">
        <div className="auth auth_login d-flex align-items-center">
            <div className="auth__img">
                <img src="/img/netbooster_logo_white 1.svg" alt="" />
                <h2>welcome back!</h2>
            </div>
            <form className="authForm" onSubmit={handleSubmit} noValidate>
                <div className="authForm__link__wrap">
                 <Link to='/' className="active authForm__link">Log in</Link> <span className="authForm__span">/</span> <Link to='/register' className="authForm__link" href="">Sign up</Link>
                </div>
                <div className="inpWr">
                    <label forHtml="authEmail">e-mail</label>
                    <input type="text"
                           placeholder="enter your email"
                           id="authEmail"
                           className="authInp"
                           name='email'
                           value={formData.email}
                           onChange={handleChange}/>
                </div>
                <div className="inpWr">
                    <label forHtml="authEmail">password</label>
                    <input type="password"
                           placeholder="enter your password"
                           id="authpassword"
                           className="authInp"
                           name='password'
                           value={formData.password}
                           onChange={handleChange} />
                    <a href="" onClick={inpSvgHandler} className="inpSvg" ></a>
                </div>
                <a href=""className="forgot forgot_m">Forgot password?</a>

                <div className="btnWr d-flex align-items-center">
                    <button className="btn btn_color" type="submit" disabled={isEmpty}>Log in</button>
                    <a href=""className="forgot">Don’t have an account?</a>
                </div>
             </form>
        </div>

    </div>
  )
}
