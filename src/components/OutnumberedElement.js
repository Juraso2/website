import * as React from "react"
import styled from "styled-components"

const Timeline = styled.div`
    &&& {
        margin-top: 0;
    }
`

const OutnumberedElement = ({ component }) => {
    const [yearFrom, setYearFrom] = React.useState(null)
    const [yearTo, setYearTo] = React.useState(null)

    React.useEffect(() => {
        if (component.From) {
            let date = new Date(component.From);
            setYearFrom(date.getFullYear())
        }
        if (component.To) {
            let date = new Date(component.To);
            setYearTo(date.getFullYear())
        }
    }, [component.From, component.To])

    return (
        <Timeline>
            <div className="cv-timeline_body">
                <div className="uk-padding uk-padding-remove-horizontal uk-padding-remove-top">
                    <div className="cv-timeline_point" uk-scrollspy="cls: uk-animation-slide-bottom-small; delay: 200; repeat: false">
                    </div>

                    <div className="cv-work_timeframe" uk-scrollspy="cls: uk-animation-slide-bottom-small; delay: 200; repeat: false">
                        {yearFrom} {yearTo && '-'} {yearTo}
                    </div>

                    <h3 className="cv-work_heading uk-margin-small" uk-scrollspy="cls: uk-animation-slide-bottom-small; delay: 200; repeat: false">
                        {component.Title}
                    </h3>

                    <h4 className="cv-work_title uk-margin-small" uk-scrollspy="cls: uk-animation-slide-bottom-small; delay: 200; repeat: false">
                        {component.Position}
                    </h4>

                    <div className="cv-work_location" uk-scrollspy="cls: uk-animation-slide-bottom-small; delay: 200; repeat: false">
                        {component.Location}
                    </div>
                </div>
            </div>
        </Timeline>
    )
}

export default OutnumberedElement