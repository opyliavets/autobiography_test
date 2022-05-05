import React, {FC, PureComponent, useContext} from 'react';
import { experiancePageData, skillPageData, ExperiancePageDataContext, SkillPageDataContext } from './data';
import { Page } from './Page';



export class Review extends PureComponent{
    render(){
        return(
        <div className="review">
            <ExperiancePageDataContext.Provider value={experiancePageData}>
                <Page title={experiancePageData.title} description={experiancePageData.description} firstItemTitle={experiancePageData.firstIt} secondItemTitle={experiancePageData.secndIt} />
            </ExperiancePageDataContext.Provider>
            <SkillPageDataContext.Provider value={skillPageData}>
                <Page title={skillPageData.title} description={skillPageData.description} firstItemTitle={skillPageData.firstIt.title} secondItemTitle={skillPageData.secndIt.title}/>
            </SkillPageDataContext.Provider>
        </div>
        )
    }
}