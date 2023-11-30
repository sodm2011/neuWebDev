import React, { useState, useEffect } from "react";
import * as client from "./client";
import { BsPencil, BsTrash3Fill, BsFillCheckCircleFill, BsPlusCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function UserTable() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({ username: "", password: "", role: "USER" })
  const createUser = async () => {
    try {
        const newUser = await client.createUser(user);
        setUsers([...users, newUser]);
    } catch (error) {
        console.error(error);
    }
    };
  
  const fetchUsers = async () => {
    const users = await client.findAllUsers();
    setUsers(users);
  };

  const selectUser = async (user) => {
    try {
        const u = await client.findUserById(user._id);
        setUser(u);
    }   catch (error) {
        console.log(error);
    }};

    const updateUser = async () => {
        try {
            const status = await client.updateUser(user);
            setUsers(users.map(u => u._id === user._id ? user : u));
        } catch (error) {
            console.log(error);
        }};

    const deleteUser = async (user) => {
        try {
            await client.deleteUser(user._id);
            setUsers(users.filter(u => u._id !== user._id));
        } catch (error) {
            console.log(error);
        }};

  useEffect(() => { fetchUsers(); }, []);

  return (
    <div>
      <h1>User List</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Username</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>

          <tr>
            <td>
              <input value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })}/>
              <input value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })}/>
            </td>
            <td>
              <input value={user.firstName} onChange={(e) => setUser({ ...user, firstName: e.target.value })}/>
            </td>
            <td>
              <input value={user.lastName} onChange={(e) => setUser({ ...user, lastName: e.target.value })}/>
            </td>
            <td>
              <select value={user.role} onChange={(e) => setUser({ ...user, role: e.target.value })}>
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
                <option value="FACULTY">Faculty</option>
                <option value="STUDENT">Student</option>
              </select>
            </td>
            <td>
            <BsFillCheckCircleFill onClick={updateUser}/>
              <BsPlusCircleFill onClick={createUser}/>
            </td>
          </tr>

        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>
                <Link to={`../../Kanbas/account/${user._id}`} >
                {user.username}</Link></td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td className="text-nowrap">
                    <button className="btn btn-danger me-2">
                    <BsTrash3Fill onClick={() => deleteUser(user)} />
                    </button>
                    <button className="btn btn-warning me-2">
                    <BsPencil onClick={() => selectUser(user)} />
                    </button>
                </td>
            </tr>))}
        </tbody>
      </table>
    </div>
  );
}
export default UserTable;