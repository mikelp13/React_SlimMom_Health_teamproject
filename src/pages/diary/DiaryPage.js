import React from 'react';
import { Link, useLocation, useRouteMatch } from 'react-router-dom';
import DiaryDateCalendar from '../../components/diaryDateCalendar/DiaryDateCalendar';
import DiaryAddProductForm from '../../components/diaryAddProductForm/DiaryAddProductForm';
import DiaryProductList from '../../components/diaryProductList/DiaryProductList';
import RightSideBar from '../../components/RightSideBar/RightSideBar';
import useWindowSize from '../../hooks/useWindowSize';
import sprite from '../../assets/sprite.svg';
import { PageContainer } from '../calculator/CalculatorPageStyled';
import { ButtonStyled } from './DiaryPageStyle';
// import { useDispatch } from 'react-redux';
// import { getDayInfoOperation } from '../../redux/diary/diaryOperations';

const DiaryPage = () => {
    //   const dispatch = useDispatch()
    const match = useRouteMatch();
    const location = useLocation();
    const windowSize = useWindowSize();

    // const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
    // eslint-disable-next-line

    // const size = useWindowSize();
    // const [state, setState] = useState({
    //     modal: false,
    // });

    // eslint-disable-next-line
    // function useWindowSize() {
    //     // Initialize state with undefined width/height so server and client renders match
    //     // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/

    //     const [windowSize, setWindowSize] = useState({
    //         width: undefined,
    //         height: undefined,
    //     });

    //     useEffect(() => {
    //         // Handler to call on window resize
    //         function handleResize() {
    //             // Set window width/height to state
    //             setWindowSize({
    //                 width: window.innerWidth,
    //                 height: window.innerHeight,
    //             });
    //         }

    //         // Add event listener
    //         window.addEventListener('resize', handleResize);

    //         // Call handler right away so state gets updated with initial window size
    //         handleResize();
    //         // Remove event listener on cleanup
    //         return () => window.removeEventListener('resize', handleResize);
    //     }, []); // Empty array ensures that effect is only run on mount

    //     return windowSize;
    // }

    return (
        <PageContainer className="calculatorPage">
            <div className="calculatorPageWrapper">
             { windowSize.width > 320 &&
                    location.pathname !== '/diary/product' &&  <DiaryDateCalendar />}  
                <DiaryAddProductForm />
                {location.pathname !== '/diary/product' && <DiaryProductList />}

                {windowSize.width < 768 &&
                    location.pathname !== '/diary/product' && (
                        <ButtonStyled
                            type="button"
                            className="mainButton roundButton"
                        >
                            <Link to={`${match.url}/product`}>
                                <svg
                                    className="plusIcon"
                                    width="25px"
                                    height="25px"
                                >
                                    <use href={sprite + '#icon-plus'} />
                                </svg>
                            </Link>
                        </ButtonStyled>
                    )}
            </div>

            {location.pathname !== '/diary/product' && <RightSideBar />}
        </PageContainer>
    );
};

export default DiaryPage;

    /* <PageContainer className="calculatorPage">
<section className="calculatorPageSection">
    <div className="container">
        <DiaryDateCalendar />
        <DiaryAddProductForm />
        {(location.pathname !== "/diary/product") && <DiaryProductList />} 
       
        {windowSize.width < 768 && location.pathname !== "/diary/product" && (
            <button type="button">
                <Link to={`${match.url}/product`}>+</Link>
            </button>
        )}

       {(location.pathname !== "/diary/product") && <RightSideBar />} 
    </div>
</section>
</PageContainer> */

