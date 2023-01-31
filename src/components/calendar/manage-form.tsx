import { CalendarManageForm, PriorityButton } from "@/styles/Calendar";
import { MdTitle } from "react-icons/md";
import { BsCalendarDate } from "react-icons/bs";
import { BiTime } from "react-icons/bi";
import { MdEditNote } from "react-icons/md";
import { RiFileAddLine } from "react-icons/ri";
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import LFormContainer from "src/layout/form";

export default function ManageCalendarForm() {
  return (
    <LFormContainer>
      <CalendarManageForm>
        <div className="button_container">
          <button type="button">
            <RiFileAddLine />
          </button>
          <button type="button">
            <BiEditAlt />
          </button>
          <button type="button">
            <RiDeleteBin6Line />
          </button>
        </div>
        <div>
          <label>
            <MdTitle />
          </label>
          <input type={"text"} />
        </div>
        <div>
          <label>Priority</label>
          <div>
            <PriorityButton priority={"high"} type="button"></PriorityButton>
            <PriorityButton priority={"medium"} type="button"></PriorityButton>
            <PriorityButton priority={"low"} type="button"></PriorityButton>
          </div>
        </div>
        <div>
          <label>
            <BsCalendarDate />
          </label>
          <input type={"date"} />
          <input type={"date"} />
        </div>
        <div>
          <label>
            <BiTime />
          </label>
          <input type={"time"} />
        </div>
        <div>
          <label>
            <MdEditNote />
          </label>
          <textarea />
        </div>
        <footer>
          <button>copmplete</button>
        </footer>
      </CalendarManageForm>
    </LFormContainer>
  );
}
