import React from 'react'
import { Link, Route, useRouteMatch } from 'react-router-dom';
import DiaryAdditionalPage from './DiaryAdditionalPage'
import { useMediaQuery } from 'react-responsive';

const DiaryPage = () => {
    const match = useRouteMatch();

    const isMobile = useMediaQuery({ query: '(max-width: 767px)' }) 
    return (
        <>
        
     {isMobile && <> <Route path={`${match.url}/product`} component={DiaryAdditionalPage}/>
      <button
       type='button' style={{color: 'white', backgroundColor:'orange', }}> <Link
       to={`${match.url}/product`} > + </Link> </button> </>
  }
       <h1> DiaryPage </h1>
            
    </>
       
    )
}

export default DiaryPage
