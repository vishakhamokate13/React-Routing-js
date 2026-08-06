import React from "react";
import Home from "./views/home/Home";
import About from "./views/about/About";
import Contact from "./views/contact/Contact";
import Login from "./views/login/Login";
import Navbar from "./components/Navbar/Navbar";
function App() {
   const path = window.location.pathname;
   console.log("Current path means current route:", path);

   let Page = Home;

   if (path === "/about") {
      Page = About;
   } else if (path === "/contact") {
      Page = Contact;
   } else if (path === "/login") {
      Page = Login;
   }

   return (
      <>
         <Navbar />
         <main className="app-content">
            <Page />
         </main>
      </>
   );
}

export default App;