import { createContext } from 'react';
import data from '../../data/links.json';

export const experiancePageData = {title:data.page1.title, description:data.page1.description, firstIt: data.page1.position_1.title, secndIt: data.page1.position_2.title};
export const skillPageData = {title:data.page2.title, description:data.page2.description, firstIt: data.page2.skill1, secndIt: data.page2.skill2};

export const ExperiancePageDataContext = createContext(experiancePageData);
export const SkillPageDataContext = createContext(skillPageData);