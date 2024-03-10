import React, { useState } from "react";
import { SD_Roles } from "../Utility/SD";
import { inputHelper, toastNotify } from "../Helper";
import { useRegisterUserMutation } from "../Apis/authApi";
import { apiResponse } from "../Interfaces";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { MainLoader } from "../Components/Layout/Page/MenuItems/Common";

function Register() {
  const navigate = useNavigate();
  const [registerUser] = useRegisterUserMutation();
  const [loading, setLoading] = useState(false);
  const [userInput, setUserInput] = useState({
    userName: "",
    name: "",
    password: "",
    role: "",
  });

  const handleUserInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const tempData = inputHelper(e, userInput);
    setUserInput(tempData);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const response: apiResponse = await registerUser({
      userName: userInput.userName,
      name: userInput.name,
      password: userInput.password,
      role: userInput.role,
    });
    if (response.data) {
      toast.success("User registered successfully");
      navigate("/login");
    } else if (response.error) {
      toastNotify(response.error.data.errorsMessages[0], "error");
    }
    setLoading(false);
  };

  return (
    <div className="container text-center">
      {loading && <MainLoader />}
      <form method="post" onSubmit={handleSubmit}>
        <h1 className="mt-5">Register</h1>
        <div className="mt-5">
          <div className="col-sm-6 offset-sm-3 col-xs-12 mt-4">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Username"
              required
              name="userName"
              value={userInput.userName}
              onChange={handleUserInput}
            />
          </div>
          <div className="col-sm-6 offset-sm-3 col-xs-12 mt-4">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Name"
              required
              name="name"
              value={userInput.name}
              onChange={handleUserInput}
            />
          </div>
          <div className="col-sm-6 offset-sm-3 col-xs-12 mt-4">
            <input
              type="password"
              className="form-control"
              placeholder="Enter Password"
              required
              name="password"
              value={userInput.password}
              onChange={handleUserInput}
            />
          </div>
          <div className="col-sm-6 offset-sm-3 col-xs-12 mt-4">
            <select
              className="form-control form-select"
              required
              name="role"
              value={userInput.role}
              onChange={handleUserInput}
            >
              <option value="">-- Select Role --</option>
              <option value={`${SD_Roles.CUSTOMER}`}>Customer</option>
              <option value={`${SD_Roles.ADMIN}`}>Admin</option>
            </select>
          </div>
        </div>
        <div className="mt-5">
          <button type="submit" className="btn btn-success" disabled={loading}>
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
