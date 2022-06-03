//Make sure you go through javascript beginner series.


..folder structure...
artgallery -> this is topmost directory n holds all the ui code
..node_modules -> holds our projects dependencies...don't tamper with it..with you can look around
..pages -> contains all the pages...eg home,,cart pag...login page
.. public -> this is where static assets are placed...include images etc
.. styles -> contains all css files
.. .esclintrc -> linting config
.. .gitignore -> git ignore ....
.. next.config -> config file for next js
.. package.json -> container configuration for this project including dependency version...
.. README.md -> read :-)
.. yarn.lock -> dependency version n .... dont touch
.. state -> redux config and state management
.. servicers -> handles http requests to api
.. utils -> stores any reusable code.
..components -> holds all the components used in their respective directories.

... don't tamper on any config unless necessary...


..This is next js though it uses react js but has some beneficial features in comparison to react

Its built on the idea that every ui can be broken down into a component.
Examples of components is...The navigation bar... maybe some modal...a product in the homepage is basically a component.

This components are basically functions:: <for functional react>
.. You can reuse a component azin...you can use 1 component in different places
... Being a js component, the components function should return something that can be rendered on the dom.
...React uses html like js-code called jsx that renders just like html.
...U can style this jsx with plain css, scss or third party css frameworks eg..bootstrap and tailwind css.
... example of a component
.... const navbar = () => {} ..... ()=>{} is function under js version es6 **
.... function navbar(){}  is also an alternative to writing function but ()=>{} is way cooler.
.... const navbar = () =>{   //well ..in () you can pass your params...in jsx they are called props (properties)...azin this components properties.


} 

.... we could have the navbar displaying the user email
.... to implement  this we'd have 
 ..... function navbar = (props) ={
    return <div>
    <h1>the user email is: </h1>
    <h1>{props.email}</h1>
    
    </div>
}


...well props is passed as an object.... 
...an object has this structure => 
props = {
    email:"somevalue"
}

..so to access the email... we do props.email....n since this data is stored in a variable..we use {} ... if left as <h1>props.email</h1> ...ita display props.email kama text


.... so tumepitia const navbar = (props)=>{
    return <div>
    <h1>some value</h1>
    </div>
}


///////Style
we'll use plain css for styling and scss. i'll use scss ju its fun
...
inorder to style a component... instead of adding class to the html/jsx ...ad className ...then a unique name
..
then create a file.css in the same directory as the component


import the css ontop of the component eg:....

css will have a .module.css extension
import styles from "./navbar.module.css"   //can use another name instead of styles...
const navbar = ()=>{
    return <div className={styles.navbar}>   ///styles.whatever the class name is
    navbar
    </div>
}


....
i'll create all the components and directories we'll need....mtawork with css and jsx/html....
....

...Working directories...
you will be working on components directory and advance at your pace
