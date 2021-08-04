import React from 'react';
import './main-page.css';
import Nav from './page-components/nav';
import SideTab from './page-components/sideTab';
import CenterConsole from './page-components/centerConsole';

export default function MainPage() {
    return (
        <div className='main-page'>
            <Nav/>
            <CenterConsole/>
            <SideTab/>
        </div>
    )
}
