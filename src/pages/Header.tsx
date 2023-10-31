import { useContext, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { PortfolioContext } from '../App'

export default function Header() {
  const i18n = useTranslation()[1]
  const [showMenu, setMobileMenu] = useState(false)

  const content = useContext(PortfolioContext)
  const [firstLogoPart, secondLogoPart] = buildLogo(content?.Header?.Logo)

  function buildLogo(logoText: string) {
    if (!logoText) {
      return []
    }

    let words = logoText.split(' ')

    if (words.length === 1) {
      return [words[0], null]
    }

    if (words.length === 2) {
      return [words[0], words[1]]
    }

    const firstPart = []
    const secondPart = []

    const quantityFirstPartIndex = Math.floor(words.length / 2)
    for (let index = 0; index < words.length; index++) {
      if (index < quantityFirstPartIndex) {
        firstPart.push(words[index])
      } else {
        secondPart.push(words[index])
      }
    }

    return [firstPart.join(' '), secondPart.join(' ')]
  }

  return (
    content.Header && (
      <nav className="sticky top-0 flex p-3 items-center justify-between flex-wrap bg-slate-950 text-white z-10">
        <div
          id="logo"
          className="text-lg tracking-tight md:text-xl mr-6 flex-shrink-0"
        >
          <span className="font-bold">{firstLogoPart}</span>
          <span>{secondLogoPart}</span>
        </div>
        <div className="block lg:hidden">
          <svg
            onClick={() => setMobileMenu(!showMenu)}
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </div>
        <div
          className={`w-full flex-grow lg:flex lg:items-center lg:w-auto ${
            showMenu ? 'block' : 'hidden'
          }`}
        >
          <div className="text-sm lg:flex-grow">
            {content.Header.Menu.map((menu, key: number) => (
              <a
                key={key}
                href={menu.Link}
                target={menu.Target}
                className="block mt-4 text-lg md:text-lg lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-4"
              >
                {menu.Text}
              </a>
            ))}
          </div>
          <div
            id="getCv"
            className="text-sm flex items-center flex-col-reverse md:flex-row"
          >
            <div className="mr-5 flex">
              <button
                className="mr-3"
                onClick={() => i18n.changeLanguage('en')}
              >
                EN
              </button>
              <button
                className="mr-3"
                onClick={() => i18n.changeLanguage('fr')}
              >
                FR
              </button>
              <button
                className="mr-3"
                onClick={() => i18n.changeLanguage('es')}
              >
                ES
              </button>
              <button
                className="mr-3"
                onClick={() => i18n.changeLanguage('jp')}
              >
                JP
              </button>
            </div>
            <a
              className="px-4 py-2 mt-4 lg:mt-0 leading-none border rounded w-full md:w-auto hover:border-transparent text-center font-semibold mb-3 md:mb-auto hover:bg-white hover:text-gray-900"
              href={content.Header.ButtonCv.Link}
            >
              {content.Header.ButtonCv.Text}
            </a>
          </div>
        </div>
      </nav>
    )
  )
}
