import { useState } from "react";
import { creatNewUser, logIn, logOut, uesrConnectedInfo } from "../firebase/registerUser";

export default function Registr() {
  const [registrData, setRegistrData] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    setRegistrData({ ...registrData, [e.target.name]: e.target.value });
  }

  function clearForm() {
    setRegistrData({
      email: "",
      password: "",
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    creatNewUser(registrData.email, registrData.password);
    console.log(
      `Email: ${registrData.email}\nPassword: ${registrData.password}`
    );
    clearForm();
  }
  
  function handleLogIn(){
    logIn(registrData.email, registrData.password)
    clearForm();
  }
  return (
    <div className="input-area">
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={registrData.email}
            placeholder="email"
            required
            onChange={handleChange}
          />
        </label>
        <label>
          password:
          <input
            type="password"
            name="password"
            value={registrData.password}
            placeholder="password"
            required
            onChange={handleChange}
          />
        </label>
        <button type="submit">submit</button>
        <button type="button" onClick={handleLogIn}>
          LogIn
        </button>
        <button type="button" onClick={uesrConnectedInfo}>User information</button>
        <button type="button" onClick={logOut}>LogOut</button>
      </form>
    </div>
  );
}