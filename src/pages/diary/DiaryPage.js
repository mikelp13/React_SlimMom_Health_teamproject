import React, { useState, useEffect } from 'react';
import { Link, Route, useRouteMatch } from 'react-router-dom';
import DiaryAdditionalPage from './DiaryAdditionalPage';
import { useMediaQuery } from 'react-responsive';
import DiaryDateCalendar from '../../components/diaryDateCalendar/DiaryDateCalendar';
import DiaryAddProductForm from '../../components/diaryAddProductForm/DiaryAddProductForm';
import DiaryProductList from '../../components/diaryProductList/DiaryProductList';
import { PageContainer } from './DiaryPageStyle';

const DiaryPage = () => {
    const match = useRouteMatch();

    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
    // eslint-disable-next-line

    const size = useWindowSize();
    // const [state, setState] = useState({
    //     modal: false,
    // });

    function useWindowSize() {
        // Initialize state with undefined width/height so server and client renders match
        // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/

        const [windowSize, setWindowSize] = useState({
            width: undefined,
            height: undefined,
        });

        useEffect(() => {
            // Handler to call on window resize
            function handleResize() {
                // Set window width/height to state
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight,
                });
            }

            // Add event listener
            window.addEventListener('resize', handleResize);

            // Call handler right away so state gets updated with initial window size
            handleResize();

            // Remove event listener on cleanup
            return () => window.removeEventListener('resize', handleResize);
        }, []); // Empty array ensures that effect is only run on mount

        return windowSize;
    }

    return (
        <PageContainer className="calculatorPage">
            <section className="calculatorPageSection">
                <div className="container">
                    {isMobile && (
                        <>
                            {' '}
                            <Route
                                path={`${match.url}/product`}
                                component={DiaryAdditionalPage}
                            />
                            <button
                                type="button"
                                style={{
                                    color: 'white',
                                    backgroundColor: 'orange',
                                }}
                            >
                                {' '}
                                <Link to={`${match.url}/product`}>
                                    {' '}
                                    +{' '}
                                </Link>{' '}
                            </button>{' '}
                        </>
                    )}
                    <DiaryDateCalendar />
                    <DiaryAddProductForm />
                    <DiaryProductList />
                </div>
            </section>
        </PageContainer>
    );
};

export default DiaryPage;
