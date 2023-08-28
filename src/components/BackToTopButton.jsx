import { useEffect, useState } from 'react'

const BackToTopButton = () => {
    const [backToTopButton, setbackToTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setbackToTopButton(true)
            } else {
                setbackToTopButton(false);
            }
        })
    }, [])

    const ScrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }
    return (
        <div className='topbutton'>
            {backToTopButton && (
                <button onClick={ScrollUp}><i className="fa-solid fa-arrow-up" /></button>
            )
            }
        </div >
    )
}

export default BackToTopButton