import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Product } from './model/products';
import { ProductService } from './service/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = '14.HTTPApp';

  // Injecting instance of HttpClient
  constructor(private productService:ProductService){ }

  allProducts :Product[]=[];
  isFetching:boolean = false;
  editMode: boolean = false;
  currentProductId:string ="";
  @ViewChild("productsForm") form:NgForm;
  errorMessage:string =null;
  errorSub:Subscription;

  ngOnInit(): void {
    this.fetchProducts();
    this.errorSub = this.productService.error.subscribe((errMsg)=>{
      this.errorMessage =  errMsg;
    });
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
    if(this.editMode){
      this.productService.updateProduct(products,this.currentProductId);
      this.editMode = false;
    }else{
      this.productService.createProduct(products);
    }
     
  }

  // GET
  // this.http.get<Retun Type>(URL,header?);
  // get method will return observable , have to subscribe it and have to get the data.
  // after getting response of get url, we can use pipe and map to transform the data as we wanted.
  fetchProducts(){
    console.log("GET request!");

    // using product service to fetchProduct.
    this.isFetching = true;
    this.productService.fetchProduct().subscribe((products)=>{
          console.log(products);
          this.allProducts = products;
        },
        (err)=>{
          this.errorMessage = err.message;
          console.log("Error :"+this.errorMessage)
        });
    this.isFetching = false;
  }

  // Delete  
  // this.http.delete(URL)
  // URL : 'https://angularbackendhrb-default-rtdb.firebaseio.com/products/{id}.json"
  // here by using id we are deleting that perticular product.
  OnDelete(product:Product){
    console.log("Delet product :"+product.pname);
    this.productService.deleteProduct(product);
  }

  // deleting all products
  // this.http.delete(URL)
  // URL : 'https://angularbackendhrb-default-rtdb.firebaseio.com/products.json"
  // by hitting this URL with delete method, all products will be deleted.
  deleteAll(){
    this.productService.deleteAllProducts();
  }

  // PUT
  // To edit the product , we will use onEdit method and will make PUT request with the same id.
  // Upon "Edit" button clicked , we will call "onEdit" method with the details of that specific product.
  // Have created below 3 properties to implement "Update" functionality.
  //     editMode: boolean = false;
  //     currentProductId:string ="";
  //     @ViewChild("productsForm") form:NgForm;
  // Here @ViewChild("productsForm") will get the details of form using local reference var and we can manipulate 
  //     that form now by using "form.setValue". inside setValue we have to pass object with key and values,kwy
  //      key are names of the forms.
  // Have created "editMode" property which is false by default.if its false button value will be "Add product"
  //      and if its true , button value will be "Update Product"
  // On clicking same button , both will call "onProductCreate()" only, we have to differentiate both request
  //      based on value of "editMode" property.And if its true , we can call service to updateProduct with the id.
  //      also have to store id of the product while edit button cliked.
  //  this.http.put('https://angularbackendhrb-default-rtdb.firebaseio.com/products/'+id+'.json',products,{headers:headers}).subscribe((response)=>{console.log("response :"+response);});

  onEdit(product:Product){
    // get the product details and fill with details
    console.log(this.form);
    this.form.setValue({
      pname: product.pname,
      description: product.description,
      price: product.price,
    });
    this.editMode = true;
    this.currentProductId = product.id;
    // change "add product" to "Update product" button.

  }

  ngOnDestroy(){
    this.errorSub.unsubscribe();
  }

}
