Terms & definitions:

1.SSR: Server side rendering.

2.Marty: Is a flux framework, readup on the flux documentation on facebooks official site.

3.JSX: Is XML for javascript, its a declarative language reminiscent of HTML, we use it to structure components in react, as if we we're
writeing html.

4.marty-express: Is middleware giving our stack the possibility to do SSR on the first page load.

5.react-router: Is a community driven project, it abstracts away alot of hanky panky web related stuff you encounter when trying 
to set up routes by your self. The setup we end up with is a JSX syntaxed layout, and example of this could be:

<Router>
	<Header />
	<Dynamic rendered content/>
	<Footer />
</Router>

All in all a pretty simple, basic declarative way to express routes. One of the reasons why its community build is because 
reacts motto is that its just the V in MVC, its components, and thats it - so all of this Routeing, data fetching from APIS etc.
goes through other technologies, which gives us the benefit of chooseing our own frameworks or writeing the code our self.

6.Jest: is a testing framework, DevelopingAReactEdge uses it for their examples. so we will stick to that for this project.


This is a test project for the stack sql/(sequelize(maybe))/express/marty-express/marty(flux)/react/react-router/bootstrap/sass/Jest(test)/gulp(buildtool)

To run this, all you have to do is:

1.(sudo) npm install
2. run gulp
3. npm start

This test project is based on the book "developing a react edge",
all of the examples is being converted to es6 syntax, and since this application is intially 
SSR some of my examples might be slightly modified logic wise.

The applications goal is to SSR the initial page load, and thereafter do client-side rendering for the rest of the requests,
In the ./server/app.js its possible to see how i tie together my express and marty&react with express-marty,
express-marty is a middleware for express, and middleware is basically a controller(equivalent of a .net controller), in 
this case we only need this one middleware for the interface though, because we only have to provide the initial index.html file,
where react will take over from that point on. One of the reasons why we use this SSR is that people in pakistan might have a rough experience downloading and rendering 26k lines of javascript application.  So we do it for them the first time. Some of the issues that has been with this aproach in the past was SEO(search engine optimization) but googles crawler has recently been updated to read javascript and index by that information aswell.


1.First of all this is a platform for React and marty being tied together with marty-express, and how we can do a simple app with 
data flowing, routes working seemlessly, API calls to the server, unit tests/integration tests etc.

2.the second priorty is to experiment with a restful API, and look at what we can do with pure sql w/o a framework like sequelize(orm for sql) in the backend.


The code will mostly speak for it self i hope, and i will try to comment as much as i find useful my self.

I considered writeing a brief intro to my file structure, gulp, our flux implementation marty etc. but the official 
docs for all of these things are better and more than sufficient, and my file structure i feel is pretty self explanatory if you've 
read the docs.





	







