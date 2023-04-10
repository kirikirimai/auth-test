import { Types } from 'mongoose'

/* ユーザー */
export interface UserDataType {
    username: string
    email: string
    password: string
}

/* mongoDBに登録したユーザー */
export interface SavedUserDataType extends UserDataType {
    _id: Types.ObjectId
}

export interface logindUserType {
    username: string
    email: string
}
