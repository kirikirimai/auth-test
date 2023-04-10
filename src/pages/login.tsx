import React, { useState } from "react";
import { useRouter } from "next/router";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Login = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string>("");
    const router = useRouter();

    const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const res = await fetch("/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                password,
            })
        });
        
        const data = await res.json();
        if(data.token) {
            alert("ログイン成功")
            localStorage.setItem("token", data.token);
            router.push("/");
        }else{
            setError(data.message);
        }
    };

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        
        switch (name) {
           
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
            <main css={ContentsWrapper}>
                <div css={ContentsHeader}>
                    <h1>Loginページ</h1>
                    
                </div>

                <form onSubmit={submitHandler} css={FormGroup}>
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
    );
};

const ContentsHeader = css`
  text-align: center;
  margin: 0 0 20px;
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

export default Login;
