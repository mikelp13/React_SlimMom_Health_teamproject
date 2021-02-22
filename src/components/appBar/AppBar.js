import MobileBar from '../navBar/mobileBar/MobileBar';
import TabletBar from '../navBar/tabletBar/TabletBar';
import DesktopBar from '../navBar/desktopBar/DesktopBar';
import Responsive from 'react-responsive';
import AppBarStyled from './AppBarStyled';
import { useEffect, useState } from 'react';

const AppBar = () => {
    const [click, setClick] = useState(false);
 
    useEffect(() => {
        document.body.style.overflow = click ? 'hidden' : 'scroll';
    }, [click]);

    const onHandelClick = () => {
        setClick(prev => !prev);
    };

    const Desktop = props => <Responsive {...props} minWidth={1280} />;
    const Tablet = props => (
        <Responsive {...props} minWidth={768} maxWidth={1279} />
    );
    const Mobile = props => <Responsive {...props} maxWidth={767} />;

    return (
        <AppBarStyled click>
            <div className="container">
                <Desktop>
                    <DesktopBar />
                </Desktop>
                <Tablet>
                    <TabletBar />
                </Tablet>
                <Mobile>
                    <MobileBar click={click} onClick={onHandelClick} />
                </Mobile>
            </div>
        </AppBarStyled>
    );
};

export default AppBar;
