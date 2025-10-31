import HeadRight from "./HeadRight"

import "./Head.css"

const AddHead = ({active, setActive}) => {
    return(
        <div className="AddHead">
            <div className="title">
                <h1>방과후 등록</h1>
            </div>
            <div className="right">
                <HeadRight active={active} setActive={setActive} />
            </div>
        </div>
    )
}

export default AddHead