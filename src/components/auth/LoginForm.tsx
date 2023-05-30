import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <div>
      <input type="text" />
      <Link to="/register">회원가입</Link>
    </div>
  );
};

export default LoginForm;
