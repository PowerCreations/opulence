import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        
      </div>

      <div className="">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/opulence.jpg"
          alt="Opulence Logo"
          width={400}
          height={400}
          priority
        />
      </div>

      <div className="">
        

        <a
          href="https://t.me/OpulenceProject"
          className=""
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
          <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/Telegram Logo.png"
          alt="Opulence Telegram Logo"
          width={50}
          height={50}
          priority
        />
          </h2>
        </a>
      </div>
    </main>
  )
}
