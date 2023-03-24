- React.createElement takes 3 arguments 
  - 1) What tag to create 
  - 2) {}
  - 3) What to put inside argument 1 



- React.createElement will never give you a HTML. It will give you a React Element (JS Object). After rendering it will become Object. 

- Writing React.createElement is pain. So only we have JSX. 

``` html
<div id="parent">
    <div id="child1">
        <h1>I'm H1 tag</h1>
        <h2>I'm H2 tag</h2>
    </div>
    <div id="child2">
        <h1>I'm H1 tag</h1>
        <h2>I'm H2 tag</h2>
    </div>
</div>
```

- Order of script tags matters! 

- If already some content is present inside root div tag, it will be replaced!. 
- Akshay's defnition of React : It's just some peice of code written by Facebook Developers!
- We can apply react on small portion of existing application as well!. 
- Things we studied in episode 1 : 
  - Hello world using HTML. 
  - Hello world using JavaScript. 
  - How to bring React into the picture. 