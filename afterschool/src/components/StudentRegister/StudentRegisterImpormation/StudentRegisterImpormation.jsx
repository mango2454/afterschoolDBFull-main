import { useState } from "react";
import StudentImpormationHead from "./StudentImpormationHead/StudentImpormationHead";
import StudnetRegisterImportmationNav from "./StudnetRegisterImportmationNav/StudnetRegisterImportmationNav";
import StudnetRegisterImportmationMain from "./StudnetRegisterImportmationMain/StudnetRegisterImportmationMain";
import StudentApplyPopup from "./StudentApplyPopup/StudentApplyPopup";

const StudentRegisterImpormation = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => setIsPopupOpen(true);
  const handleClosePopup = () => setIsPopupOpen(false);

  return (
    <div>
      <StudentImpormationHead onOpenPopup={handleOpenPopup} />
      <StudnetRegisterImportmationNav />
      <StudnetRegisterImportmationMain />

      {isPopupOpen && <StudentApplyPopup onClose={handleClosePopup} />}
    </div>
  );
};

export default StudentRegisterImpormation;
