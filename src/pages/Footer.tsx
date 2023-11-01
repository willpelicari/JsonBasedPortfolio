import { useContext } from 'react'
import { PortfolioContext } from '../contexts/PortfolioContext'

export default function Footer() {
  const content = useContext(PortfolioContext)

  return (
    <footer className="bottom-0 left-0 z-20 w-full p-4 bg-white dark:bg-black text-black dark:text-white border-t border-gray-100 dark:border-gray-900 shadow">
      <div className="flex justify-between items-center">
        <div>
          <span className="align-bottom">{content.footer.message}</span>
        </div>
        <div className="flex items-center">
          {content.footer.socialMedia.map((social, key) => (
            <a
              key={key}
              target="_blank"
              rel="noreferrer"
              href={social.link}
              className="p-0.5"
            >
              <img src={social.icon} alt="social icon" className="w-10 h-10" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
