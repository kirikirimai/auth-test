import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import jwt from 'jsonwebtoken'
import { logindUserType } from './types'


const useAuth = () => {
    const [loginUser, setLoginUser] = useState<logindUserType>({})
    const router = useRouter()

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (!token) {
            router.push('/login')
        }

       try {
        const decoded:logindUserType = jwt.verify(token, process.env.NEXT_PUBLIC_SECRET_KEY)

        setLoginUser(decoded)

       } catch (error) {
        router.push('/login')        
       }

    }, [router])

    return loginUser

}

export default useAuth