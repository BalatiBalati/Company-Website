import React from 'react';
import { NavigationDots, SocialMedia } from '../components';

const AppWrap = (Component, idName, classNames) => function EOC() {
    return(
        <div id={idName} className={`app__container ${classNames}`}>
            {/* <SocialMedia /> */}

            <div className="app__wrapper app__flex">
                <Component />

                {/* <div className="copyright">
                    <p className="p-text"><span>Copyright <br></br> © 2024 BALATI BALATI</span></p>
                    <p className="p-text"><span>All Rights Reserved</span></p>
                </div> */}
            </div>
            <NavigationDots active={idName} />
        </div>
    )
} 

export default AppWrap;
