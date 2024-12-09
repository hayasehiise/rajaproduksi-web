import Image from 'next/image'
import Link from 'next/link'
 
export default function NotFound() {
  return (
    <>
    <div className="w-full h-dvh flex flex-col justify-center">
      <div>
        <Image
          src={`/footer logo.webp`}
          alt="logo"
          width={500}
          height={500}
          className="w-1/4 mx-auto"
        />
      </div>
      <div className='mx-auto mt-5 text-center'>
        <p className='text-white font-extrabold text-4xl'>Halaman Tidak Ditemukan</p>
        <p className='text-white font-normal'>Mungkin ada kesalahan dalam url pencarian anda</p>
        <Link className='btn btn-accent text-white mt-2' href="/"><Image src={'/home.png'} alt='home link' width={500} height={500} className='w-[20px]' />Ke Halaman Awal</Link>
      </div>
    </div>
    </>
  )
}