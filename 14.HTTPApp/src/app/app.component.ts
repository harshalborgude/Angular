import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = '14.HTTPApp';

  // Injecting instance of HttpClient
  constructor(private http : HttpClient){ }

  ngOnInit(): void {
    this.fetchProducst();
  }

  productsFetch(){
    this.fetchProducst();
  }

  //POST
  // with the instance of http (HttpClient) , we can make http requests.
  // in the body , we can provide objects , those objects will be converted into JSON format bydefault by post method.
  // Post request will return the observable, So observable emmit the data only when there is subscriber.
  // When we send "Post" request , browser always sends 2 requests, This is default behavious of browser.
  // First post request will send as "OPTIONS" request method , this will check weather its available to send post request or not?
  // http.post(url , body , headers )
  // We can pass custome header as a 3rd arguments in post method , have to create HttpHeaders object for that.
  onProductCreate(products:{pname:string,description:string,price:string}){
      console.log(products);
      const headers = new HttpHeaders({'myHeader':'test'});
      this.http.post(
        'https://angularbackendhrb-default-rtdb.firebaseio.com/products.json',
        products,{headers:headers})
      .subscribe((response)=>{
        console.log("response :"+response);
      });
  }

  // GET
  fetchProducst(){
    console.log("GET request!");
    this.http.get('https://angularbackendhrb-default-rtdb.firebaseio.com/products.json')
    .subscribe((response)=>{
      console.log(response);
    });
  }


}
