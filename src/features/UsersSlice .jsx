import { createSlice } from "@reduxjs/toolkit";
import { UserData } from "../Data";

export const userSlice = createSlice ({
    name: "users",
    initialState: {value: UserData},

    reducers: {
        addUser: (state, action) => {
            state.value.push(action.payload)
        },

        upDateFirstName: (state, action) => {
            // eslint-disable-next-line array-callback-return
            state.value.map((user) => {
                if (user.id === action.payload.id) {
                    user.firstName = action.payload.firstName
                }
            })
        },

        upDateLastName: (state, action) => {
            // eslint-disable-next-line array-callback-return
            state.value.map((user) => {
                if (user.id === action.payload.id) {
                    user.lastName = action.payload.lastName
                }
            })
        },

        upDateUserName: (state, action) => {
            // eslint-disable-next-line array-callback-return
            state.value.map((user) => {
                if (user.id === action.payload.id) {
                    user.userName = action.payload.userName
                }
            })
        },

        deleteUser: (state, action) => {
            state.value = state.value.filter ((user) => user.id !== action.payload.id)
        },

        
    }
})
export const {addUser, upDateFirstName, upDateLastName, upDateUserName, deleteUser} = userSlice.actions
export default userSlice.reducer