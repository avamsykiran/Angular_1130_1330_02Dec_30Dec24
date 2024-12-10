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

                Directives
                Components
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

    Angular Directives

        a directive is a custom html element or attribute.

        We have three types of directives
            1. Component Directives / Components
            2. Attribute Directives / Directives
            3. Structural Directives

    Angular Component Directives / Components

        A component is a custom element.

        Each component has three parts
            a component class           .component.ts       state and behavior
            a component tmeplate        .component.html     html-dom
            a component style sheet     .component.css      

        ng g c ComponentName --skip-tests

        Data Binding

            is a machanisim to access the variables and method of a component class
            in that component template.

            Interpolation
                is used to render the value of any angular expression in the content of a dom-element.

                <tag-name> {{ expression }} </tag-name>

                <h3> {{title}} </h3>

            Two-Way Data Binding

                is used to map the value of a input element to a field.

                <input [(ngModel)]="field" />

                'ngModel' is defined in FormsModule

            One Way Data Binding
                Attribute Binding
                    is used to bind a field to an attribute.

                    <tag-name [attribute-name]="field"> content </tag-name>

                    <p [width]="x"> </p>
                    
                Event Binding
                    is used to map a method to a event directive.

                    html-event-attribute        event-directives
                        onclick                     click
                        onfocus                     focus
                        onblur                      blur
                        onchange                    change
                        onsubmit                    submit / ngSubmit
                        ..etc.,

                    <tag-name (event-directive)="method()" >content </tag-name>

                    <button (click)="doSomethingWhenButtonClicked()">Click Me</button>
                    
                Style Binding

                    allows us to control the css properties and css classes.

                    <tag-name [style.cssProperty]="field" > content </tag-name>

                    <p [style.fontSize.em]="x" > content </p>
                    
                    <tag-name [class.className]="booleanField" > content </tag-name>

                    <p [class.highlight]="flag1" > content </p>

                    <tag-name [ngStyle]="jsonObject" > content </tag-name>
                        this jsonObject msut contain the css properties as keys mapped to their valeus.
                    
                    <tag-name [ngClass]="jsonObject" > content </tag-name>
                        this jsonObject msut contain the css-class-names as keys mapped to true/false as values.

        Data Exchange between a parent and a child component

            A pernet can pass any object or primitve value or even a function to a child component
            through a component attribute.

            A component can an attribute for itself by marking a field with @Input() decorator.

        
    Angular Attribute Directives / Directives

        is a custom attribute to be used on any html element or angular component.

        Built-in Attribute Directives:

            ngModel, ngForm ..etc., from FormsModule
            ngStyle, ngClass ..etc., from CommonModule
            and many more

        Custom Directive

            ng g directive DirectiveName --skip-tests

            @Input()            decorator is used to receive a value into the directive
            @HostListener()     decorator is used to handle any events on the element on which the directive is applied.


    Angular Structural Directives

        a structural directive can control the repetition or display of an element

        CommonModule
            NgIf            
            NgFor
            NgSwitch

        <ng-template ngIf="booleanExpression">
            <p> This para will appear only if the booleanExpression evaluates to true </p>
        </ng-template>

        <p *ngIf="booleanExpression"> This para will appear only if the booleanExpression evaluates to true </p>

        <ng-template ngFor="let x of array">
            <p> This para will appear once for each element in the array, the current value is : {{x}} </p>
        </ng-template>

        <p *ngFor="let x of array"> This para will appear once for each element in the array, the current value is : {{x}} </p>
        
    Angular Built-in Control Flows

        this is a enhanced alternative to Strucutral Directives and their usage does not demand any module to be imported.

            @if

                @if( condition ){
                    <p> This para will appear only if the cond evaluates to true </p>
                }

                @if( condition ){
                    <p> This para will appear only if the cond evaluates to true </p>
                } @else {
                    <p> This para will appear only if the cond evaluates to false </p>
                }

                @if( condition1 ){
                    <p> This para will appear only if the cond1 evaluates to true </p>
                }@else if( condition2 ){
                    <p> This para will appear only if the cond2 evaluates to true </p>
                } @else {
                    <p> This para will appear only if all the conds evaluate to false </p>
                }

            @for

                @for( ele of array; track $index ){
                    <li> {{ele}} </li>
                }@empty{
                    <p>The array is empty</p>
                }

                $count
                #index
                $even
                $odd
                $first
                $last

                @for(emp of employees; track emp.id; let isEven=$even){
                    <p [classes.bordered]="isEven">
                        {{emp.fullName}} earns a salary of rupees {{emp.sal}}
                    </p>
                }@empty{
                    <p>The array is empty</p>
                }

            @switch

                @switch(day){
                    @case (1) {
                        <p> This is a sunday </p>
                    }
                    @case (2) {
                        <p> This is a monday </p>
                    }
                    @case (3) {
                        <p> This is a tuesday </p>
                    }
                    @case (4) {
                        <p> This is a wednesday </p>
                    }
                    @case (5) {
                        <p> This is a thursday </p>
                    }
                    @case (6) {
                        <p> This is a friday </p>
                    }
                    @case (7) {
                        <p> This is a satday </p>
                    }
                    @default {
                        <p> No such day </p>
                    }
                }