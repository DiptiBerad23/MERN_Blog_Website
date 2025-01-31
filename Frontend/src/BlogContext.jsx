import { Blogs } from "./assets/assets"
import { createContext } from "react"


export const BlogContext = createContext(null)

const BlogContextProvider = (props) =>{
    const contextValue = { 
        Blogs 
    }

    return(
        <BlogContext.Provider value={contextValue}>
                {props.children}
        </BlogContext.Provider>
    )
}

export default BlogContextProvider