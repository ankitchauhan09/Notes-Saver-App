import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

// Load pastes from localStorage or default to an empty array
const initialState = {
  pastes: JSON.parse(localStorage.getItem("pastes")) || [],
};

export const pasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
    // Add new paste
    addToPastes: (state, action) => {
      state.pastes.push(action.payload);
      localStorage.setItem("pastes", JSON.stringify(state.pastes));
      toast.success("Paste Created Successfully");
    },
    
    // Update existing paste
    updateToPastes: (state, action) => {
      const index = state.pastes.findIndex(paste => paste._id === action.payload._id);
      if (index !== -1) {
        state.pastes[index] = action.payload;
        localStorage.setItem("pastes", JSON.stringify(state.pastes));
        toast.success("Paste Updated Successfully");
      } else {
        toast.error("Paste Not Found");
      }
    },

    // Remove a paste by ID
    removeFromPastes: (state, action) => {
      const newPastes = state.pastes.filter(paste => paste._id !== action.payload);
      if (newPastes.length < state.pastes.length) {
        state.pastes = newPastes;
        localStorage.setItem("pastes", JSON.stringify(state.pastes));
        toast.success("Paste Removed Successfully");
      } else {
        toast.error("Paste Not Found");
      }
    },

    // Clear all pastes
    resetAllPastes: (state) => {
      state.pastes = [];
      localStorage.removeItem("pastes");
      toast.success("All Pastes Reset Successfully");
    },
  },
});

// Export actions
export const { addToPastes, updateToPastes, removeFromPastes, resetAllPastes } = pasteSlice.actions;

// Export reducer
export default pasteSlice.reducer;
