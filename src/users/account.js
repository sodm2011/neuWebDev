import React from "react";
import * as client from "./client";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Account() {
  const {id} = useParams(); 
  const [account, setAccount] = useState(null);
  const navigate = useNavigate();

  const findUserById = async (id) => {
    const user = await client.findUserById(id);
    console.log("find user by id", user)
    setAccount(user);
  };

  const fetchAccount = async () => {
    const account = await client.account();
    console.log("fetch account", account)
    setAccount(account);
  };
  const save = async () => {
    await client.updateUser(account);
    };

  const signout = async () => {
    await client.signout();
    navigate("../signin");
  };

  useEffect(() => {
    if (id) {
      findUserById(id);
      console.log("find user by id", id)
    } else {
    fetchAccount();
    console.log("fetch account")
    }
  }, []);
  return (
    <div className="w-50">
      <h1>MangoDB Account</h1>
      {account && (
        <div>
          <input value={account.password}
            onChange={(e) => setAccount({ ...account,
              password: e.target.value })}/>
          <input value={account.firstName}
            onChange={(e) => setAccount({ ...account,
              firstName: e.target.value })}/>
          <input value={account.lastName}
            onChange={(e) => setAccount({ ...account,
              lastName: e.target.value })}/>
          <input value={account.dob}
            onChange={(e) => setAccount({ ...account,
              dob: e.target.value })}/>
          <input value={account.email}
            onChange={(e) => setAccount({ ...account,
              email: e.target.value })}/>
          <select onChange={(e) => setAccount({ ...account,
              role: e.target.value })}>
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>
          <button onClick={save} className="btn btn-primary w-100">
            Save
          </button>
          <button onClick={signout} className="btn btn-danger w-100">
            Signout
          </button>
          
          <Link to="/Kanbas/admin/users" className="btn btn-warning w-100">
                Users</Link>
        </div>

      )}
    </div>
  );
}
export default Account;