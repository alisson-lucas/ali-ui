export default function Header8() {
  return (
    <header className="relative inset-x-0 z-50 bg-white">
        <div className='flex flex-row items-center justify-center w-full shadow-lg shadow-black/5'>
          <nav className="lg:max-w-screen-xl 2xl:max-w-screen-2xl flex items-center justify-center p-6 lg:px-8 w-full z-50 relative" aria-label="Global">
            <div className="flex">
              <a href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-10 w-auto"
                  src="/logo.png"
                  alt=""
                />
              </a>
            </div>
          </nav>
        </div>
    </header>
  )
}
