import React from 'react'
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Link from 'next/link';
import useAuth from '@/utils/useAuth';

const Header = () => {

  return (
    <header css={HeaderBlock}>
      <h1>ログインを試してみる</h1>
      <nav css={NavBlock}>
        <ul>
          <li><Link href={"/"}>Top</Link></li>
          <li><Link href={"/about"}>About</Link></li>
          <li><Link href={"/login"}>Login</Link></li>
          <li><Link href={"/register"}>Register</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header


const HeaderBlock = css`
  background-color: #000;
  padding: 0.8rem;
  color: #fff;
  font-size: 14px;
  line-height: 1;
  display:flex;
  align-items:center;
`

const NavBlock = css`
  ul{
    list-style:none;
    display:flex;
    font-size:14px;
    li{
      margin-left:1rem;
    }
  }
`