import { FC, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../context";
import { useField } from "../../../hooks";

const UserForm: FC = () => {
  const username = useField();
  const password = useField();
  const { performLogin } = useContext(UserContext);
  const navigate = useNavigate();

  const submitHandler = () => {
    if (username.value === "admin" && password.value === "1234") {
      performLogin();
      navigate("/home");
    }
  };

  return (
    <div className="m-0 vh-100 row justify-content-center align-items-center">
      <form onSubmit={submitHandler} className="col-auto">
        <div className="mb-3">
          <label className="text-light" >Insert username</label>
          <input type="text" className="form-control" {...username} />
        </div>
        <div className="mb-3">
          <label className="text-light">Insert password</label>
          <input type="password" className="form-control" {...password} />
        </div>

        <button className="btn btn-primary">Log in</button>
      </form>
    </div>
  );
};

export default UserForm;
