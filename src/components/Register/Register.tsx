// Страница регистрации

// Хук React
import { useState } from 'react'
// Средство для маршрутизации
import { Redirect, Link } from 'react-router-dom'
// Хук Apollo
import { useMutation } from '@apollo/client'
// Semantic
//import { Button, Form } from 'semantic-ui-react'
// Утилита для извлечения значений из контекста
import { useAuthContext } from '../../context/Auth'
// Кастомный хук для работы с формой
import { useForm } from '../../utils/useForm'
// Мутация GraphQL
import { REGISTER_USER2 } from '../../graphql'
// Индикатор загрузки и утилита для преобразования изображения в строку в формате base64
//import { Loader, convertImg } from '../utils'

export const Register = (props: any) => {
  // Состояние для ошибок
  const [errors, setErrors] = useState({})
  // Получаем контекст
  const context = useAuthContext()

  // Извлекаем средства для работы с формой
  const { formData, handleChange, handleSubmit }: any = useForm(registerUser, {
    //username: '',
    password: '',
    email: ''
  })

  // Получаем функцию для регистрации и статус загрузки от сервера
  const [addUser, { loading }] = useMutation(REGISTER_USER2, {
    // Передаем данные из формы на сервер
    variables: formData,
    // При успешном выполнении мутации
    update(_, { data: { createUser: formData } }) {
      // Выполняем авторизацию
      context.login(formData)
      // и перенаправление на главную страницу
      props.history.push("/main");
      return
    },
    // В случае возникновения ошибки
    onError(err: any) {
      // Обновляем состояние ошибок
      setErrors(err&&err.graphQLErrors[0]?err.graphQLErrors[0].extensions.exception.errors:{});
    }
  })


  // Хак, обусловленный hoisting
  function registerUser() {
    addUser()
  }


  const inputs = document.querySelectorAll('.authInp');
  const inpSvg = document.querySelector('.inpSvg')
  const inpSvgHandler = (target) => {
    target.preventDefault();
    var input = document.getElementById('authpassword');
    if (input.getAttribute('type') == 'password') {
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
  // Функция для преобразования аватара в строку
  // async function uploadAvatar({ target: { files, name } }) {
  //   const img = files[0]
  //   const str = await convertImg(img)
  //   handleChange({ target: { name, value: str } })
  // }

  if (loading) return <>LOADING</>
  const isEmpty = formData.email.trim() === '' || formData.password.trim() === ''
  return (
        <div className="authPage anime">
        <div className="auth auth_reg d-flex align-items-center">
            <div className="auth__img">
                <img src="/img/netbooster_logo_white 1.svg" alt="" />
                <h2>start with us!</h2>
            </div>
            <form className="authForm" onSubmit={handleSubmit} noValidate>
                <div className="authForm__link__wrap">
                <Link to='/' className="authForm__link">Log in</Link> <span className="authForm__span">/</span> <Link to='/register' className="authForm__link active" href="">Sign up</Link>
                </div>
                <div className="inpWr">
                    <label forHtml="authName">name</label>
                    <input type="text"
                           placeholder="enter name"
                           id="authName"
                           className="authInp"
                           value={formData.username}
                           onChange={handleChange}/>
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
                    <label forHtml="authpassword">password</label>
                    <input type="password"
                           placeholder="enter your password"
                           id="authpassword"
                           className="authInp"
                           name='password'
                           value={formData.password}
                           onChange={handleChange}/>
                    <a href="#" onClick={inpSvgHandler} className="inpSvg" ></a>
                </div>

                <div className="btnWr d-flex align-items-center">
                    <button className="btn btn_color" type="submit" disabled={isEmpty}>Sign up</button>
                    <a href=""className="forgot">Already registred?</a>
                </div>
            </form>
        </div>

    </div>
  )
}