/* eslint-disable react/prop-types */
import { useState } from "react";
import { PiPencilSimpleLineDuotone } from "react-icons/pi";
import toast from "react-hot-toast";

const Form = ({ setNotes }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the text is empty
    if (text.trim().length === 0) {
      toast.error("Please write something!");
      return;
    }

    // Set the text as a parameter of newNotes
    setNotes(text);

    // Reset the form
    setText("");
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <textarea
            value={text}
            className="form-control"
            onChange={handleChange}
            placeholder="Write your note here..."
            rows="5"
            maxLength="500"
          />
        </div>

        <div className="col-auto">
          <button type="submit" className="btn btn-success mb-3">
            <PiPencilSimpleLineDuotone /> Add Note
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;