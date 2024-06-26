import Avatar from '@mui/material/Avatar';
import FolderIcon from '@mui/icons-material/Folder';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const ProfilePage = () => {
  return (
<Container component='main' maxWidth="sm">
        <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <img src="" alt="" />
            <span>Jackson HigginBottom</span>
            <span>He/Him</span>
       
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
    </Box>
    </Container>
  )
}

export default ProfilePage
