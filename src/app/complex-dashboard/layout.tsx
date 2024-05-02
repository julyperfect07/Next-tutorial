import React from "react";

interface layoutProps {
  children: React.ReactNode;
  notification: React.ReactNode;
  revenue: React.ReactNode;
  users: React.ReactNode;
  login: React.ReactNode;
}

function layout({
  children,
  notification,
  revenue,
  users,
  login,
}: layoutProps) {
  const isLoggedIn = false;
  return isLoggedIn ? (
    <div>
      <div>{children}</div>
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>{users}</div>
          <div>{revenue}</div>
        </div>
        <div style={{ display: "flex", flex: "1" }}>
          {notification}
        </div>
      </div>
    </div>
  ) : (
    login
  );
}

export default layout;
