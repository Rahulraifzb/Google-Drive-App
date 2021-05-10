import React from 'react'
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import "../../styles/FileCard.css"

const FileCard = ({ name }) => {
    return (
        <div className="fileCard">
            <div className="fileCard--top">
                <InsertDriveFileIcon style={{ fontSize: "130px" }} />
            </div>
            <div className="fileCard-bottom">
                <p>{name}</p>
            </div>
        </div>
    )
}

export default FileCard
