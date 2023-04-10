import React, { useState } from "react";
import { useRouter } from "next/router";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Registar = () => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const router = useRouter();


  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
      })
    });

    const data = await res.json();
    if (data.created) {
      router.push("/login");
    } else {
      setError(data.message);
    }
  };
  

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    switch (name) {
      case "username":
        setUsername(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
    }
  }



  return (
    <>
      <main>
        <h1>Registar</h1>

        <form onSubmit={submitHandler} css={FormGroup}>
          <label htmlFor="username">ユーザー名</label>
          <input onChange={changeHandler} value={username} type="text" name="username" id="username" />
          <label htmlFor="email">メールアドレス</label>
          <input onChange={changeHandler} value={email} type="email" name="email" id="email" />
          <label htmlFor="password">パスワード</label>
          <input onChange={changeHandler} value={password} type="password" name="password" id="password" />
          {error && <div>{error}</div>}
          <button css={SubmitBtn} type="submit">
            ログイン
          </button>
        </form>
      </main>
    </>
  )
}


const ContentsHeader = css`
  text-align: center;
`;
const ContentsWrapper = css`
  max-width: 800px;
  margin: 0 auto;
`;

const FormGroup = css`
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 400px;

  label {
    font-weight: bold;
    margin-bottom: 5px;
  }

  input {
    padding: 10px;
    font-size: 16px;
    border-radius: 5px;
  }
`;

const SubmitBtn = css`
  background-color: #000;
  color: #fff;
  padding: 10px;
  border-radius: 5px;
  font-size: 16px;
  margin-top: 10px;
  cursor: pointer;
`;


export default Registar