import { useEffect } from "react"

const NotFound = () => {
  useEffect(()=>{
  
    const footer = document.querySelector(".footer");
    if (footer) {
      footer.style.display = "none";
    }
  },[])
  return (
    <section className="notfound">
        <div className="h-100 d-flex flex-column justify-content-center align-items-center">
            <p>404</p>
            <h3>PAGE NOT FOUND</h3>
        </div>
    </section>
  )
}

export default NotFound