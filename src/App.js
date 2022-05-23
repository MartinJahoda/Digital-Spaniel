import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ThreeColBlock from "./Components/ThreeColBlock";
import './App.css'
import { TestimonialProvider } from "./TestimonialContext";
import TestimonialBlock_old from "./Components/TestimonialBlock";


function App() {
  return (
   <TestimonialProvider> 
    <Header />
    <ThreeColBlock />  
    <TestimonialBlock_old />
    <Footer/>
 </TestimonialProvider>

  );
}

export default App;
