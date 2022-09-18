import { Component, OnInit } from '@angular/core';
import { from, Observable, of ,map, filter, interval, Subscription} from 'rxjs';

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

  /*
  array1 = [1,2,3,4,8];
  array2 = ['A','B','C'];

  myObservable = from( this.array1);
  */

//===================================================================================================================
  // Operators in Observables 
  // map will use to transform the data , in single pipe we can use multiple operators - pipe(map()=>{},filter()=>{})
  // so here "map" will return transformed observable and it will be input to another operator "filter".
  // operator will be applied in the given order.
  // 1) map Operator : will transform the data of the observable and return new observable.
  // 2) filter Operator : will filter out the data from observable and return new observable with filtered data.

  array3 = [1,2,3,4,8];

  myObservable = from(this.array3);     
  // 1,2,3,4,8  => (*5) => 5,10,15,20,40
  mapObservable = this.myObservable.pipe(map((val)=>{
      return val*5;
  }),filter((val)=>{    // here after map operator it will return new observable and on that filter operator will be applied and it will return another observable.
    return val>5;
  }));

  // 2) filter Operator :
  // 5,10,15,20,40 => (val>17) => 20,40
  filterObservable = this.mapObservable.pipe(filter((val)=>{
    return val>17;
  }));

  

  //============================================================================================================================================
  // Interval function - used to check unsubscribe logic
  // This will return a observable and it will keep returning data infinitely until we Unsubscribe it.
  // if subscribe again and again , it will return new observable each time.

  counterObservable = interval(1000);   // returns numbers after that interval.
  counterUnsubscribe: Subscription | undefined ;



//======================================================================================================================================
  // Subscriber - subscribing to all above Observables.

  // Creating Subscriber for Observable, It accepts 3 params - observable.subscribe(next , error , completed).(optional)
  // Subscriber will recieve a data one by one in streams.
  // first callback func get executed when it recieves "value" , second gets executed when it recieves "error" , third gets executed when data "completed"
  // Inside each call back func we can write handling logic of it, So there we can handle error also.
  /*
  ngOnInit(): void {
    this.myObservable.subscribe((val) => {
      console.log(val);
    }, (error) => {
      alert(error.message);
    }, () => {
      alert("Observable has completed emmiting values!");
    });
  }
  */

  /*
  ngOnInit(): void {
    this.mapObservable.subscribe((val) => {
    // this.filterObservable.subscribe((val) => {
      console.log(val);
    }, (error) => {
      alert(error.message);
    }, () => {
      alert("Observable has completed emmiting values!");
    });
  }
  */

 
  ngOnInit():void {
    // subscribe method will return a numbers(counts), those are also a Observables

    // this.counterUnsubscribe = this.counterObservable.subscribe((val)=>{
    //   console.log(val);
    // })

  }

  // On subscribe button press , it will subscribe to observable
  subscribe(){
    this.counterUnsubscribe = this.counterObservable.subscribe((val)=>{
      console.log(val);
    })
  }

  // To unsubscibe the observable on unsubscribe button click
  unsubscribe(){
    this.counterUnsubscribe?.unsubscribe();
  }
  

}
