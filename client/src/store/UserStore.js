import {makeAutoObservable} from "mobx";

export default class UserStore{
    constructor() {
        this._isAuth = false
        this._login = true
        this._reg = false
        this._users = []
        this._currentUser = {}
        this._currentProfile = {}
        makeAutoObservable(this)
    }
    setIsAuth(bool){
        this._isAuth = bool
    }
    setLogin(bool){
        this._login = bool
    }
    setReg(bool){
        this._reg = bool
    }
    setUser(user){
        this._users = user
    }
    setCurrentUser(currUser){
        this._currentUser = currUser
    }
    setCurrentProfile(currProfile){
        this._currentProfile = currProfile
    }
    get isAuth(){
        return this._isAuth
    }
    get login(){
        return this._login
    }get reg(){
        return this._reg
    }

    get user(){
        return this._users
    }
    get currUser(){
        return this._currentUser
    }
    get currProfile(){
        return this._currentProfile
    }
}