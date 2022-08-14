# Diary - frontend

Diary is a web application where you can let your emotions fly, by writing them in your personal and private diary. After that, just download it. You can even print it then.

## Features

-   Login/Register
-   Write/edit diary
-   See profile info
-   Edit profile info
-   Download diary in pdf
-   All diary content is encrypted
-   Automatic formating of content is pages on diary save
-   Responsive design
-   Server side rendering

## Upcoming features

-   Customize your diary design
-   Delete account
-   Google, Facebook auth
-   More testing
-   Change password
-   Rich text editor (maybe)

## Tech

-   Next
-   Node
-   Express
-   Redux Toolkit
-   Styled Components
-   Typescript
-   Json web token based auth with refresh tokens
-   Postgresql
-   Sequelize
-   Jest, Mocha
-   Docker

## Demo

You can interact with the project
[here](https://diary.chirilovnarcis.ro).

[![Photo of the main page](https://i.im.ge/2022/08/13/OoKXrS.diary-chirilovnarcis-ro-1.png)](https://im.ge/i/OoKXrS)

## Installation

Requires [Node.js](https://nodejs.org/) v14+ to run and typescript. This only runs the frontend. To run the backend please visit [this](https://github.com/Narcis2005/diary-backend)

### Install the dependencies and run the app

#### With simple npm

```sh
npm i
npm run dev
```

#### Or by using docker

```sh
docker build -t nextjs-docker .
docker run -d -p 3000:3000 --name nextjs-docker nextjs-docker
```

## License

-   MIT License
-   Copyright 2022 © [Chirilov Narcis](https://chirilovnarcis.ro)
