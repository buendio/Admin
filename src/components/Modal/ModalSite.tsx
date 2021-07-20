import React, {useState, useEffect }  from 'react';
import { useMutation } from '@apollo/client'
import useCustom from '../customHook/useCustom ';
import { CREATE_PROJECT, GET_getProjects } from '../../graphql'
import { Link, Redirect, useHistory   } from 'react-router-dom';
import { useForm } from '../../utils/useForm'

import {Modal} from 'react-bootstrap';
const ModalSite = ({showProps}: any) => {
    const [globalState, setGlobalState] = useCustom();
    const { formData, handleChange }: any = useForm(createProjectCb, {
      body: ''
      })
      useEffect(() => {
        setShow(globalState.isSiteModalOpen)
      })
      const [show, setShow] = useState(globalState.isSiteModalOpen);

      const handleClose = (e: any) => {
          setGlobalState({isSiteModalOpen : false});
      }
      const handleSubmit = (e: any) => {
          e.preventDefault();
          createProjectCb();
          setGlobalState({isSiteModalOpen : false})
          window.location.reload()
      }


    const [addProject, { error }] = useMutation(CREATE_PROJECT, {
        // Передаем данные из формы на сервер

        variables: formData,

        // При успешном выполнении мутации
        update(proxy, result) {
         // Получаем посты
      const data = proxy.readQuery({
        query: GET_getProjects
      })
      // и обновляем их
      proxy.writeQuery({
        query: GET_getProjects,
        data: {
          getProjects: [result.data.createProject, ...data.getProjects]
        }
      })
      formData.body = ''

        },

        // В случае возникновения ошибки
        onError(err: any) {

          //Обновляем состояние ошибок
         // setErrors(err&&err.graphQLErrors[0]?err.graphQLErrors[0].extensions.exception.errors:{});
        }
      })

      function createProjectCb() {
        addProject({ variables: { name: formData.body } })
      }

    return (
      <Modal
      show={show}
      onHide={handleClose}

    >
      <Modal.Header >
      Create a new site
      <button type="button" className="btn-close btn-close-white popup_close" onClick={handleClose}></button>
      </Modal.Header>
      <Modal.Body>
      <form  onSubmit={handleSubmit} >
                    <label className="d-block" htmlFor="createSite2">page title</label>
                    <input className="d-block w-100" type="text" id="createSite2" onChange={handleChange} value={formData.body} name="body" placeholder="example website" />
                    <span className="d-block">The name will be used in Netbooster'e</span>
                    <div className="text-end">
                        <div className="btn btn_white popup_close" onClick={handleClose}>Close</div>
                        <button type="submit" className="btn btn_color" >Create a new site</button>
                    </div>
                    </form>
      </Modal.Body>
    </Modal>
        // <div className="modal fade" id="creatPageJs"   aria-labelledby="creatPageJsLabel" aria-hidden="true">
        //         <div className="modal-dialog">
        //             <div className="modal-content">
        //                 <div className="modal-header d-flex justify-content-between align-items-center">
        //                     Create a new site
        //                     <button type="button" className="btn-close btn-close-white popup_close" aria-label="Close" data-bs-dismiss="modal"></button>
        //                 </div>
        //         <div className="modal-body">
        //           <form  onSubmit={handleSubmit} >
        //             <label className="d-block" htmlFor="createSite2">page title</label>
        //             <input onChange={handleChange} value={formData.body} className="d-block w-100" type="text" id="createSite2" name="body" placeholder="example website" />
        //             <span className="d-block">The name will be used in Netbooster'e</span>
        //             <div className="text-end">
        //                 <button className="btn btn_white popup_close" data-bs-dismiss="modal">Close</button>
        //                 <button  className="btn btn_color" type='submit'>Create a new site</button>
        //             </div>
        //             </form>
        //         </div>
        //     </div>
        //      </div>
        // </div>
    );
};

export default ModalSite;