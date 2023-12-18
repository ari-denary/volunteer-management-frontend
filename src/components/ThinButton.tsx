import React from 'react'
import Button from '@mui/material/Button';


interface props {
	text: string;
	onClick?: () => void;
}

const ThinButton = ({text}: props) => {
  return (
      <Button variant="contained" size="medium" sx={{width:300, backgroundColor:'#1370AF'}}>
        {text}
      </Button>
  )
}

export default ThinButton
