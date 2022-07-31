import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import HeaderOption from './HeaderOption';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../../firebase';
import { logout, selectUser } from '../../features/userSlice';
import {Link} from 'react-router-dom'

export default function Header() {
    
    const currentUser = useSelector(selectUser);
    const dispatch = useDispatch();

    const logoutOfApp = () => {
        dispatch(logout());
        auth.signOut();
    };

    if(!currentUser){
        return (
            <div className='header'>
                <div className='header_left'>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/en/thumb/1/14/Florida_Gators_gator_logo.svg/1200px-Florida_Gators_gator_logo.svg.png"
                        alt=""/>
                    <h2>International Gator Job Board</h2>
                </div>

                <div className='header_right'>
                    <HeaderOption
                        avatar={true}
                        title='Me'
                        onClick={logoutOfApp}/>
                </div>
            </div>
        )

    }
    else {
        return (
            <div className='header'>
                <div className='header_left'>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/en/thumb/1/14/Florida_Gators_gator_logo.svg/1200px-Florida_Gators_gator_logo.svg.png"
                        alt=""/>
                    <div className="header_search">
                        <SearchIcon/>
                        <input type="text"/>
                    </div>
                    <h2>International Gator Job Board</h2>
                </div>
                <div className='header_right'>
                    <Link to="/"><HeaderOption Icon={HomeIcon} title='Home'/></Link>
                    <HeaderOption
                        avatar={true}
                        title='Me'
                        onClick={logoutOfApp}/>
                </div>
            </div>
        )
    }
}