import React, { useEffect, useState } from 'react'
import { db } from '../../firebase'
import FileItem from './FileItem'
import "../../styles/FilesView.css"
import FileCard from './FileCard'

const FilesView = () => {
    const [files, setFiles] = useState([])
    console.log(files)

    useEffect(() => {
        db.collection("myFiles").onSnapshot((snapshot) => {
            setFiles(snapshot.docs.map((doc) => ({
                id: doc.id,
                item: doc.data()
            })))
        })
    }, [])


    return (
        <div className="fileView">
            <div className="fileView__row">
                {
                    files.slice(0, 3).map(({ id, item }) => (
                        <FileCard name={item.caption} key={id} />
                    ))
                }
            </div>
            <div className="fileView__titles">
                <div className="fileView__titles--left">
                    <p>Name</p>
                </div>
                <div className="fileView__titles--right">
                    <p>Last modified</p>
                    <p>Files Size</p>
                </div>
            </div>
            {
                files.map(({ id, item }) => (
                    <FileItem id={id} caption={item.caption} timestamp={item.timestamp} fileUrl={item.fileUrl} size={item.size} key={id} />

                ))
            }
        </div>
    )
}

export default FilesView
