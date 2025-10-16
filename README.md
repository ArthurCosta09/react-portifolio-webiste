# Portifolio website using React

Portifolio website built in Typescript using React framework. All the dependencies (react-dom, react-leaflet, react-routers, react-loaders, fortawesome) were installed with Nodejs.

The purpose of this project is to improve my front-end skills using the Meta's most popular framework. React's main advantages include reusable components and efficient performance thanks to its use of a Virtual DOM.

## Instalation

First, you need to install and set up the [Nodejs](https://nodejs.org/en/download) to debug or build the project. Then you must run this command line in the command prompt and make sure to run it in the project folder.

```git
npm install
```

Since you install the dependencies, you just need to create the .env file and add these three variables

```sh
REACT_APP_PUBLIC_KEY=your_public_key
REACT_APP_SERVICE_ID=your_service_id
REACT_APP_TEMPLATE_ID=your_template_id
```

These variables allow the emailjs to connect the contact form to your email address. But first you must have an [emailjs](https://www.emailjs.com/) account and create a Gmail service (service id) and an email template (template id).

Finally, you can execute the project by running the command below.

```git
npm start
```

Inside the project, you are free to make changes like style, name, about description, map location and contact form.
