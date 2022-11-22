import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, Subject, throwError } from "rxjs";
import { Product } from "../model/products";

// providedIn:root is same as adding this service class in app.module.
@Injectable({
    providedIn:'root'
})
export class ProductService{

    constructor(private http:HttpClient){}

    error = new Subject<string>();

    // create product in database
    createProduct(products:{pname:string,description:string,price:string}){
        console.log("Adding :"+products);
        const headers = new HttpHeaders({'myHeader':'test'});
        this.http.post('https://angularbackendhrb-default-rtdb.firebaseio.com/products.json',
                        products,
                        {headers:headers})
                    .subscribe((response)=>{
                            console.log("response :"+response);
                        },(error)=>{
                            this.error.next(error.message);
                        });
    }

    // Update product in database
    updateProduct(products:{pname:string,description:string,price:string},id:string){
        console.log("Updating :"+products);
        const headers = new HttpHeaders({'myHeader':'test'});
        this.http.put('https://angularbackendhrb-default-rtdb.firebaseio.com/products/'+id+'.json',
                        products,
                        {headers:headers})
                    .subscribe((response)=>{
        console.log("response :"+response);
      });
    }

    // fetch products from database
    fetchProduct(){
        // returning an Observable
        const header = new HttpHeaders().set('content-type','application/json')
                                        .set('header2','value');
        return this.http.get<{[key:string]:Product}>('https://angularbackendhrb-default-rtdb.firebaseio.com/products.json',{'headers':header})
        .pipe(map((res )=>{
        const products = [];
        for(const key in res){
            console.log("key :"+key);
            if(res.hasOwnProperty(key)){
            products.push({...res[key] , id:key});
            }
        }
        return products;
        }),catchError((err)=>{
            return throwError(err.message);
        }));
        // .subscribe((products)=>{
        //     console.log(products);
        //    this.allProducts = products;
        //   });

    }

    // delete a product from database
    deleteProduct(product:Product){
        this.http.delete('https://angularbackendhrb-default-rtdb.firebaseio.com/products/'+product.id+".json")
        .subscribe((val)=>{
          console.log("deleted "+product.pname);
        });
    }

    // delete all products from database
    deleteAllProducts(){
        this.http.delete('https://angularbackendhrb-default-rtdb.firebaseio.com/products.json')
        .subscribe((val)=>{
          console.log("deleted All");
        });
    }

}

