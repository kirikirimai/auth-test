import type { NextApiRequest, NextApiResponse } from 'next'
import React from 'react'
import connectDB from '@/utils/connectDB'
import { UserModel } from '@/utils/shemaModels'


const Register = async (req: NextApiRequest, res: NextApiResponse) => {

    try {

        console.log(req.body)
        await connectDB()
        const checkUser = await UserModel.findOne({ email: req.body.email })
        if (checkUser) {
            return res.status(400).json({ message: "既に登録されているユーザーです。" })

        } else {
            await UserModel.create(req.body)
            return res.status(200).json({ message: "ユーザー登録成功", created: true })

        }


    } catch (error) {
        return res.status(400).json({ message: "ユーザー登録失敗" })
    }
}

export default Register