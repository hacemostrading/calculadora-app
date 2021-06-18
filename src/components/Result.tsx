import React, {FC} from "react"

type Prop = {
    value: string
}

const Result: FC<Prop> = ({value}) => {
    return (
        <div className="result">
            {
                value
            }
        </div>
        )
}

Result.defaultProps = {
    value: "0"
}

export default Result