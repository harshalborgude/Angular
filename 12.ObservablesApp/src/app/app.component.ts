import { Component, OnInit } from '@angular/core';
import { from, Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ObservablesApp';

  // 1) Creating Observable Using Observable constructor

  // Creating new Observable object , have to pass a callback function to its constructor.
  // Observer will emit the data if there is subscriber.
  // so below data will be streamed to subscriber one by one
  // setTimeout(callBackFunc, timeInterval-ms);
  // Observable also emit errors, after error no value will be emitted.
  // After complete signals , Observable will not emmit any value.

  /*
  myObservable = new Observable((observer) => {
    console.log("Observable starts!");
    setTimeout(() => { observer.next("1") }, 1000);
    setTimeout(() => { observer.next("2") }, 2000);
    setTimeout(() => { observer.next("3") }, 3000);
    // setTimeout(()=>{observer.error(new Error("Something went wrong, Plz try again!"))},3000);
    setTimeout(() => { observer.next("4") }, 4000);
    setTimeout(() => { observer.next("5") }, 5000);
    // setTimeout(()=>{observer.complete()},3000);     // after complete signal , emition of values will stop
    setTimeout(() => { observer.complete() }, 6000);


    // observer.next("1");
    // observer.next("2");
    // observer.next("3");
    // observer.next("4");
    // observer.next("5");
  });
  */


  //================================================================================
  //2) Creating Observable Using "create" method.

  /*
  myObservable = Observable.create((observer:any)=>{
    console.log("Observable starts using create method!");
    setTimeout(() => { observer.next("A") }, 1000);
    setTimeout(() => { observer.next("B") }, 2000);
    setTimeout(() => { observer.next("C") }, 3000);
    setTimeout(() => { observer.next("D") }, 4000);
    setTimeout(() => { observer.next("E") }, 5000);
    setTimeout(() => { observer.complete() }, 6000);
  });
  */

//======================================================================================================================================
//3) Creating Observable Using "of()" :

  // This of operator will emmit complete signal by itself.No need of explicite emision of complete signal.
  // of can take n number of arguments
  // of will take all iterables and values , and it emmits all the values as it is.
  /*
  array1 = [1,2,3,4,8];
  array2 = ['A','B','C'];

  myObservable = of( this.array1, this.array2, 20, 79, "Hello");
  */

//======================================================================================================================================
//4) Creating Observable Using "from()" :

  // from will accept only 1 arguments , 
  // It iterates the over the iterable and emmits those values 1 by 1.
  // We can convert "Promise" to "Observable" using from operator.

  array1 = [1,2,3,4,8];
  array2 = ['A','B','C'];

  myObservable = from( this.array1);


//======================================================================================================================================
  // Subscriber - subscribing to all above Observables.

  // Creating Subscriber for Observable, It accepts 3 params - observable.subscribe(next , error , completed).(optional)
  // Subscriber will recieve a data one by one in streams.
  // first callback func get executed when it recieves "value" , second gets executed when it recieves "error" , third gets executed when data "completed"
  // Inside each call back func we can write handling logic of it, So there we can handle error also.
  ngOnInit(): void {
    this.myObservable.subscribe((val) => {
      console.log(val);
    }, (error) => {
      alert(error.message);
    }, () => {
      alert("Observable has completed emmiting values!");
    });
  }

}
