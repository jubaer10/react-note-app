import { useState } from "react";
import Form from "../form/Form";

const Content = () => {
  const [notes, setNotes] = useState("");

  const handleSetNotes = (newNotes) => {
    setNotes(newNotes);
  };

  return (
    <div className="container py-5 col-md-4 col">
      <Form setNotes={handleSetNotes} />

      {notes && (
        <div className="bg-success-subtle p-2 rounded">
          <p className="text-success fw-bold">{notes}</p>
        </div>
      )}
    </div>
  );
};

export default Content;