import React from 'react'
import Project from '../components/Project'

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
                            img={"./assets/images/jeopardy-trivia-game.png"}
                            repoURL={"https://github.com/Geoff7709/jeopardy_trivia_game"}
                            description={"Some quick example text to build on the card title and make up the bulk of the card's content."}
                        />
                        <Project
                            deployURL={"https://pacific-peak-81843.herokuapp.com/"}
                            title={"Eat-Da-Burger"}
                            repoUrl={"https://github.com/DavidESotomayor/burger"}
                            img={"./assets/images/Eat-Da-Burger.png"}
                            description={"Some quick example text to build on the card title and make up the bulk of the card's content."}
                        />
                        <Project
                            deployURL={"https://github.com/DavidESotomayor/employee-tracker"}
                            title={"Employee Tracker"}
                            repoUrl={"https://github.com/DavidESotomayor/employee-tracker"}
                            img={"./assets/images/employee-tracker.gif"}
                            description={"Some quick example text to build on the card title and make up the bulk of the card's content."}
                        />
                        <Project
                            deployURL={"https://agile-reef-85586.herokuapp.com/"}
                            title={"Express Note Taker Repository"}
                            repoUrl={"https://github.com/DavidESotomayor/express-note-taker"}
                            img={"./assets/images/note_taker.png"}
                            description={"Some quick example text to build on the card title and make up the bulk of the card's content."}
                        />
                        <Project
                            deployURL={"https://github.com/DavidESotomayor/template-engine_employee-summary"}
                            title={"Template Engine: Employee Summary"}
                            repoUrl={"https://github.com/DavidESotomayor/template-engine_employee-summary"}
                            img={"./assets/images/employee-summary.png"}
                            description={"Some quick example text to build on the card title and make up the bulk of the card's content."}
                        />
                        <Project
                            deployURL={"https://mklakhan.github.io/movies-on-the-rocks/"}
                            title={"Movies On The Rocks"}
                            repoUrl={"https://github.com/mklakhan/movies-on-the-rocks"}
                            img={"./assets/images/MoviesontheRocks.jpg"}
                            description={"Some quick example text to build on the card title and make up the bulk of the card's content."}
                        />
                        <Project
                            deployURL={"https://davidesotomayor.github.io/weather-dashboard/"}
                            title={"Weather Dashboard"}
                            repoUrl={"https://github.com/DavidESotomayor/weather-dashboard"}
                            img={"./assets/images/weather-dashboard.png"}
                            description={"Some quick example text to build on the card title and make up the bulk of the card's content."}
                        />
                        <Project
                            deployURL={"https://davidesotomayor.github.io/work-day-scheduler/"}
                            title={"Workday Scheduler"}
                            repoUrl={"https://github.com/DavidESotomayor/work-day-scheduler"}
                            img={"./assets/images/workdayscheduler.png"}
                            description={"Some quick example text to build on the card title and make up the bulk of the card's content."}
                        />
                        <Project
                            deployURL={"https://davidesotomayor.github.io/code-quiz/"}
                            title={"Code Quiz"}
                            repoUrl={"https://github.com/DavidESotomayor/code-quiz"}
                            img={"./assets/images/code_quiz.png"}
                            description={"Some quick example text to build on the card title and make up the bulk of the card's content."}
                        />
                        <Project
                            deployURL={"https://davidesotomayor.github.io/Password_Generator/"}
                            title={"Password Generator"}
                            repoUrl={"https://github.com/DavidESotomayor/Password_Generator"}
                            img={"./assets/images/Password_Generator.png"}
                            description={"Some quick example text to build on the card title and make up the bulk of the card's content."}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects