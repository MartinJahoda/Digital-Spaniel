
import React,{useState,useEffect,createContext} from 'react'
import axios from 'axios'


export  const TestimonialContext = createContext([])

export const TestimonialProvider = ({children}) => {
    const [testimonial, setTestimonial] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/testimonials')
        .then(res => {
            // console.log(res.data)
            setTestimonial(res.data)

        })
        return () => {
            setTestimonial([])
        }
    },[])


    return (

     
            <TestimonialContext.Provider value={{testimonial}}>
                  {children}
            </TestimonialContext.Provider>
            
    );
}