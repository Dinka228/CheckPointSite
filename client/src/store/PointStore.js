import {makeAutoObservable} from "mobx";

export default class PointStore{
    constructor() {
        this._showCategory = false
        this._showStrategy = false
        this._showDiagram = false
        this._showPoint = false
        this._showProject = false
        this._showAdmin = false
        this._showCreatePoint = false
        this._project = []
        this._category = []
        this._strategy = []
        this._point1 = []
        this._point2 = []
        this._point3 = []
        this._points = []
        this._currStrategy = []
        this._currStrategyForAdmin = []
        this._currCategory = []
        this._currProject = []
        makeAutoObservable(this)
    }
    setPoints(points){
        this._points = points
    }
    setProject(project){
        this._project = project
    }
    setPoint1(point1){
        this._point1 = point1
    }
    setPoint2(point2){
        this._point2 = point2
    }
    setPoint3(point3){
        this._point3 = point3
    }
    setShowCategory(bool){
        this._showCategory = bool
    }
    setShowStrategy(bool){
        this._showStrategy = bool
    }
    setShowDiagram(bool){
        this._showDiagram = bool
    }
    setShowProject(bool){
        this._showProject = bool
    }
    setShowPoint(bool){
        this._showPoint = bool
    }
    setShowAdmin(bool){
        this._showAdmin = bool
    }
    setShowCreatePoint(bool){
        this._showCreatePoint = bool
    }
    setCategory(category){
        this._category = category
    }
    setCurrStrategy(currStrategy){
        this._currStrategy = currStrategy
    }
    setCurrStrategyForAdmin(currStrategy){
        this._currStrategyForAdmin = currStrategy
    }
    setCurrProject(currProject){
        this._currProject = currProject
    }
    setCurrCategory(currCategory){
        this._currCategory = currCategory
    }
    setStrategy(strategy){
        this._strategy = strategy
    }
    get points(){
        return this._points
    }
    get showAdmin(){
        return this._showAdmin
    }
    get showCreatePoint(){
        return this._showCreatePoint
    }
    get showProject(){
        return this._showProject
    }
    get project(){
        return this._project
    }
    get point1(){
        return this._point1
    }
    get point2(){
        return this._point2
    }
    get point3(){
        return this._point3
    }
    get category(){
        return this._category
    }
    get currStrategy(){
        return this._currStrategy
    }
    get currStrategyForAdmin(){
        return this._currStrategyForAdmin
    }
    get currCategory(){
        return this._currCategory
    }
    get currProject(){
        return this._currProject
    }
    get strategy(){
        return this._strategy
    }
    get showStrategy(){
        return this._showStrategy
    }
    get showCategory(){
        return this._showCategory
    }
    get showDiagram(){
        return this._showDiagram
    }
    get showPoint(){
        return this._showPoint
    }
}