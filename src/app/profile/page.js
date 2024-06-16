import React from "react";
async function getUsers() {
  let data = await fetch("http://localhost:3000/api/users");
  data = await data.json();
  return data;
}
async function page() {
  const users = await getUsers();
  console.log(users);
  return (
    <div>
      <h1>User Profile </h1>
      {users.map((user) => {
        return (
          <div
            key={user.id}
            style={{
              backgroundColor: "red",
              textAlign: "center",
              border: "2px solid gray",
              padding: "10px",
              margin: "10px",
              borderRadius: "10px",
            }}
          >
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.id}</p>
          </div>
        );
      })}
    </div>
  );
}

export default page;
