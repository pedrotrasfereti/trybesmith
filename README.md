<div id="top"></div>
<!--
***
*** This readme template was inspired by: https://github.com/othneildrew/Best-README-Template/
***
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- ABOUT THE PROJECT -->
## CRUD API Using Express.js and TypeScript

Welcome to the _GitHub repository_ of my seventh back-end project, **Trybesmith**!
Here you can find information about the project's development, such as which technologies were used, how to install and run the project, usage and more.

This back-end application was developed during my time at [Trybe](https://www.betrybe.com/) to practice the lessons learned on Express.js and TypeScript.
It is a RESTful API that uses a popular design pattern choice for API services, known as _multi-layered architecture_. In this case, the main three layers used were
_models_, _services_ and _controllers_. The additional Express _routes_ layer was added in as well.

<br />

---

### Endpoints

A list of all endpoints and supported methods.

* **/login** - Using the `POST` HTTP method, allows the signed in user to login with their respective username and password.
The generated token should be used in the _Authorization_ header;
* **/orders** - Using the `POST` HTTP method, allows the authenticated user to place an order with the following JSON structure:
```
  {
    "products": [1, 2]
  }
```

The user may also list all orders using the `GET` HTTP method;


* **/orders/:id** - Using the `GET` HTTP method, allows the authenticated user to view a particular order by the provided _id_ param;
* **/products** - Using the `POST` HTTP method, allows the authenticated user to create a product with the following JSON structure:
```
  {
    "name": "Long iron sword",
    "amount": "30 gold nuggets"
  }
```

The user may also list all products using the `GET` HTTP method;

* **/users** - Using the `POST` HTTP method, allows the user to sign in with the following JSON structure:
```
{
  "username": "RottenThunder",
  "classe": "Bandit",
  "level": 1,
  "password": "1234567"
}
```

<br />

### Tables

The MySQL schema will contain three tables: **Users**, **Orders** and **Products**.

<br />

---

### Built With

List of major frameworks/libraries used to bootstrap this project:

* [Express.js](https://expressjs.com/)
* [Node.js](https://nodejs.org/en/)
* [TypeScript](https://www.typescriptlang.org/)
* [JWT](https://jwt.io/)
* [MySQL](https://www.mysql.com/) - database

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```


### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/pedrotrasfereti/trybesmith.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Start the app with Yarn
   ```sh
   yarn dev
   ```
4. Visit `http://localhost:3000/` on your browser


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Pedro Trasfereti - [LinkedIn](https://www.linkedin.com/in/pedro-trasfereti/) - pedrotrasfereti@gmail.com

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

List of resources I find helpful and would like to give credit to:

* [ESLint](https://eslint.org/) - javascript linter
* [Joi](https://joi.dev/) - error handling
* [Nodemon](https://nodemon.io/) - development

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/pedrotrasfereti/trybesmith/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/pedrotrasfereti/trybesmith/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/pedrotrasfereti/trybesmith/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/pedrotrasfereti/trybesmith/issues
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/pedro-trasfereti/
