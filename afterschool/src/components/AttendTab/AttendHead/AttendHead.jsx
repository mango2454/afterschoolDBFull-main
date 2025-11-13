import "./AttendHead.css"



const AttendHead = ({title}) => {




    return(
        <div className="AttendHead">
            <div className="AttendTitle">
                <h2>{title}</h2>
            </div>
            <div className="AttendBtn">
                <button >출석체크</button>
            </div>
        </div>
    )
}
export default AttendHead