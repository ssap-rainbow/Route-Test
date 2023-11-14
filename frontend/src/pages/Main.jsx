import React, { useState } from "react";
import Test from "./Test";
import { Link } from "react-router-dom";

export default function Main() {
  return (
    <div>
      Main페이지
      <Link to="/test">Test페이지로 이동</Link>
    </div>
  );
}
