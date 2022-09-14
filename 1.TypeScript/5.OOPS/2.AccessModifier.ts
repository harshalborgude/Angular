/*
1) Access Modifiers specify weather the member of the class can be accessible or not.
2) Access modifier are used to achieve security in OOPS
3) TypeScript supports 3 access modifiers
    - public - anywhere in program , in class and outside class also like java,
    - private - Accessible only within the same class.
    - protected. - Accessible in same class and corresponding child classes also.

    class <class-name>{
        accessModifier propertyName : dataType;
        
        accessModifier functionName : returnType {

        }
    }

-----------------------------------------------
Interfaces :
- Interface is the one which contains only abstract methods and properties
- The method which doesn't contain body is called as abstract method.
- In interface we will write only method declaration , Interface doesn't contain method implementations.
- To implement a interface class will use "implements" keyword.
- interface methods are byDefault public.
- One interface can be implemented by multiple classes , one class can implement multiple interface.
- Interface usually called as contract.

Interface Syntax :
interface InterfaceName {
    property : dataType;
    method(args) : returnType;
}

Implementation class for interface
class className implements InterfaceName {
    property : dataType;
    method(args) : returnType {
        // method implementation 
    }
}

-----------------------------------------------------------
TypeScript - Modules

- In large applications we will have multiple classes.
- It is highly recommended to write each class in a separate file.
- To access the class of one file in another file , we will use concept of modules.
- module is file ( ts file ) file which can export one or more classes to other file.
- To export a class we will use 'export' keyword. (source file)
- To import a class we will use 'import' keyword.  (destination file)


*/

// Refer School.ts and student.ts








