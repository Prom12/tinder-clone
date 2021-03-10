import React from 'react'
import './Header.css' 
import ProfileIcon from '@material-ui/icons/Person'
import IconButton from '@material-ui/core/IconButton'
import Forum from '@material-ui/icons/Forum'

function Header() {
    return (
        <div className='header'>
            <IconButton>
                <ProfileIcon fontSize='large' className='header_icon'/>
            </IconButton>
            <img className='header_logo' src='https://seeklogo.com/images/T/tinder-logo-FAAE852EC0-seeklogo.com.png'/>
            <IconButton>
                <Forum fontSize='large' className='header_icon'></Forum>
            </IconButton>
        </div>
    )
}

export default Header
