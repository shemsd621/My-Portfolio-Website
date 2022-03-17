import React,{ useContext} from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';

import { ThemeContext } from '../../contexts/ThemeContext';
import { achievementsData } from '../../data/achievementsData'
import { HiArrowRight } from "react-icons/hi";

import './Achievements.css'
import SingleAchievement from './SingleAchievement/SingleAchievement';

function Achievements() {

    const { theme } = useContext(ThemeContext);

    
    const useStyles = makeStyles(() => ({
        viewAllBtn : {
            color: theme.tertiary, 
            backgroundColor: theme.primary,
            transition: 'color 0.2s',
            "&:hover": {
                color: theme.secondary, 
                backgroundColor: theme.primary,
            }
        },
        viewArr : {
            color: theme.tertiary, 
            backgroundColor: theme.secondary70,
            width: '40px',
            height: '40px',
            padding: '0.5rem',
            fontSize: '1.05rem',
            borderRadius: '50%',
            cursor: 'pointer',
            transition: 'background-color 0.2s',
            "&:hover": {
                color: theme.tertiary, 
                backgroundColor: theme.secondary,
            }
        },
    }));

    const classes = useStyles();

    return (
        <>
            {achievementsData.length > 0 && (
                <div className="achievements" id="achievements" style={{backgroundColor: theme.secondary}}>
                    <div className="achievements--header">
                        <h1 style={{color: theme.primary}}>Achievements</h1>
                    </div>
                    <div className="achievements--body">
                        <div className="achievements--bodyContainer">
                            {achievementsData.slice(0, 3).map(achievement => (
                                <SingleAchievement
                                    theme={theme}
                                    key={achievement.id}
                                    id={achievement.id}
                                    name={achievement.achievementName}
                                    desc={achievement.achievementDesc}
                                    tags={achievement.tags}
                                    code={achievement.code}
                                    demo={achievement.demo}
                                    image={achievement.image}
                                />
                            ))}
                        </div> 

                        {achievementsData.length > 3 && (
                            <div className="achievements--viewAll">
                                <Link to="/achievements">
                                    <button className={classes.viewAllBtn}>
                                        View All
                                        <HiArrowRight className={classes.viewArr} />
                                    </button>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            )}

        </>
    )
}

export default Achievements
