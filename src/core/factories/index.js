import {
    userService,
    uploadService,
    authService,
    groupService,
    messageService,
} from '../services'
import {
    userRepo, groupRepo,
    uploadRepo, authRepo,
    messageRepo,
} from '../repositories'
import user from './userUseCase'
import auth from './authUseCase'
import upload from './uploadUseCase'
import group from './groupUseCase'
import message from './messageUseCase'

export const userUseCase = user(
    userRepo(
        userService()
    )
)

export const uploadUseCase = upload(
    uploadRepo(
        uploadService()
    )
)

export const authUseCase = auth(
    authRepo(
        authService()
    )
)

export const groupUseCase = group(
    groupRepo(
        groupService()
    )
)

export const messageUseCase = message(
    messageRepo(
        messageService()
    )
)