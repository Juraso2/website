import classNames from "classnames"
import * as React from "react"
import ContentComponents from "../components/ContentComponents"

const Section = ({ content }) => {
    let gridClass = classNames({
        'uk-child-width-1-1': true,
    })

    return (
        <section className="uk-section-secondar uk-preserve-color">
            <div className="uk-container uk-container-expand uk-padding-remove">
                <div className="uk-child-width-expand uk-grid uk-grid-collapse" uk-grid="true">
                    <div className="cv-section_header uk-grid-item-match uk-first-column uk-width-1-6 uk-visible@m">
                        <div></div>
                    </div>

                    <div
                        className="cv-section_header uk-width-1-1 uk-width-1-5@m uk-padding-large uk-text-right uk-first-column">
                        <h2 className="cv-section_heading uk-margin-small">
                            {content.Title}
                        </h2>

                        {content.Description && <p className="cv-section_body uk-margin-small">{content.Description}</p>}
                    </div>

                    <div className="cv-section_content uk-width-1-1 uk-width-1-2@m uk-padding-large uk-grid-margin uk-first-column">
                        <div className={gridClass} uk-grid="true">
                            {content.section.Components.map((Component, i) => {
                                const ContentComponent = ContentComponents[Component.__typename]

                                return ContentComponent ? (<ContentComponent key={i} component={Component} />) : null
                            })}
                        </div>
                    </div>

                    <div className="cv-section_content uk-grid-item-match uk-visible@m">
                        <div></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section