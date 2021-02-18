import MobileBar from "../navBar/mobileBar/MobileBar";
import TabletBar from "../navBar/tabletBar/TabletBar";
import DesktopBar from "../navBar/desktopBar/DesktopBar";
import Responsive from 'react-responsive';
import AppBarStyled from "./AppBarStyled";
// import logo from '../../assets/img/logo/logo.png';
// import logoWhite from '../../assets/img/logo/logo123.png';
// import NavBar from "../navBar/NavBar";


const AppBar = () => {
  const Desktop = props => <Responsive {...props} minWidth={1280} />;
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={1279} />;
const Mobile = props => <Responsive {...props} maxWidth={767} />;

  //const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' })   
  //const isTablet = useMediaQuery({ query: '(max-width: 1279px )' })   
  //const isMobile = useMediaQuery({ query: '(max-width: 767px)' })   
    return (
        < AppBarStyled>
    <Desktop> <DesktopBar/> </Desktop>
    <Tablet> <TabletBar/></Tablet>
    <Mobile><MobileBar/></Mobile>
        </AppBarStyled>
    )
  }
  
  export default AppBar
          
          
{/* {localStorage.getItem('theme') === 'dark' ?
  <img src={logoWhite} alt='logo' width='46' height='66'></img>
  :
  <img src={logo} alt='logo' width='46'></img>} */}



 