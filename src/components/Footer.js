import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons"
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
    return(

        <footer className="z-10 flex items-center justify-between h-20 p-8 mt-10 text-2xl font-medium text-white bg-gray-900">
            <div>
                Made by Dainyl Cua
            </div>
            <div>
                <div className="flex flex-row items-center space-x-4">
                    <div>
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