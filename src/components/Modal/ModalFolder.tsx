import React from 'react';

const ModalFolder = () => {
    return (
        <div className="modal fade" id="creatFolderJs" aria-labelledby="creatPageJsLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header d-flex justify-content-between align-items-center">
                            Create a new folder
                            <button type="button" className="btn-close btn-close-white popup_close" aria-label="Close" data-bs-dismiss="modal"></button>
                        </div>
                <div className="modal-body">
                    <label className="d-block" htmlFor="createSite2">folder name</label>
                    <input className="d-block w-100" type="text" id="createSite2" placeholder="example Landings" />
                    <span className="d-block">folders are used to simplify navigation</span>
                    <div className="text-end">
                        <button className="btn btn_white popup_close" data-bs-dismiss="modal">Close</button>
                        <a href="catalog.html" className="btn btn_color">Create a folder</a>
                    </div>
                </div>
            </div>
             </div>
        </div>
    );
};

export default ModalFolder;