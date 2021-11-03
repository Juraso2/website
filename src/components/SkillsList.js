import * as React from "react"

const SkillsList = ({ component }) => {
    return (
        <div className="uk-child-width-1-1 uk-child-width-1-2@m uk-grid-row-small" uk-grid="true">
            {component.skills.map((skill, i) => {
                return (
                    <div key={i}>
                        <div className="uk-flex">
                            <div className="uk-text-primary uk-margin-small-right cv-media-block_number">
                                {skill.Percent}<small>%</small>
                            </div>
                            <div className="cv-media-block_body">
                                <h3 className="uk-margin-remove">{skill.Title}</h3>
                            </div>
                        </div>

                        <div className="cv-progress-bar">
                            <progress className="uk-progress" data-value={skill.Percent / 10} max="10"></progress>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default SkillsList