import React from 'react'
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import DiaryAdditionalPage from './DiaryAdditionalPage'
import { useMediaQuery } from 'react-responsive';

const DiaryPage = () => {
    const match = useRouteMatch();

    const isMobile = useMediaQuery({ query: '(max-width: 767px)' }) 
    return (
        <>
        
     {isMobile && <> 
     <Switch>
    <Route path={`${match.url}`}  component={DiaryPage}/>
     <Route path={`${match.url}/product`} exact component={DiaryAdditionalPage}/>
     </Switch>
      <button
       type='button' style={{color: 'white', backgroundColor:'orange', }}> <Link
       to={`${match.url}/product`} > + </Link> </button> </>
  }
       <h1> DiaryPage </h1>
            
    </>
       
    )
}

export default DiaryPage
