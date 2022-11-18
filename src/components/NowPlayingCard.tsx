import { useLastFM } from 'use-last-fm'
import { truncate } from 'lib/utils'
import FadeIn from 'react-fade-in'
import Image from 'next/image'
import SongImage from '@public/img/song.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const { NEXT_PUBLIC_LASTFM_API_KEY } = process.env

export const NowPlayingCard = () => {
  const lastFM = useLastFM('connordoesdev', NEXT_PUBLIC_LASTFM_API_KEY!, 5000, 'large')

  if (['connecting', 'error'].includes(lastFM.status)) return null

  return (
    <FadeIn>
      <a
        href={lastFM.status === 'playing' ? lastFM.song.url : 'https://last.fm/user/connordoesdev'}
        rel="noopener noreferrer"
        target="_blank"
        className="focus:outline-none transition duration-300 ease-in-out transform hover:scale-105 p-3 rounded-md border border-gray-800 shadow flex flex-row max-w-sm"
      >
        {/* can't dynamically change Image src (swapping between `string` and `StaticImageData`) */}
        {lastFM.status === 'idle' && (
          <Image
            height={45}
            width={45}
            alt="Song cover art"
            placeholder="blur"
            className="w-full h-full rounded shadow"
            src={SongImage}
          />
        )}
        {lastFM.status === 'playing' && (
          <Image
            height={45}
            width={45}
            alt="Song cover art"
            className="w-full h-full rounded shadow"
            src={lastFM.song.art}
          />
        )}
        <div className="my-auto ml-4">
          <div className="font-semibold text-sm sm:text-regular">
            {lastFM.status === 'playing'
              ? `Listening to ${truncate(lastFM.song.name, 25)} by ${truncate(lastFM.song.artist, 25)}`
              : 'Not listening to anything'}
          </div>
          <div className="text-xs text-gray-400">
          <FontAwesomeIcon className="fill-current" icon={['fab', 'spotify']} /> {lastFM.status === 'playing' ? lastFM.song.album : 'Spotify'}
          </div>
        </div>
      </a>
    </FadeIn>
  )
}
