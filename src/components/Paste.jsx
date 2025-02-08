import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromPastes } from '../redux/pasteSlice';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Paste = () => {
  const pastes = useSelector((state) => state.paste.pastes);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="paste-container">
      <input
        className="search-bar"
        type="text"
        placeholder="Search Here"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="paste-list">
        {filteredData.length > 0 ? (
          filteredData.map((paste) => (
            <div key={paste._id} className="paste-item">
              <h3 className="paste-title">{paste.title}</h3>
              <p className="paste-content">{paste.content}</p>

              <div className="paste-actions">
                <button onClick={() => navigate(`/?pasteId=${paste._id}`)}>Edit</button>
                <button onClick={() => dispatch(removeFromPastes(paste._id))}>Delete</button>
                <button onClick={() => navigator.clipboard.writeText(paste.content)}>Copy</button>
                <button onClick={() => navigate(`/pastes/${paste._id}`)}>View</button>
              </div>
            </div>
          ))
        ) : (
          <p>No pastes found</p>
        )}
      </div>
    </div>
  );
};

export default Paste;
