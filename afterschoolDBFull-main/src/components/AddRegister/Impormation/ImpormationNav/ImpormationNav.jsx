import "./ImpormationNav.css"


const ImpormationNav = () => {
    return(
        <div className="ImpormationNav">
            <div className="ImpormationNavTitle">
                <h3>방과후 이름</h3>
            </div>
            <div className="ImpormationNavContent">
                <div>
                    <h3>수업시간</h3>
                    <h4>월,금,목:1700~21:00</h4>
                </div>
                <div>
                    <h3>수강대상</h3>
                    <h4>2학년</h4>
                </div>
                <div>
                    <h3>수강료</h3>
                    <h4>무료</h4>
                </div>
                <div>
                    <h3>기간</h3>
                    <h4>12주</h4>
                </div>
            </div>
        </div>
    )
}

export default ImpormationNav