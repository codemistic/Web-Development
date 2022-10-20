import React from 'react'
import '../../styles/FileItem.css'
import FileSaver from 'file-saver';


import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const FileItem = ({ id, caption, timestamp, fileUrl, size }) => {
    const fileDate = `${timestamp?.toDate().getDate()} ${monthNames[timestamp?.toDate().getMonth() + 1]} ${timestamp?.toDate().getFullYear()}`

    const getReadableFileSizeString = (fileSizeInBytes) => {
        let i = -1;
        const byteUnits = [' kB', ' MB', ' GB', ' TB', 'PB', 'EB', 'ZB', 'YB'];
        do {
            fileSizeInBytes = fileSizeInBytes / 1024;
            i++;
        } while (fileSizeInBytes > 1024);

        return Math.max(fileSizeInBytes, 0.1).toFixed(1) + byteUnits[i];
    };

    const saveFile = (url) => {
        FileSaver.saveAs(
            process.env.PUBLIC_URL + " ","Untitled File");
    };

    return (
        <div className='fileItem'>
            <a href={fileUrl} target="_blank" download>
                <div className="fileItem--left">
                    <InsertDriveFileIcon />
                    <p>{caption}</p>
                </div>
                <div className="fileItem--right">

                <button className="cv" onClick={saveFile}>
                        Download File
                    </button>

                    <p>{fileDate}</p>
                    
                   

                    <p>{getReadableFileSizeString(size)}</p>
                </div>
            </a>
        </div>
    )
}

export default FileItem