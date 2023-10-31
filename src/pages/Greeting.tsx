import BasicSection from '../components/BasicSection'

interface GreetingProps {
  greetingMessage: string
  mainPhotoPath: string
}

export default function Greeting({
  greetingMessage,
  mainPhotoPath
}: GreetingProps) {
  return (
    <BasicSection id="greetings">
      <div className="container max-w-screen-xl mx-auto px-4 mt-16">
        <header className="flex flex-col items-center lg:flex-row justify-between lg:mb-20">
          <div className="text-center lg:text-right lg:mr-10 mb-20 lg:mb-0">
            <h1 className="font-bold text-gray-700 dark:text-gray-300 text-4xl md:text-5xl xl:text-6xl mb-10">
              {greetingMessage}
            </h1>
          </div>
          <div className="mx-auto lg:mx-0">
            <img
              alt="mainPhoto"
              className="rounded-lg"
              src={mainPhotoPath}
              style={{ width: 473 }}
            />
          </div>
        </header>
      </div>
    </BasicSection>
  )
}
