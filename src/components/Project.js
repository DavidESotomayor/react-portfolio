import React from 'react';

const Project = ({deployURL, repoURL, title, description, img}) => {
    return (
        <div className="col-lg-4 col-md-6 mb-3">
            <div className="card">
                <a
                    href={deployURL}
                    title={title}
                    target="_blank"
                    rel="noreferrer"
                >
                    <img
                        src={img}
                        className="img-fluid card-img-top cardImgStyles"
                        alt={title}
                    />
                </a>
                <div className="card-body">
                    <h5 className="card-title portfolioImgTextSpace">
                        <a
                            href={deployURL}
                            title={title}
                            target="_blank"
                            rel="noreferrer"
                            className="portfolioImgText"
                        >
                            {title}
                    </a>
                    </h5>
                    <p
                        className="card-text"
                    >{description}</p>
                    <p className="card-text repositorySection">
                        Github Repository: 
                        <a  
                            href={repoURL}
                            title={title}
                            target="_blank"
                        >
                            <i 
                                className="fa fa-github-alt repositoryIcon" 
                                aria-hidden="true"
                            >
                            </i>        
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
};

export default Project;