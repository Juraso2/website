import * as React from "react"
import ReactMarkdown from 'react-markdown'

const Text = ({ component }) => {
    return (
        <div>
            <ReactMarkdown>
                {component.Content}
            </ReactMarkdown>
        </div>
    )
}

export default Text