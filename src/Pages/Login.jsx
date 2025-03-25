import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

export const Login = () => {

  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const payload = {
    username: id,
    password: password
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(payload);
    try {
      let res = await axios.post('https://dummyjson.com/user/login', payload);
      if (res.status) {
        navigate("/list");
      }
      else {
        toast.error("Invalid Response");
        console.log("else");
      }
      console.log("111", res);
    } catch (error) {
      toast.error(error.message);
    }
    handleReset();
  };

  function handleReset() {
    setId("");
    setPassword("");
  }



  return (
    <>
      <div className="container">
        <form className="row" onSubmit={handleSubmit}>
          <div className="col-4">
            <input required value={id} placeholder="Id" type="text" className="form-control" onChange={(e) => setId(e.target.value)} />
          </div>
          <div className="col-4">
            <input required value={password} placeholder="Password" className="form-control" type="password" onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="col-2">
            <button type="submit" className="form-control">
              Submit
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </>
  );
};
