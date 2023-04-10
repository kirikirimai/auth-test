import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import jwt, { JwtPayload } from 'jsonwebtoken'
import { logindUserType } from './types'


const useAuth = () => {
    const [loginUser, setLoginUser] = useState<logindUserType>({ username: '', email: '' })
    const router = useRouter()

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (!token) {
            router.push('/login')
        }

       try {
        const decoded = jwt.verify(token!, process.env.NEXT_PUBLIC_SECRET_KEY as string)

        setLoginUser(decoded as logindUserType)

       } catch (error) {
        router.push('/login')        
       }

    }, [router])

    return loginUser

}

export default useAuth