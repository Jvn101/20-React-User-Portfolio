import React, {useState} from 'react';
import {Footer, Header, Portfolio, About, Contact, Resume} from './components'

function App() {
  // const [var, function] = useState(default value of the variable)
  const [currentPage, setCurrentPage] = useState("About")

  console.log(currentPage)

  return (
    <div>
      <Header setCurrentPage = {setCurrentPage} />
      {currentPage === "About" && <About />}
      {currentPage === "Portfolio" && <Portfolio/>}
      {currentPage === "Contact" && <Contact/>}
      {currentPage === "Resume" && <Resume/>}
      <Footer />
      </div>
)}

export default App;