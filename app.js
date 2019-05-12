const express = require('express');
const path = require('path');
const app = express();
const data = require('./data.json');
const favicon = require('serve-favicon');


app.use('/static', express.static('public'));
app.use(favicon(path.join(__dirname, 'public/img', 'favicon.png')));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    printMessage(200, `/`);
    res.locals.projects = data.projects;
    res.render('index');
});

app.get('/about', (req, res) => {
    printMessage(200, `/about`);
    res.render('about');
});

app.get('/projects/:id', (req, res, next) => {
    const projectId = Number(req.params.id);

    const selectProjects = data.projects.filter(project => project.id === projectId);
    if(selectProjects.length === 1){
        //Success
        res.locals.project = selectProjects[0];
        printMessage(200, `/projects/${projectId}`);
        res.render('project');
    } else if (selectProjects.length > 1) {
        //Duplicate project ids
        const err = new Error('Error in data. Duplicate project IDs');
        err.status = 500;
        next(err);
    } else {
        //Project doesn't exist
        const err = new Error('Project does not exist');
        err.status = 400;
        next(err);
    }
});

//Handle 404 not found
app.use((req,res, next)=>{
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

//Handle errors
app.use((err, req, res, next)=>{
    res.locals.error = err;
    printMessage(err.status, err.message, true);
    res.render('error');
});

app.listen(3000);

function printMessage(code, message, isError){
    if(!isError){
        console.log(code, message);
    } else {
        console.error(code, message);
    }
}