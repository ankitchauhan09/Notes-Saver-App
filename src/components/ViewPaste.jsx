import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

const ViewPaste = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const allPastes = useSelector((state) => state.paste.pastes);
  const paste = allPastes.find((p) => p._id === id);

  if (!paste) {
    return (
      <div className="view-container">
        <h2>Paste Not Found</h2>
        <button onClick={() => navigate("/pastes")}>Go Back</button>
      </div>
    );
  }

  return (
    <div className="view-container">
      <h1>{paste.title}</h1>
      <p>Created on: {new Date(paste.createdAt).toLocaleString()}</p>
      <pre>{paste.content}</pre>

      <button onClick={() => navigator.clipboard.writeText(paste.content)}>Copy</button>
      <button onClick={() => navigate("/pastes")}>Back</button>
    </div>
  );
};

export default ViewPaste;
