import React from 'react';
import s from './modalProjec.module.scss'

const ModalProject = ({modalProject,title,setModalProject,intended,img}) => {
    return (
        <div className={modalProject ? `${s.modal} ${s.active}` : s.modal} onClick={() => setModalProject(!modalProject)}>
            <div className={s.modalContent} onClick={e => e.stopPropagation()}>
                <h4>{title}</h4>
                <img src="" alt=""/>
            </div>
        </div>
    );
};

export default ModalProject;