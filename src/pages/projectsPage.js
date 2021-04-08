import React from 'react'
import Project from '../components/Project'
import Jeopardy from './../assets/images/jeopardy-trivia-game.png'
import EatDaBurger from "./../assets/images/Eat-Da-Burger.png";
import EmployeeTracker from "./../assets/images/employee-tracker.gif";
import ExpressNoteTakerRepository from "./../assets/images/note_taker.png";
import EmployeeSummary from "./../assets/images/employee-summary.png";
import MoviesOnTheRocks from "./../assets/images/MoviesontheRocks.jpg";
import WeatherDashboard from "./../assets/images/weather-dashboard.png";
import WorkdayScheduler from "./../assets/images/workdayscheduler.png";
import CodeQuiz from "./../assets/images/code_quiz.png";
import PasswordGenerator from "./../assets/images/Password_Generator.png";

const Projects = () => {
    return (
        <div className="container ds-container">
            <div className="row">
                <div className="col-lg-8">
                    <h2>Portfolio</h2>
                </div>
            </div>
            <div className="col-lg-8 p-0">
                <hr />
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="row">
                        <Project
                            deployURL={"https://shielded-fjord-19309.herokuapp.com/"}
                            title={"Jeopardy Trivia Game"}
                            img={Jeopardy}
                            repoURL={"https://github.com/Geoff7709/jeopardy_trivia_game"}
                            description={"Some quick example text to build on the card title and make up the bulk of the card's content."}
                        />
                        <Project
                            deployURL={"https://pacific-peak-81843.herokuapp.com/"}
                            title={"Eat-Da-Burger"}
                            repoUrl={"https://github.com/DavidESotomayor/burger"}
                            img={EatDaBurger}
                            description={"Some quick example text to build on the card title and make up the bulk of the card's content."}
                        />
                        <Project
                            deployURL={"https://github.com/DavidESotomayor/employee-tracker"}
                            title={"Employee Tracker"}
                            repoUrl={"https://github.com/DavidESotomayor/employee-tracker"}
                            img={EmployeeTracker}
                            description={"Some quick example text to build on the card title and make up the bulk of the card's content."}
                        />
                        <Project
                            deployURL={"https://agile-reef-85586.herokuapp.com/"}
                            title={"Express Note Taker Repository"}
                            repoUrl={"https://github.com/DavidESotomayor/express-note-taker"}
                            img={ExpressNoteTakerRepository}
                            description={"Some quick example text to build on the card title and make up the bulk of the card's content."}
                        />
                        <Project
                            deployURL={"https://github.com/DavidESotomayor/template-engine_employee-summary"}
                            title={"Template Engine: Employee Summary"}
                            repoUrl={"https://github.com/DavidESotomayor/template-engine_employee-summary"}
                            img={EmployeeSummary}
                            description={"Some quick example text to build on the card title and make up the bulk of the card's content."}
                        />
                        <Project
                            deployURL={"https://mklakhan.github.io/movies-on-the-rocks/"}
                            title={"Movies On The Rocks"}
                            repoUrl={"https://github.com/mklakhan/movies-on-the-rocks"}
                            img={MoviesOnTheRocks}
                            description={"Some quick example text to build on the card title and make up the bulk of the card's content."}
                        />
                        <Project
                            deployURL={"https://davidesotomayor.github.io/weather-dashboard/"}
                            title={"Weather Dashboard"}
                            repoUrl={"https://github.com/DavidESotomayor/weather-dashboard"}
                            img={WeatherDashboard}
                            description={"Some quick example text to build on the card title and make up the bulk of the card's content."}
                        />
                        <Project
                            deployURL={"https://davidesotomayor.github.io/work-day-scheduler/"}
                            title={"Workday Scheduler"}
                            repoUrl={"https://github.com/DavidESotomayor/work-day-scheduler"}
                            img={WorkdayScheduler}
                            description={"Some quick example text to build on the card title and make up the bulk of the card's content."}
                        />
                        <Project
                            deployURL={"https://davidesotomayor.github.io/code-quiz/"}
                            title={"Code Quiz"}
                            repoUrl={"https://github.com/DavidESotomayor/code-quiz"}
                            img={CodeQuiz}
                            description={"Some quick example text to build on the card title and make up the bulk of the card's content."}
                        />
                        <Project
                            deployURL={"https://davidesotomayor.github.io/Password_Generator/"}
                            title={"Password Generator"}
                            repoUrl={"https://github.com/DavidESotomayor/Password_Generator"}
                            img={PasswordGenerator}
                            description={"Some quick example text to build on the card title and make up the bulk of the card's content."}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects