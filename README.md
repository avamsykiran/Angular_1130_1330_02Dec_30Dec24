Angular 18
====================================================================

    Objectives
    ----------------------------------------------------
        Getting Started
        Essentials - Components, Templates, Services
        Essentials - Working with Modules
        Components & Templates 
        Handling User Input & working with Forms (Template Driven and Reactive)
        Enhancing Elements  with Directives
        Transoforming values with Pipes 
        Understanding Services & Dependency Injection
        Making sense of 'change detection'
        Working with RxJS (Observables)
        Sending HTTP Requests & Handling Responses
        Routing & Building Multi-page Single Applications

    Pre-Requsite Skills
    -----------------------------------------------------

        HTML 5
        
        CSS 3
        
        Bootstrap 5

        JavaScript (ES6)
            Basics, DOM, String, Math, Date 
            Arrow Functions, Array Prototype Functions
            CallBacks, Maxims, Closures ..etc.,
            OOPs
            Module
            Promise, async and await, setInterval, setTimeout 

        NodeJS

    Angular Intro
    -------------------------------------------------------

        Angular is a javascript framework that supports SPA applications.

        Dynamic Web App
            Web-Server                                          Client

                Server-Side-Programs
                (Controller and Views)
                (Servlet / JSP)
                (aspx)
                ..etc.,
                                    <---------------REQ------------

                    html-content
                    is generated dynamically
                                    ---------RESP (html,czs,js)----->
        
        Single Page App
            Web-Server                                          Client

                spa-bundle
                (index.html + *.js)
                                    <---------------REQ------------
                                    ---------RESP (spa-bundle)----->   the index page is loaded along with the .js

                                                            any event or form submition or link'
                                                            will trigger a javascript function on the
                                                            client and the html-content is generated
                                                            on the client , and it replaces the 
                                                            existing content of teh index page.

            App Server

                WebService  <------------(.xml/.json)---------> for data related operations

        
        Angular Evolution

            AngularJS   - 2010  - Compltely JavaScript based and the app in written in JavaScript

            Angular 2   - 2016  - Typescript support is added, a new component system is developed

            Angular 4   - 2017
            Angular 5               HttpClient , Interceptors, Server-Side Rendering, Differential Loading
                                    RxJS (5.x) support

            Angular 6 to Angular 17     NgModules improved, Lazy Loading, ESLint , strict-mode on SSR,

            Angular 18      SSR is largly recefiend, HttpClient Module is marked depricated,
                            Signals, Deffered Views, Built-In Control Flows, function based routers
                            Angular Material and CDK are enhanced.

        TypeScript ?

            TypeScript = Javascript + TypeSafty

            Employee.js

                class Employee {
                    //........no fields can be declared
                    constructor(empId,fullName,mailId,salary,isContrctBased){
                        this.empId=empId;
                        this.fullName=fullName;
                        this.mailId=mailId;
                        this.salary=salary;
                        this.isContractBased=isContractBased;
                    }

                    hra(){
                        return this.salary*0.12;
                    }
                }

            Employee.ts

                class Employee {
                    
                    private empId : number;
                    private fullName : string;
                    private mailId : string;
                    private salary : number;
                    private isContractBased : boolena;

                    constructor(empId:number,fullName:string,mailId:string,salary:number,isContrctBased:boolean){
                        this.empId=empId;
                        this.fullName=fullName;
                        this.mailId=mailId;
                        this.salary=salary;
                        this.isContractBased=isContractBased;
                    }

                    //bydefault public
                    hra() : number {
                        return this.salary*0.12;
                    }
                }                

            TypeScript built-in data types
                number
                string
                boolean
                any             used to implement type-independent algorithms like sorting/searching ..etc.,
                null            is assigned to an object that not referencing anything.
                undefined       is the default value of any uninitialized variable.         
                void            is used to indicate no-teturn on functions.


                str1 : string;  //this str1 is not allowed to hold null or undefiend. and this is checked at compile time.
                str2 !: string; //this str2 is not allowed to hold null or undefiend. but the compiler error is suppresed.
                str3 ?: string; //this str3 is allowed to hold null or undefiend. 

                itemId : number | string ; //this is called a union. itemId can be either a number or a string.

        Node JS ?

        Angular Archetecture 


