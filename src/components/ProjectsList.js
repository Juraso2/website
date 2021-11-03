import * as React from "react"
import ReactMarkdown from 'react-markdown'

const ProjectsList = ({ component }) => {
    return (
        <>
            {component.projects.map((project, i) => {
                return (
                    <div className="uk-flex" key={i} uk-scrollspy="cls: uk-animation-slide-bottom-small; delay: 200; repeat: false">
                        <div className="uk-text-primary uk-margin-small-right cv-media-block_number">{(('0' + (i + 1)).slice(-2))}</div>
                        <div className="cv-media-block_body">
                            <h3 className="uk-text-uppercase uk-margin-small">{project.Title}</h3>
                            <ReactMarkdown>{project.Description}</ReactMarkdown>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default ProjectsList