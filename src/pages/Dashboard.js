import React from "react";
import {Link} from "react-router-dom";
import Button from "../components/Elements/Button";

export default function Dashboard() {
  return (
    <div>
      Dashboard
      <Link to={"/login"}>
        <Button title="Login" variant="bg-mandarin" />
      </Link>
      <Link to={"/registration"}>
        <Button title="registration" variant="bg-mandarin" />
      </Link>
    </div>
  );
}
