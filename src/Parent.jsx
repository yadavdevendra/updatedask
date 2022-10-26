import React, { useEffect, useState } from "react";

function Parent() {
  const [number, setNumber] = useState(0);
  const [user, setUser] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setUser(data);
    };
    fetchData();
  }, []);
  return (
    <>
      <div>This is a Parent component</div>
      <input
        type="number"
        placeholder="0"
        onChange={(e) => setNumber(e.target.value)}
        style={{ width: "50%", padding: "14px" }}
      />
      <ChildA number={number} user={user} />
    </>
  );
}

function ChildA({ number, user }) {
  const newnumber = Number(number) + 1;
  return (
    <>
      <div
        style={{
          display: "flex",
          textAlign: "center",
          border: "5px solid whitesmoke",
        }}
      >
        <h2>{newnumber}</h2>
        <h4>ComponentsA</h4>
      </div>
      <div>
        <ChildB number={number} user={user} />
      </div>
    </>
  );
}

function ChildB({ number, user }) {
  const newnumber = Number(number) + 2;
  return (
    <>
      <div
        style={{
          display: "flex",
          textAlign: "center",
          border: "5px solid whitesmoke",
        }}
      >
        <h2>{newnumber}</h2>
        <h4>ComponentsB</h4>
      </div>
      <div>
        <ChildC number={number} user={user} />
      </div>
    </>
  );
}

function ChildC({ number, user }) {
  const newnumber = Number(number) + 3;
  return (
    <>
      <div
        style={{
          display: "flex",
          textAlign: "center",
          border: "5px solid whitesmoke",
        }}
      >
        <h2>{newnumber}</h2>
        <h4>ComponentsC</h4>
      </div>
      <div>
        <DataShowInTable number={number} user={user} />
      </div>
    </>
  );
}

const DataShowInTable = ({ user }) => {
  console.log("table");
  return (
    <>
      <div
        style={{
          display: "flex",
          textAlign: "center",
          border: "5px solid whitesmoke",
        }}
      >
        <table cellPadding="0" cellSpacing="0">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>UserName</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Website</th>
            </tr>
          </thead>
          <thead>
            {user.map((users) => (
              <tr key={users.id}>
                <td>{users.id}</td>
                <td>{users.name}</td>
                <td>{users.username}</td>
                <td>{users.email}</td>
                <td>{users.phone}</td>
                <td>{users.website}</td>
              </tr>
            ))}
          </thead>
        </table>
      </div>
    </>
  );
};
export default Parent;
