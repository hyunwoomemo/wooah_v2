import { FormEvent, ReactElement, useState } from "react";
import axios from "axios";
import styled from "@emotion/styled";

const SignupForm = () => {
  const [userId, setUserId] = useState("testid");
  const [userPw, setUserPw] = useState("testpw");

  const handleRegister = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3030/auth/register", {
        userId: userId,
        userPw: userPw,
      });
      console.log(response);
    } catch (error) {}
  };

  return (
    <Base>
      <h2>Register</h2>
      <Form onSubmit={handleRegister}>
        <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} />
        <input type="password" value={userPw} onChange={(e) => setUserPw(e.target.value)} />
        <button type="submit">Register</button>
      </Form>
    </Base>
  );
};

const Base = styled.div``;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

export default SignupForm;
