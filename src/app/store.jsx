import { configureStore } from '@reduxjs/toolkit'
import UsersReducer from '../features/UsersSlice '

export const store = configureStore({
  reducer: {
    users: UsersReducer
  },
})
