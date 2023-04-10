import type { NextApiRequest, NextApiResponse } from 'next'
import React from 'react'
import jwt from "jsonwebtoken"
import connectDB from '@/utils/connectDB'
import { UserModel } from '@/utils/shemaModels'

const Login = async (req: NextApiRequest, res: NextApiResponse) => {

    try {
        const { email, password } = req.body

        await connectDB()

        const saveUser = await UserModel.findOne({ email: email })
        
        if (saveUser) {

            if (password === saveUser.password) {
                const token = jwt.sign({
                    username: saveUser.username,
                    email: email,
                },process.env.NEXT_PUBLIC_SECRET_KEY , { expiresIn: "2m" })
             
                return res.status(200).json({ message: "ログイン成功", token: token })
            } else {
                return res.status(400).json({ message: "パスワードが間違っています" })
            }
        } else {
            return res.status(400).json({ message: "ユーザーが存在しない。登録してください" })
        }

    } catch (error) {
        return res.status(400).json({ message: "ログイン失敗" })
    }
}

export default Login