import { SavedUserDataType, UserDataType, logindUserType } from '@/utils/types';
import useAuth from '@/utils/useAuth'
import React from 'react'

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { JwtPayload } from 'jsonwebtoken';


const About = () => {
    const user:logindUserType = useAuth();

    return (
        <>
            <main>
                <h1>Aboutページ</h1>
                <p>このページはログインしているユーザー専用</p>
                <hr />
                {user && (
                    <>
                    <p>{user.username}</p>
                    <p>{user.email}</p>
                    </>
                )}

            </main>
        </>
    )
}

const ContentsHeader = css`
  text-align: center;
  margin: 0 0 20px;
`;
const ContentsWrapper = css`
  max-width: 800px;
  margin: 0 auto;
`;


export default About