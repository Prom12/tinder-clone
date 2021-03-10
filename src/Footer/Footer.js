import React from 'react'
import './Footer.css'
import IconButton from '@material-ui/core/IconButton'
import Replay from '@material-ui/icons/Replay'
import RateStar from '@material-ui/icons/StarRate'
import Close from '@material-ui/icons/Close'
import FlashOn from '@material-ui/icons/FlashOn'
import Favorite from '@material-ui/icons/Favorite'

const swiped=() =>{

}
function Footer() {
    return (
        <div className='swipeButton'>
            <IconButton  className='swipeButton_rep'>
                <Replay fontSize='large'/>
            </IconButton>
            <IconButton  className='swipeButton_left'>
                <Close fontSize='large'/>
            </IconButton>
            <IconButton  className='swipeButton_star'>
                <RateStar fontSize='large'/>
            </IconButton>
            <IconButton  className='swipeButton_right'>
                <Favorite fontSize='large'/>
            </IconButton>
            <IconButton  className='swipeButton_lighting'>
                <FlashOn fontSize='large'/>
            </IconButton>
        </div>
    )
}

export default Footer
