import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons"
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
    return(

        <footer className="z-10 flex items-center justify-between h-16 p-8 mt-12 text-xl font-medium text-white bg-gray-900 md:text-2xl">
            <div>
                Made by Dainyl Cua
            </div>
            <div>
                <div className="flex flex-row items-center space-x-4">
                    <div className="hidden md:visible">
                        Find me here:
                    </div>
                    <div>
                        <a href="https://twitter.com/dainylcua">
                            <FontAwesomeIcon icon={faTwitterSquare} size="2x" />
                        </a>
                    </div>
                    <div>
                        <a href="https://www.linkedin.com/in/dainylcua/">
                            <FontAwesomeIcon icon={faLinkedin} size="2x" />
                        </a>
                    </div>
                    <div>
                    <a href="https://github.com/dainylcua">
                            <FontAwesomeIcon icon={faGithubSquare} size="2x" />
                        </a>
                    </div>
                </div>
            </div>

        </footer>
    )
} 

export default Footer