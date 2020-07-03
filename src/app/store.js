import { configureStore } from '@reduxjs/toolkit';
import activeTabReducer from '../features/menuBar/menuBarRedux';

export default configureStore({
  reducer: {
    activeTab: activeTabReducer,
  },
});
