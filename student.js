class student {
    display(){
        console.log("hi from parent class");
    }
}
class student extends student {
    display1(){
        console.log("hi from child class");
    }
}
let s=new student();
s.display();
s.display1();