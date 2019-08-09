# Friend-Finder

## Table of contents
  * [Live](#live)
  * [Demo](#demo)
  * [About this project](#about-this-project)
  * [Getting started](#contribute)
  * [Screenshots](#screenshots)
  * [Technologies used to create app](#technologies-used)
  	* [Backend technologies](#Backend)
  	* [Frontend technologies](#Frontend)

## <a name="live"></a>Live

https://pacific-atoll-18430.herokuapp.com/

## <a name="about-this-project"></a> About this project
Friend Finder is a full stack application that matches you up with another person. It includes a survey of 10 questions that help determine your compatibility with the instructors of the class. When you submit the survey, the app takes in your survey results and then compares your answers, question by question. The app does this by taking the difference between your answer and answers  each question. Then, the app adds up the differences to calculate the total difference, which is the buddy compatibility score. The closest match is the user with the smallest difference. The app displays the name and photo of the user with the best overall match

## <a name="contribute"></a> Getting started
To set up this application on your own computer, perform the following steps:
  1. [Clone the repository](#clone-repository)
  2. [Install Node.js](#install-node)
  3. [Install the dependencies](#dependencies)
https://github.com/estomm01/Friend-Finder/edit/master/README.md
### <a name="clone-repository"></a> Clone the repository
The first step is to clone the project repository to a local directory on your computer. To clone the repository, run the following commands:
<pre>
  git clone 
  cd FriendFinder
</pre>

### <a name="install-node"></a> Install Node.js
<p>If you don't already have Node.js installed on your computer, you can install the latest version here: https://nodejs.org/en/.</p>


#### <a name="structure-of-project"></a> Structure of the project
<p>After you clone the repository, navigate to the project root directory (FriendFinder). The project directory structure is set up as follows:</p>
<ul>
  <li> 
    <p><b>server.js</b>: This file does the following:</p>
		<ul>
	    	<li>Defines and requires the dependencies, including express, body-parser, and path.</li>
	    	 <li>Sets up the Express server.</li>
	    	 <li>Sets up the Express server to handle data parsing using body-parser.</li>
	    	 <li>Points the server to the API and HTML route files. These routes give our server a map of how to respond when users visit or request data from various URLs.</li>
	    	 <li>Starts the server.</li>
    	</ul>
  <li>
    <p><b>app/public</b>: This directory contains the image files and HTML files used in the app. </p>
  </li>
  <li>
    <p><b>app/data</b>: This directory contains a file called friends.js. This file includes an array of objects, which is where all of the data (name, photo, and scores) for each user of the app is stored.</p>
  </li>
  <li>
    <p><b>app/routing</b>: This directory contains the routes that are used in the app. The app includes two types of routes, API routes and HTML routes.</p>
    <ul>
    	<li>The API routes are defined in the apiRoutes.js file. This file includes two routes.</li>
    	<ul>
    		<li>A GET route with the url /api/friends. This route is used to display an array of JSON objects that includes all possible users of the app.</li>
    		<li>A POST route with the url /api/friends. This is used to handle incoming survey results. This route is also used to handle the compatibility logic.</li>
    	</ul>
    	<li>The HTML routes are defined in the htmlRoutes.js file. This file includes three routes.</li>
    	<ul>
    		<li>A GET Route to /survey, which displays the survey page.</li>
    		<li>A route that leads to home.html, which displays the home page.</li>
    		<li>A route that leads to 404notfound.html, which displays the 404 not found page if the page the user requests was moved, deleted, or does not exist.</li>
    	</ul>
  </li>
  <li><b>package.json</b>: Lists the project dependencies (third party npm packages) and their version numbers.</li>
  <li><b>.gitignore</b>: Anything listed inside this file will not be tracked by GitHub when code is committed.</li>
  <li><b>package-lock.json</b>: Dependency tree for the project. Lists all the dependencies and their versions.</li>
</ul>

### <a name="dependencies"></a> Install the dependencies
<p>The following npm packages are dependencies to the project.</p>
<p>After you clone the repository to a local directory, change directory to the project root directory and run the following command to install the required npm packages:</p>
<pre>npm install</pre>
<ul>
	<li><b>express</b>, which is a Node.js web application framework (https://www.npmjs.com/package/express).</li>
	<li><b>body-parser</b>, which parses incoming request bodies in a middleware. (https://www.npmjs.com/package/body-parser)</li>
	<li><b>path</b>, which allows the app to get the correct file paths for our HTML (https://www.npmjs.com/package/path).</li>
</ul>

<p>Version information for each of these packages is available in the package.json file in the project root directory.</p>

## <a name="screenshots"></a> Screenshots

### Home 
<img src="readme_images/home.png">

### Survey 
<img src="readme_images/survey.png">

### Survey results
<img src="readme_images/survey_results.png">
<br>
<img src="readme_images/surveyresults2.png">


## <a name="technologies-used"></a> Technologies used to build app
* [Backend technolgies](#Backend)
* [Frontend technologies](#Frontend)

### <a name ="Backend"></a> Backend technologies
* Node.js (https://nodejs.org/en/)
* Express (https://expressjs.com/)

### <a name="Frontend"></a> Frontend technolgoies
* HTML
* Bootstrap (http://getbootstrap.com/)
* Javascript

















https://pacific-atoll-18430.herokuapp.com/
