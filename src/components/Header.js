import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import HeaderOption from './HeaderOption';

export default function Header() {
    return (
        <div className='header'>
            <div className='header_left'>
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/1/14/Florida_Gators_gator_logo.svg/1200px-Florida_Gators_gator_logo.svg.png" alt=""/>
                <div className="header_search">
                    <SearchIcon/>
                    <input type="text"/>
                </div>

            </div>

            <div className='header_right'>
                <HeaderOption Icon={HomeIcon}title='Home'/>
                <HeaderOption avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS78eT-Si-XCF7_nah4Trcsjvr-ypUKPnf5_vclWITQ1bjJ-Q6zwPQRTqT_pZaZudyY9LI&usqp=CAU"
                              title='Me'/>



            </div>

        </div>
    )
}