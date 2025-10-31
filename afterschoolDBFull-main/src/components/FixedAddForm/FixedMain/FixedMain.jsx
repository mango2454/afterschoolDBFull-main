const FixedMain = () => {
    return (
      <div>
        <div className="AddForm">
          {/* 1행 */}
          <div className="AddFormRow">
            <div>
              <label>방과후</label>
              <input type="text" placeholder="" />
            </div>
            <div>
              <label>수강대상</label>
              <input type="text" placeholder="" />
            </div>
          </div>

          {/* 2행 */}
          <div className="AddFormRow">
            <div>
              <label>담당교사</label>
              <input type="text" placeholder="" />
            </div>
            <div>
              <label>수강료</label>
              <input type="text" placeholder="" />
            </div>
          </div>

          {/* 3행 */}
          <div className="AddFormRow">
            <div>
              <label>수업요일과 수업시간</label>
              <input type="text" placeholder="ex)월,수,목 17:00~21:00" />
            </div>
            <div>
              <label>장소</label>
              <input type="text" placeholder="ex)406호" />
            </div>
          </div>

          {/* 4행 */}
          <div className="AddFormRow">
            <div>
              <label>최대정원</label>
              <input type="text" placeholder="" />
            </div>
            <div>
              <label>운영기간</label>
              <input type="text" placeholder="ex)2주" />
            </div>
          </div>

          {/* 5행: 설명 */}
          <div className="AddFormRowFull">
            <label>방과후 설명</label>
            <textarea placeholder=""></textarea>
          </div>

          {/* 6행: 준비물 */}
          <div className="AddFormRowFull">
            <label>준비물</label>
            <textarea placeholder=""></textarea>
          </div>

          {/* 상태 버튼 */}
          <div className="AddFormStateButtons">
            <button className="recruit">모집중</button>
            <button className="end">마감</button>
          </div>

          {/* 등록 버튼 */}
          <div className="AddFormSubmit">
            <button type="submit">수정하기</button>
          </div>
        </div>
      </div>
    );
}

export default FixedMain