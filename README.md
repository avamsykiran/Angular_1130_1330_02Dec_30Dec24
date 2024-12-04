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
            Web-Server                                          Client / Browser

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
            Web-Server                                          Client / Browser

                spa-bundle
                (index.html + *.js + .css)
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

            Typescript getters and setters

                class Point {
                    
                    private _x : number;
                    private _y : number;

                    constructor(x:number,y:number) {
                        this._x=x;
                        this._y=y;
                    }

                    get x {
                        return this._x;
                    }

                    set x (value:number){
                        this._x=value;
                    }

                    get y {
                        return this._y;
                    }

                    set y (value:number){
                        this._y=value;
                    }

                }

                let p = new Point(12,4);
                console.log(p.x);
                console.log(p.y);

                p.x = 9;
                p.y = 7;

                console.log(p.x);
                console.log(p.y);

                let p2 = new Point(p.x+15,p.y);

            TypeScript Interfaces

                interface Employee {
                    empId:number;
                    fullName:string;
                    basicPay:number;
                }

                let emp = {empId:101,fullName:"Vamsy",basicPay:98000};

        Node JS ?

            NodeJS is a javascript runtime, apart from a browser. Now javascript can execute without
            a GUI (html / css). Javascript can be used to develop stand alone non gui programs or tools.

            Things like servers, build tools, compilers, code quality tools, testing tools etc., were developed in javascript.

            npm (node package manager) is such a build tool for javscript apps.

            babel and tsc are typescript compilers developed in javascript.

            NodeJs is used as a development environment for Angular, because we need tools like
            npm as build tool, tsc for typescript compilation, karma as testing tool ..etc., for developing
            an angular application.

            Angular development server is also executed on NodeJS. And then after the app is build and hsoted,
            it is executed on a browser.

            A NodeJS project (mahy it be a library or a framework or an app) is called a PACKAGE.
            
            To Create any NodeJS Package,

                md app-name
                cd app-name
                npm init

            'package.json' is the build config for NPM.

            npm i package-name          for installing a thrid party package into ./node_modules folder of our project
            npm unintall package-name

            npm i -g package-name       for installing a thrid party package or tool globally.

            npm i                       it installs all the third party dependencies mentioned in the 'package.json'.

            node --version

            npm version

        Angular CLI

            Angular Command Line Interface is a frontier of commands for creating and managing an
            angular application.

            ng version

            npm i -g @angular/cli@18.0.6

            ng new app-name         is used to create a new anuglar project

            ng serve                will compile and package the app and will hsot it on a Ang., Dev., Ser., @ 4200
            ng serve --port 9090    will compile and package the app and will hsot it on a Ang., Dev., Ser., @ 9090
            ng serve --port 9090 -o will compile and package the app and will hsot it on a Ang., Dev., Ser., @ 9090, and
                                    alos launches the app on a browser.

        Angular Archetecture 

            An angular application is made up of a variety of artifacts called:

                Components
                Directives
                Pipes
                Services
                Modules

            1. Each of these artiufacts is a class.
            2. Each artifact is marked with a decorator to identify its nature.
            3. Each of these decorators accept a json-object called META-DATA, that has the config., info of that artifact.
            4. A component or a pipe or a directive or a service can be grouped in a module or can be left without any
                module. If they do not belong to any module, then they are termed as 'standalone'.

            Components

                @Component({
                    selector:'',
                    templateUrl:'',
                    styleSheets:[]
                })
                class DashboardComponent {

                }

            Directives

                @Directive({
                    selector:''
                })
                class BadLoanDirective {

                }

            Pipes

                @Pipe({
                    name:''
                })
                class InWordsPipe {

                } 

            Services

                @Injectable({
                    providedIn:'root'
                })
                class LoanService {

                }

            Modules

                @NgModule({
                    declarations:[],
                    imports:[],
                    exports:[],
                    providers:[]
                })
                class InvestmentsModule{

                }