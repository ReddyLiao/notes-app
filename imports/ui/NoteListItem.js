import React from "react";
import moment from "moment";

const NoteListItime = (props) => {
  return (
    <div>
      <h5>{props.note.title || "Untitle note"}</h5>
      <p>{moment(props.note.updatedAt).format("M/DD/YY")}</p>
    </div>
  );
};

NoteListItime.propTypes = {
  note: React.PropTypes.object.isRequired,
};
export default NoteListItime;
