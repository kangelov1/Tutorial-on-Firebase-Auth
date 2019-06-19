import React from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {signOut} from '../../store/actions/authActions'

const SignedInLinks = (props) => {
    const {initials} = props
    const handleClick = (e)=>{
        e.preventDefault()
        props.signOut()
    }
    return (
        <ul className='right'>
            <li><NavLink to='/create'>New Project</NavLink></li>
            <li><NavLink to='/' onClick={handleClick}>Log out</NavLink></li>
            <li><NavLink to='/' className='btn btn-floating pink lighten-1'>{initials}</NavLink></li>
        </ul>
    )
}

const mapStateToProps = (state) => {
    return {
        initials:state.firebase.profile.initials
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        signOut:() => dispatch(signOut())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignedInLinks)