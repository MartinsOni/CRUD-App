/* eslint-disable jsx-a11y/no-distracting-elements */
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addUser,
  deleteUser,
  upDateUserName,
  upDateFirstName,
  upDateLastName,
} from "./features/UsersSlice ";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const allUser = useSelector((state) => state.users.value);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [newFirstName, setNewFirstName] = useState("");
  const [newLastName, setNewLastName] = useState("");
  const [newUserName, setNewUserName] = useState("");

  return (
    <div className="App">
      <h1 className="header"><marquee>CRUD APP USING REACT REDUX</marquee></h1>
      <div className="container">
        <div>
          <div className="addUser">
            <label>
              Firstname:
              <input
                className="inputField"
                type="text"
                placeholder="Firstname....."
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
            </label>
            <label>
              Lastname:
              <input
                className="inputField"
                type="text"
                placeholder="LastName....."
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
            </label>
            <label>
              Username:
              <input
                className="inputField"
                type="text"
                placeholder="Username....."
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
            </label>
            <button
              onClick={(e) => {
                dispatch(
                  addUser({
                    id: allUser[allUser.length - 1].id + 1,
                    firstName,
                    lastName,
                    userName,
                  })
                );
              }}
            >
              Add User
            </button>
          </div>
        </div>
        <div className="displayUser">
          {allUser.map((user) => {
            return (
              <div className="allUser">
                <div className="userDetails">
                  <h1>Firstname: {user.firstName}</h1>
                  <input
                    type="text"
                    placeholder="New first name....."
                    onChange={(e) => {
                      setNewFirstName(e.target.value);
                    }}
                  />
                  <button
                    onClick={() => {
                      dispatch(
                        upDateFirstName({
                          id: user.id,
                          firstName: newFirstName,
                        })
                      );
                    }}
                  >
                    Update Firstname
                  </button>
                  <h1>Lastname: {user.lastName}</h1>
                  <input
                    type="text"
                    placeholder="New last name....."
                    onChange={(e) => {
                      setNewLastName(e.target.value);
                    }}
                  />
                  <button
                    onClick={() => {
                      dispatch(
                        upDateLastName({
                          id: user.id,
                          lastName: newLastName,
                        })
                      );
                    }}
                  >
                    Update Lastname
                  </button>
                  <h1>Username: {user.userName}</h1>
                  <input
                    type="text"
                    placeholder="New user name....."
                    onChange={(e) => {
                      setNewUserName(e.target.value);
                    }}
                  />
                  <button
                    onClick={() => {
                      dispatch(
                        upDateUserName({
                          id: user.id,
                          userName: newUserName,
                        })
                      );
                    }}
                  >
                    Update Username
                  </button>
                </div>
                <div>
                  <button
                    onClick={() => {
                      dispatch(
                        deleteUser({
                          id: user.id,
                        })
                      );
                    }}
                  >
                    Delete User
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
