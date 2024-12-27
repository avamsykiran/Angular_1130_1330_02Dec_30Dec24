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

    Angular Pipes

        is used to transform a value before rendering.

        <tag-name> {{ expr|pipeName:pipeParams }}  </tag-name>

        built-in pipes

            lowercase
            uppercase
            titlecase
            slice
            number
            percent
            date
            currency
            json
            async

        custom pipe

            ng g pipe PipeName --skip-tests

    Angular Services

        is a class that provide bussiness logic like computations / rest-api calls ...etc.,

        these services are injectables. that means we have to declare an object of a service in the 
        constructor of a component or a pipe or a directive or even another service, the object is injected by the 
        angular injectors.

        ng g service ServiceName --skip-tests

    Integrating Bootstrap

        npm i bootstrap

        node_modules
            |-bootstrap
                |-dist
                    |-css
                        |-bootstrap.min.css     include in 'styles' section of angular.json
                    |-js
                        |-bootstrap.min.js      include in 'scripts' section of angular.json

    Angular Models

        we use typescript interfaces to model domain objects.

        ng g interface ModelName 

    Angular Routing

        Routing is to enable navigation from one component to another.

        RouterModule        @angular/router

            provideRouter   will enable routing and takes an array of Route Objects

            Route           is a model

                            {
                                path:'urlToMapToAComponent',
                                component:ComponentToBeMappedToTheUrl,
                                redirectTo:'urlToRedirectTo',
                                pathMatch:'startsWith | full'
                            }

                            pathMatch decides on hwo to match the incoming url with the paths.

                            {path:"abc",component:DashboardComponent}

                            http://localhost:9090/abc               will make the DashboardComponent appear
                            http://localhost:9090/abc/xys           will make the DashboardComponent appear
                            http://localhost:9090/abc/pqr           will make the DashboardComponent appear
                            http://localhost:9090/abc/xyz/pqr       will make the DashboardComponent appear

                            {path:"abc",component:DashboardComponent,pathMatch:'full'}

                            http://localhost:9090/abc               will make the DashboardComponent appear
                            http://localhost:9090/abc/xys           will not make the DashboardComponent appear
                            http://localhost:9090/abc/pqr           will not make the DashboardComponent appear
                            http://localhost:9090/abc/xyz/pqr       will not make the DashboardComponent appear

            Routes          An alias type for Route[]

            router-outlet   Is a builtIn component, that reserve place for a routed component in the top-level root component.

                            app.component.html
                                <app-header></app-header>
                                <router-outlet></router-outlet>
                                <app-footer></app-footer>
                            
            routerLink          Is a built-in attribute directive used on 'a' tag instead of its href attribute.

            routerLinkActive    Is a built-in attribute directive used on 'a' tag. It holds a css class and applies that class
                                on the 'a' element only when it is currently active.

    Angular Forms

        Template Driven Forms

            A template driven is structred and managed in the template using FormsModule.

            Each control in such form is two-way boudn to a field of the component using NgModel directive.

            These forms are good enough for simpler forms that may ahve not more than oen or two controls.
            They are not recommeded for complex forms or nested forms.
            These forms are complex to test.

        Model Driven Forms / Reactive Forms

            A model driven form or a reactive form is structured in the template but modled and managed in the component class using
            ReactiveFormsModule. A model of the form is constructed using a FormGroup where a FormGroup is a group of
            FormControls, where each FormControl can have a default value and an array of validators.

            FormControl themselves will track the values , no need to two-way bind with any field.

            These forms are used almost everywhere in an Angular app, unless the form is pretty simple.
            These forms support custom validators are also are recommended to handle nested forms.
            These forms are simpel to test as they are constructed in TypeScript not using html.

    RxJS Observables

        RxJs is a javascript library for reactive programming.

        Observable is a class that is an enhanced Promise offered by RxJS.

        Observable is used to manage the results and errors from an asynchronous operation by a UI. A UI
        gets notified by an observable whenever an underlying asynchronous operation emits a result or an error.

        var bgJob = observer => {

            observer.next( result ); //used to emit results
            observer.error( errMsg ); //used to raise an error
            observer.complete(); //used to signal the compeltion of the job

         };
        
        var ob = new Observable( bgJob );

        //on subscribing to the observble the bgJob gets invoked.
        ob.subscribe({
            next: result => {},
            error: err => {},
            complete: () => {}
        });

        Observable can emit any number of results continously until the job is complete unlike Promise
        Observable can be subscribed any number ot times parallelly unlike Promise.
        Observable once subscribed can be unsubcribed too even before the job is complete unlike Promise.

    Creating Fake Rest-api using json-server

        md adb-api
        cd adb-api
        npm init -y
        npm i json-server@0.17.4

        create a '.json' file in the root of the project to hold hypothetical data adb-api/data.json

        in package.json, "start":"json-server --watch ./data.json --port 9191"

        npm start

        will luanch the rest-api.
        
    HttpClientModule to consume the rest-api

        HttpClient
            get(url) : Observable
            post(url,reqBody) : Observable
            put(url,reqBody) : Observable
            delete(url) : Observable

        provideHttpClient()     will config., a provider for HttpClient.

    Angular Component Content

        <app-component-a>
            <!-- any thing that is written here is called a content -->
            <p> This para is called ContentChild of ComponentA. </p>
        </app-component-a>

    Angular Component View

        All the DOM written in the template of a component is called its view.

        component-a.component.html        

            <!-- any thing that is written here is called a view -->
            <p> This para is called ViewChild of ComponentA. </p>
            <ng-content></ng-content> <!-- here the ng-content is repalced with the content -->

    Angular Life Cycle Hooks

        This is for the first time

            constructor()
                ↓
                ngOnChanges()                                fires following the modification of @Input bound class members.
                    ↓
                    ngOnInit()                               fires once upon initialization of a component's fields. 
                        ↓
                        ngDoCheck()                          fires with every change detection cycle.
                            ↓
                            ngAfterContentInit()             fires after the component’s content DOM initializes 
                                ↓
                                ngAfterContentChecked()      fires after every cycle of change detection targeting the content DOM. 
                                    ↓
                                    ngAfterViewInit()        fires once after the view DOM finishes initializing. 
                                        ↓
                                        ngAfterViewChecked() fires after any change detection cycle targeting the component’s view.

        Each time any input-bound fields change is detected
            
            ngOnChanges()
                ↓
                ngDoCheck()

        Each time any content change is detected                 
            ngAfterContentChecked()
        
        Each time any view change is detected                 
            ngAfterViewChecked()

        After a component is removed fronm its parent's view
            ngOnDestroy()
            
    Angular Modules

        A module helps to group a commonly oriented set of components, directives, pipes
        and services together.

        All the resource of the module are visible and accessble from one another another
        without individual imports.

        To generate a module
            ng g module ModuleNAme

        To generate a component inside a module
            ng g c module-name/ComponentName --no-standalone --module module-name --skip-tests
        
        To generate a directive inside a module
            ng g directive module-name/DirectiveName --no-standalone --module module-name --skip-tests
        
        To generate a pipe inside a module
            ng g pipe module-name/PipeName --no-standalone --module module-name --skip-tests

    What Else/ Whats Next?

        (a) Router Guards and Http Interceptors
        (b) Lazy Loading
        (c) Angular Material

        (d) Signals
        (e) State Management using NgRx Signal Store
        (f) Defered Views using @defer
        (g) Server Side Rendering and Server Side Generation
        (h) Internationalization and Localization
        (i) Zoneless Change Detection and Change Detection Stretagies

    