import React from 'react'
import Avatar from '@mui/material/Avatar';
import FolderIcon from '@mui/icons-material/Folder';

const ProfilePage = () => {
  return (
    <div>
        <div>
            <img src="" alt="" />
            <span>Jackson HigginBottom</span>
            <span>He/Him</span>
        </div>
        <div>
            <Avatar variant="square">
                <FolderIcon />
            </Avatar>
            <div>Student Information</div>
        </div>
        <div>
            <Avatar variant="square">
                <FolderIcon />
            </Avatar>
            <div>Contact Information</div>
        </div>
    </div>
  )
}

export default ProfilePage
