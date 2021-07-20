import React, {useState, useEffect, useRef  }  from 'react';
import { useMutation } from '@apollo/client'
import useCustom from '../customHook/useCustom ';
import { Link, Redirect, useHistory   } from 'react-router-dom';
import { CREATE_PROJECT } from '../../graphql'
import { useForm } from '../../utils/useForm'
//import {modal} from 'react-bootstrap';
const ModalSite = (props: any) => {
    const [ddd, setddd] = useState();
    const [errors, setErrors] = useState({})
    const commentInputRef = useRef(null)
    // Извлекаем средства для работы с формой
  const { formData, handleChange }: any = useForm(registerUser, {
    nameSite: ''
  })
    console.log(formData.nameSite);

    const [addProject, { loading }] = React.MouseEvent<HTMLButtonElement> useMutation(CREATE_PROJECT, {
        // Передаем данные из формы на сервер

        variables: formData,

        // При успешном выполнении мутации
        update(_, { data: { createProject: formData } }) {
            console.log(formData);
          return
        },

        // В случае возникновения ошибки
        onError(err: any) {
          // Обновляем состояние ошибок
          setErrors(err&&err.graphQLErrors[0]?err.graphQLErrors[0].extensions.exception.errors:{});
        }
      })

      function registerUser() {
        addProject()
      }
    const history = useHistory()

    return (
        <div className="modal fade" id="creatPageJs"  aria-labelledby="creatPageJsLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header d-flex justify-content-between align-items-center">
                            Create a new site
                            <button type="button" className="btn-close btn-close-white popup_close" aria-label="Close" data-bs-dismiss="modal"></button>
                        </div>
                <div className="modal-body">
                    <label className="d-block" htmlFor="createSite2">page title</label>
                    <input className="d-block w-100" type="text" id="createSite2" placeholder="example website" name='name'  onChange={handleChange} ref={commentInputRef} value={formData.name} />
                    <span className="d-block">The name will be used in Netbooster'e</span>
                    <div className="text-end">
                        <button className="btn btn_white popup_close" data-bs-dismiss="modal">Close</button>
                        <button  className="btn btn_color" data-bs-hide="modal" onClick={addProject}>Create a new site</button>
                    </div>
                </div>
            </div>
             </div>
        </div>
    );
};

export default ModalSite;