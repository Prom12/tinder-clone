import React from 'react'
import './Header.css' 
import ProfileIcon from '@material-ui/icons/Person'
import IconButton from '@material-ui/core/IconButton'

function Header() {
    return (
        <div className='header'>
            <IconButton>
                <ProfileIcon fontSize='large' className='header_icon'/>
            </IconButton>
        </div>
    )
}

export default Header
