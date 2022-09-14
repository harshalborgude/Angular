import { EventEmitter } from "@angular/core"


export class UserService {
    users = [
        {name:'John',job:'Teacher',gender:'Male',country:'United States',age:34,avater:'assets/avater/john.jpg'},
        {name:'Mark',job:'Designer',gender:'Male',country:'Germany',age:34,avater:'assets/avater/Mark.jpg'},
        {name:'Merry',job:'Lawyer',gender:'Female',country:'Ireloand',age:34,avater:'assets/avater/Merry.jpg'},
        {name:'Steve',job:'Doctor',gender:'Male',country:'India',age:34,avater:'assets/avater/Steve.jpg'}
    ]

    onShowDetailsClicked = new EventEmitter<{name:string,job:string,gender:string,country:string,age:number,avater:string}>();

    ShowUserDetails (user:{name:string,job:string,gender:string,country:string,age:number,avater:string}){
        this.onShowDetailsClicked.emit(user);
    }
    
}