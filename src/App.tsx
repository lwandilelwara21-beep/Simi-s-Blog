import { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowDown,
  Cloud,
  Gift,
  Heart,
  Menu,
  Music2,
  Pause,
  Play,
  SkipBack,
  SkipForward,
  Sparkles,
  Star,
  Volume2,
  VolumeX,
  X,
} from 'lucide-react';

type Song = {
  title: string;
  album: string;
  duration: string;
  color: string;
  artwork: string;
  albumLink: string;
};

type Album = {
  title: string;
  year: string;
  cover: string;
  link: string;
};

type ArianaPhoto = {
  image: string;
  alt: string;
  caption: string;
  credit: string;
  source: string;
};

type EraCard = {
  title: string;
  year: string;
  subtitle: string;
  description: string;
  image: string;
  accent: string;
};

const simiImages = [
  '/assets/simi/1000045355.jpg',
  '/assets/simi/WhatsApp Image 2026-10-07 at 12.02.31 PM.jpeg',
  '/assets/simi/WhatsApp Image 2026-10-07 at 12.04.11 PM.jpeg',
  '/assets/simi/WhatsApp Image 2026-10-07 at 12.04.57 PM.jpeg',
  '/assets/simi/WhatsApp Image 2026-10-07 at 12.06.13 PM.jpeg',
];

const arianaPhotos: ArianaPhoto[] = [
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Ariana_Grande_Wicked_Interview_2024_03.jpg',
    alt: 'Ariana Grande during an interview about Wicked in 2024',
    caption: 'A new era, a new story',
    credit: 'Margaret Gardiner',
    source: 'https://commons.wikimedia.org/wiki/File:Ariana_Grande_Wicked_Interview_2024_03.jpg',
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Ariana_Grande_interview_2016.png',
    alt: 'Ariana Grande being interviewed in 2016',
    caption: 'From one era to the next',
    credit: 'Pure DOPE Magazine',
    source: 'https://commons.wikimedia.org/wiki/File:Ariana_Grande_interview_2016.png',
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/74/Ariana_Grande_KCA_2019.png',
    alt: 'Ariana Grande at the 2019 Kids’ Choice Awards',
    caption: 'Always her own kind of star',
    credit: 'NickRewind',
    source: 'https://commons.wikimedia.org/wiki/File:Ariana_Grande_KCA_2019.png',
  },
];

const albums: Album[] = [
  {
    title: 'Yours Truly',
    year: '2013',
    cover: 'https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/0a/19/23/0a19235d-8bcc-76d4-58ca-61a65d928587/13UAAIM68293.rgb.jpg/600x600bb.jpg',
    link: 'https://music.apple.com/us/album/yours-truly/1440860819',
  },
  {
    title: 'My Everything',
    year: '2014',
    cover: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/a5/39/86/a5398609-ad90-50d3-57ad-0f87a4df5ac4/14UMGIM28138.rgb.jpg/600x600bb.jpg',
    link: 'https://music.apple.com/us/album/my-everything-bonus-tracks-edition/1440852353',
  },
  {
    title: 'Dangerous Woman',
    year: '2016',
    cover: 'https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/12/5d/63/125d6389-2205-c77c-702c-8128e9020bd6/16UMGIM12432.rgb.jpg/600x600bb.jpg',
    link: 'https://music.apple.com/us/album/dangerous-woman/1440835631',
  },
  {
    title: 'Sweetener',
    year: '2018',
    cover: 'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/70/53/76/705376dc-d0dc-6945-7fb2-415038e3aafa/18UMGIM36925.rgb.jpg/600x600bb.jpg',
    link: 'https://music.apple.com/us/album/sweetener/1399202900',
  },
  {
    title: 'thank u, next',
    year: '2019',
    cover: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/bb/69/07/bb6907de-8ad4-970b-3311-121320e1bf9c/19UMGIM03691.rgb.jpg/600x600bb.jpg',
    link: 'https://music.apple.com/us/album/thank-u-next/1450333975',
  },
  {
    title: 'Positions',
    year: '2020',
    cover: 'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/a8/8e/f9/a88ef97a-74c3-bedf-0574-ea0b83b40a38/20UMGIM94965.rgb.jpg/600x600bb.jpg',
    link: 'https://music.apple.com/us/album/positions/1537486662',
  },
  {
    title: 'eternal sunshine',
    year: '2024',
    cover: 'https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/2e/88/88/2e8888ad-a0cf-eece-70a7-1ff81377a3ab/24UMGIM00198.rgb.jpg/600x600bb.jpg',
    link: 'https://music.apple.com/us/album/eternal-sunshine/1725913366',
  },
];

const tracks: Song[] = [
  { title: 'Honeymoon Avenue', album: albums[0].title, duration: '3:18', color: 'from-pink-200 via-rose-200 to-purple-200', artwork: albums[0].cover, albumLink: albums[0].link },
  { title: 'One Last Time', album: albums[1].title, duration: '3:18', color: 'from-violet-200 via-fuchsia-200 to-pink-200', artwork: albums[1].cover, albumLink: albums[1].link },
  { title: 'Into You', album: albums[2].title, duration: '4:14', color: 'from-rose-300 via-pink-200 to-fuchsia-300', artwork: albums[2].cover, albumLink: albums[2].link },
  { title: 'breathin', album: albums[3].title, duration: '3:48', color: 'from-pink-300 via-purple-200 to-violet-200', artwork: albums[3].cover, albumLink: albums[3].link },
  { title: 'thank u, next', album: albums[4].title, duration: '3:27', color: 'from-purple-300 via-pink-200 to-rose-200', artwork: albums[4].cover, albumLink: albums[4].link },
  { title: 'positions', album: albums[5].title, duration: '2:53', color: 'from-fuchsia-200 via-violet-200 to-pink-200', artwork: albums[5].cover, albumLink: albums[5].link },
  { title: 'yes, and?', album: albums[6].title, duration: '3:35', color: 'from-pink-200 via-lilac-200 to-rose-200', artwork: albums[6].cover, albumLink: albums[6].link },
];

const eraCards: EraCard[] = [
  {
    title: 'ERA 01 — THE BEGINNING',
    year: '2010',
    subtitle: 'Where it all started.',
    description: 'A chapter full of curiosity, glow, and the kind of sparkle that always hinted at something bigger waiting to bloom.',
    image: simiImages[0],
    accent: 'from-pink-200/40 via-fuchsia-300/10 to-white/5',
  },
  {
    title: 'ERA 02 — THE GLOW UP',
    year: '2018',
    subtitle: 'Becoming the girl she was meant to be.',
    description: 'Confidence got louder, dreams got braver, and the world finally caught up to the magic already shining around her.',
    image: simiImages[1],
    accent: 'from-violet-300/40 via-pink-200/10 to-white/5',
  },
  {
    title: 'ERA 03 — THE DREAMER',
    year: '2022',
    subtitle: 'Big dreams. Bigger energy.',
    description: 'This era is built on wishful thinking, endless ambition, and the confidence to turn imagination into reality.',
    image: simiImages[2],
    accent: 'from-rose-200/40 via-purple-200/10 to-white/5',
  },
  {
    title: 'ERA 04 — SWEET 16',
    year: '2026',
    subtitle: 'Her newest era begins today.',
    description: 'Sweet 16 is not just a birthday — it is the entrance into a new chapter, brighter, softer, louder, and more unforgettable than ever.',
    image: simiImages[3],
    accent: 'from-pink-300/40 via-purple-300/10 to-white/5',
  },
];

const galleryCaptions = [
  'main character energy',
  'another era unlocked',
  'pretty girl, pretty soul',
  '16 looks good on you',
  'the birthday girl',
  'just getting started',
];

const specialCards = [
  {
    title: 'YOUR SMILE',
    message: 'Your smile is the kind of light that makes the whole room feel softer and brighter — like sunshine after a long day.',
  },
  {
    title: 'YOUR ENERGY',
    message: 'You bring this effortless joy, this sweetness, this sparkle that makes people instantly feel at ease around you.',
  },
  {
    title: 'YOUR HEART',
    message: 'Kind, genuine, and full of warmth — the kind of heart that makes people feel seen and cared for without even trying.',
  },
  {
    title: 'YOUR PERSONALITY',
    message: 'You are a rare mix of grace, fun, confidence, and softness — the perfect balance of elegant and unforgettable.',
  },
  {
    title: 'YOUR DREAMS',
    message: 'Your dreams are big and your potential is even bigger. The world is waiting for exactly the version of you that you are becoming.',
  },
];

const radioMessages = [
  "SIMI'S SWEET 16 ERA.",
  'Main Character Energy.',
  'Pink skies and golden goals.',
  'Next up: a whole new chapter.',
  'Currently playing: confidence, sparkle, and dreams.',
  'Tonight is for glowing brighter.',
];

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [isSoundOn, setIsSoundOn] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [progress, setProgress] = useState(34);
  const [menuOpen, setMenuOpen] = useState(false);
  const [giftOpen, setGiftOpen] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(0);
  const [isReady, setIsReady] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setShowIntro(false);
      setIsReady(true);
    }, 3200);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = window.setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentTrack((track) => (track + 1) % tracks.length);
          return 0;
        }
        return prev + 1;
      });
    }, 1200);

    return () => window.clearInterval(interval);
  }, [isPlaying]);

  useEffect(() => {
    const onScroll = () => {
      if (!navRef.current) return;
      const top = window.scrollY;
      navRef.current.style.transform = `translateY(${top > 24 ? -4 : 0}px)`;
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const currentSong = tracks[currentTrack];
  const shuffledMessages = useMemo(() => [...radioMessages].sort(() => Math.random() - 0.5), []);

  const handleTrackChange = (direction: number) => {
    setCurrentTrack((prev) => (prev + direction + tracks.length) % tracks.length);
    setProgress(18);
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMenuOpen(false);
  };

  const starNodes = Array.from({ length: 26 }, (_, i) => ({
    id: i,
    left: `${(i * 17) % 100}%`,
    top: `${(i * 13) % 100}%`,
    size: 2 + (i % 4),
    delay: `${(i * 0.2).toFixed(1)}s`,
  }));

  return (
    <div className="min-h-screen bg-[#120d18] text-white selection:bg-pink-300/40 selection:text-white">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        {starNodes.map((star) => (
          <span
            key={star.id}
            className="star-particle"
            style={{
              left: star.left,
              top: star.top,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: star.delay,
            }}
          />
        ))}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,182,212,0.35),_transparent_35%),radial-gradient(circle_at_bottom,_rgba(196,168,255,0.25),transparent_45%)]" />
      </div>

      <AnimatePresence>
        {showIntro && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1 } }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#05060a]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,194,217,0.55),_transparent_35%)]" />
            <div className="absolute inset-0 opacity-50">
              {starNodes.slice(0, 18).map((star) => (
                <span
                  key={star.id}
                  className="star-particle"
                  style={{
                    left: star.left,
                    top: star.top,
                    width: `${star.size + 1}px`,
                    height: `${star.size + 1}px`,
                    animationDelay: star.delay,
                  }}
                />
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative z-10 text-center uppercase tracking-[0.75rem] text-white"
            >
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} className="text-sm text-pink-200/90">
                07 OCTOBER
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.75, duration: 0.9 }} className="mt-6 font-display text-5xl md:text-8xl tracking-[0.35rem]">
                SIMI
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.05, duration: 0.9 }} className="mt-1 font-script text-3xl tracking-normal text-pink-200 md:text-5xl">
                Kateliana
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.4, duration: 0.9 }} className="mt-3 font-sans text-xl md:text-4xl tracking-[0.8rem] text-rose-100">
                SWEET 16
              </motion.div>
            </motion.div>
            <button
              onClick={() => setShowIntro(false)}
              className="absolute bottom-8 right-8 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.35rem] text-white/80 backdrop-blur-md transition hover:border-pink-200/60 hover:text-pink-100"
            >
              Skip intro
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <header className="fixed inset-x-0 top-0 z-40 px-4 pt-4 md:px-8">
        <div ref={navRef} className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-[#1a1323]/70 px-3 py-3 shadow-glow backdrop-blur-xl transition-all duration-500 md:px-6">
          <button onClick={() => scrollToSection('home')} className="font-display text-2xl tracking-[0.2rem] text-pink-100">
            Simi
          </button>

          <nav className="hidden items-center gap-8 text-[0.7rem] font-medium uppercase tracking-[0.24rem] text-white/80 md:flex">
            <button onClick={() => scrollToSection('home')} className="transition hover:text-pink-200">Home</button>
            <button onClick={() => scrollToSection('era')} className="transition hover:text-pink-200">Her Era</button>
            <button onClick={() => scrollToSection('music')} className="transition hover:text-pink-200">Music</button>
            <button onClick={() => scrollToSection('memories')} className="transition hover:text-pink-200">Memories</button>
            <button onClick={() => scrollToSection('message')} className="transition hover:text-pink-200">Message</button>
          </nav>

          <button onClick={() => setMenuOpen((v) => !v)} className="rounded-full border border-white/10 bg-white/5 p-2 text-white md:hidden">
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mx-auto mt-2 max-w-md rounded-3xl border border-white/10 bg-[#1a1323]/85 p-4 shadow-glow backdrop-blur-xl md:hidden"
            >
              {['home', 'era', 'music', 'memories', 'message'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item === 'home' ? 'home' : item === 'era' ? 'era' : item === 'music' ? 'music' : item === 'memories' ? 'memories' : 'message')}
                  className="block w-full rounded-2xl border border-transparent px-4 py-3 text-left text-xs uppercase tracking-[0.3rem] text-white/80 transition hover:border-pink-200/30 hover:bg-white/5"
                >
                  {item === 'home' ? 'Home' : item === 'era' ? 'Her Era' : item === 'music' ? 'Music' : item === 'memories' ? 'Memories' : 'Message'}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="relative z-10">
        <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 pb-12 pt-32 md:px-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,_rgba(250,160,194,0.26),_transparent_35%)]" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center lg:text-left">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-pink-200/20 bg-white/5 px-4 py-2 text-[0.62rem] uppercase tracking-[0.35rem] text-pink-100/90 backdrop-blur-sm">
                <Sparkles size={12} /> Sweet 16 edition
              </div>
              <h1 className="font-display text-6xl leading-none tracking-[0.35rem] text-white md:text-8xl lg:text-[9rem]">
                SIMI
              </h1>
              <p className="mt-1 font-script text-4xl text-pink-200 md:text-5xl">Kateliana</p>
              <div className="mt-3 flex items-center justify-center gap-4 text-sm uppercase tracking-[0.7rem] text-pink-100/80 lg:justify-start">
                <span>Sweet 16</span>
                <span className="h-px w-10 bg-pink-200/70" />
                <span>07 • OCT • 2026</span>
              </div>
              <p className="mt-8 max-w-xl text-base text-white/70 md:text-lg">
                Today isn't just another birthday.<br className="hidden md:block" />
                It's the beginning of another era.
              </p>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:items-start">
                <button
                  onClick={() => scrollToSection('era')}
                  className="group rounded-full border border-pink-200/30 bg-gradient-to-r from-pink-200 to-violet-200 px-7 py-3 text-sm font-medium uppercase tracking-[0.25rem] text-[#120d18] shadow-glow transition hover:scale-[1.02]"
                >
                  Enter Kateliana's era <span className="inline-block transition group-hover:translate-x-1">✨</span>
                </button>
                <button onClick={() => scrollToSection('music')} className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm uppercase tracking-[0.24rem] text-white/80 backdrop-blur-md transition hover:border-pink-200/40 hover:text-pink-100">
                  <Music2 size={16} /> Feel the vibe
                </button>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.15 }} className="relative mx-auto w-full max-w-md">
              <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-pink-200/25 via-violet-200/10 to-white/5 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-pink-200/20 bg-white/5 p-3 shadow-[0_40px_100px_rgba(233,188,234,0.15)] backdrop-blur-md">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,245,249,0.75),transparent_30%)]" />
                <img
                  src={simiImages[0]}
                  alt="Simi portrait"
                  className="relative h-[620px] w-full rounded-[1.6rem] object-cover"
                  onError={(event) => {
                    const target = event.currentTarget as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
                <div className="absolute inset-x-6 bottom-6 rounded-[1.5rem] border border-white/15 bg-[#1a1323]/55 px-4 py-3 backdrop-blur-md">
                  <div className="flex items-center justify-between gap-4 text-[0.62rem] uppercase tracking-[0.25rem] text-pink-100/80">
                    <span>Birthday girl</span>
                    <span>16</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="era" className="px-5 pb-24 md:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 text-center">
              <p className="text-xs uppercase tracking-[0.5rem] text-pink-200/80">Simi's eras</p>
              <h2 className="mt-4 font-display text-5xl text-white md:text-6xl">SIMI'S ERAS</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {eraCards.map((era, index) => (
                <motion.article
                  key={era.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/5"
                >
                  <div className={`relative h-72 overflow-hidden bg-gradient-to-br ${era.accent}`}>
                    <img src={era.image} alt={era.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#120d18]/80 via-transparent to-transparent" />
                    <div className="absolute inset-x-5 top-5 flex items-center justify-between text-[0.6rem] uppercase tracking-[0.22rem] text-white/80">
                      <span>{era.year}</span>
                      <span>♡</span>
                    </div>
                  </div>
                  <div className="space-y-4 p-6">
                    <div>
                      <p className="text-[0.62rem] uppercase tracking-[0.28rem] text-pink-200/75">{era.title.split('—')[0]}</p>
                      <h3 className="mt-2 font-display text-3xl leading-none text-white">{era.title.replace('ERA 01 — ', '').replace('ERA 02 — ', '').replace('ERA 03 — ', '').replace('ERA 04 — ', '')}</h3>
                    </div>
                    <p className="text-sm italic text-pink-100/90">{era.subtitle}</p>
                    <p className="text-sm leading-6 text-white/70">{era.description}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="music" className="px-5 pb-24 md:px-8">
          <div className="mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.07),rgba(255,255,255,0.02))] p-6 shadow-glow md:p-8">
            <div className="mb-8 text-center">
              <p className="text-xs uppercase tracking-[0.5rem] text-pink-200/80">Soundtrack to her era</p>
              <h2 className="mt-4 font-display text-5xl text-white md:text-6xl">THE SOUNDTRACK TO HER ERA</h2>
            </div>

            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="rounded-[2rem] border border-white/10 bg-[#20172d]/70 p-5">
                <div className={`mb-6 h-72 rounded-[1.6rem] bg-gradient-to-br ${currentSong.color} p-1`}>
                  <a
                    href={currentSong.albumLink}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${currentSong.album} on Apple Music`}
                    className="relative block h-full overflow-hidden rounded-[1.4rem] border border-white/20 bg-[radial-gradient(circle_at_50%_35%,rgba(255,223,238,0.5),transparent_25%),linear-gradient(145deg,rgba(255,182,212,0.45),rgba(147,117,191,0.18),rgba(27,19,37,0.95))]"
                  >
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                      <span className="font-display text-7xl text-white/80">୨୧</span>
                      <span className="mt-2 text-[0.6rem] uppercase tracking-[0.35rem] text-white/75">Album artwork</span>
                      <span className="mt-2 font-display text-3xl text-white">{currentSong.album}</span>
                    </div>
                    <img
                      key={currentSong.artwork}
                      src={currentSong.artwork}
                      alt={`${currentSong.album} album cover`}
                      className="relative h-full w-full object-cover transition duration-500 hover:scale-[1.03]"
                      onError={(event) => {
                        event.currentTarget.style.display = 'none';
                      }}
                    />
                    <span className="absolute bottom-3 right-3 rounded-full border border-white/25 bg-black/40 px-3 py-1 text-[0.55rem] uppercase tracking-[0.2rem] text-white/90 backdrop-blur">
                      Open album ↗
                    </span>
                  </a>
                </div>

                <div className="flex items-center justify-between text-[0.62rem] uppercase tracking-[0.28rem] text-white/60">
                  <span>{currentSong.album}</span>
                  <span>{currentSong.duration}</span>
                </div>

                <div className="mt-5">
                  <h3 className="font-display text-4xl text-white">{currentSong.title}</h3>
                  <p className="mt-2 text-sm uppercase tracking-[0.28rem] text-pink-100/80">{currentSong.album}</p>
                </div>

                <div className="mt-6 space-y-3">
                  <div className="flex items-center justify-between text-[0.65rem] uppercase tracking-[0.28rem] text-white/60">
                    <span>Now playing</span>
                    <span>{progress}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10">
                    <div className="h-full rounded-full bg-gradient-to-r from-pink-200 via-rose-200 to-violet-200" style={{ width: `${progress}%` }} />
                  </div>

                  <div className="mt-5 flex items-center justify-center gap-4">
                    <button onClick={() => handleTrackChange(-1)} className="rounded-full border border-white/15 bg-white/5 p-3 text-white/80 transition hover:border-pink-200/30 hover:text-pink-100">
                      <SkipBack size={18} />
                    </button>
                    <button
                      onClick={() => setIsPlaying((value) => !value)}
                      className="rounded-full bg-gradient-to-r from-pink-200 via-rose-200 to-violet-200 p-4 text-[#160e1a] shadow-glow transition hover:scale-105"
                    >
                      {isPlaying ? <Pause size={22} /> : <Play size={22} className="ml-0.5" />}
                    </button>
                    <button onClick={() => handleTrackChange(1)} className="rounded-full border border-white/15 bg-white/5 p-3 text-white/80 transition hover:border-pink-200/30 hover:text-pink-100">
                      <SkipForward size={18} />
                    </button>
                  </div>
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-[#150f1e]/60 p-5">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-[0.62rem] uppercase tracking-[0.3rem] text-pink-200/80">Playlist</p>
                    <h3 className="mt-2 font-display text-4xl text-white">Kateliana FM</h3>
                  </div>
                  <button
                    onClick={() => setIsSoundOn((value) => !value)}
                    className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[0.6rem] uppercase tracking-[0.24rem] text-white/80"
                  >
                    {isSoundOn ? <Volume2 size={15} /> : <VolumeX size={15} />}
                    {isSoundOn ? 'Sound on' : 'Sound off'}
                  </button>
                </div>

                <div className="space-y-3">
                  {tracks.map((song, index) => (
                    <button
                      key={song.title}
                      onClick={() => setCurrentTrack(index)}
                      className={`flex w-full items-center gap-3 rounded-[1.3rem] border px-3 py-3 text-left transition ${index === currentTrack ? 'border-pink-200/30 bg-pink-200/10' : 'border-white/5 bg-white/5 hover:border-white/10'}`}
                    >
                      <div className={`relative h-12 w-12 shrink-0 overflow-hidden rounded-xl bg-gradient-to-br ${song.color}`}>
                        <span className="absolute inset-0 flex items-center justify-center font-display text-2xl text-white/80">୨୧</span>
                        <img
                          src={song.artwork}
                          alt=""
                          loading="lazy"
                          className="relative h-full w-full object-cover"
                          onError={(event) => {
                            event.currentTarget.style.display = 'none';
                          }}
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium text-white">{song.title}</p>
                        <p className="truncate text-[0.6rem] uppercase tracking-[0.2rem] text-white/60">{song.album}</p>
                      </div>
                      <div className="flex items-center gap-2 text-[0.62rem] uppercase tracking-[0.2rem] text-white/60">
                        <span>{song.duration}</span>
                        {index === currentTrack && <span className="inline-block h-2 w-2 rounded-full bg-pink-200" />}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-10 border-t border-white/10 pt-10">
              <div className="mb-6 flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
                <div>
                  <p className="text-[0.62rem] uppercase tracking-[0.35rem] text-pink-200/80">The albums behind the soundtrack</p>
                  <h3 className="mt-2 font-display text-4xl text-white md:text-5xl">Ariana's album eras</h3>
                </div>
                <p className="max-w-sm text-xs leading-5 text-white/55">
                  Official album artwork shown via Apple Music. Choose a cover to open its album.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-7">
                {albums.map((album, index) => (
                  <motion.a
                    key={album.title}
                    href={album.link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${album.title} on Apple Music`}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ delay: index * 0.06, duration: 0.45 }}
                    whileHover={{ y: -6 }}
                    className="group overflow-hidden rounded-[1.3rem] border border-white/10 bg-white/[0.04] transition hover:border-pink-200/35 hover:bg-white/[0.08]"
                  >
                    <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-pink-200/30 via-violet-200/20 to-[#20172d]">
                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-3 text-center">
                        <span className="font-display text-4xl text-white/80">୨୧</span>
                        <span className="text-[0.5rem] uppercase tracking-[0.18rem] text-white/60">{album.title}</span>
                      </div>
                      <img
                        src={album.cover}
                        alt={`${album.title} by Ariana Grande album cover`}
                        loading="lazy"
                        className="relative h-full w-full object-cover transition duration-700 group-hover:scale-105"
                        onError={(event) => {
                          event.currentTarget.style.display = 'none';
                        }}
                      />
                      <span className="absolute bottom-2 right-2 rounded-full border border-white/25 bg-black/45 px-2 py-1 text-[0.48rem] uppercase tracking-[0.12rem] text-white/90 opacity-0 backdrop-blur transition group-hover:opacity-100">
                        Apple Music ↗
                      </span>
                    </div>
                    <div className="p-3">
                      <p className="truncate text-[0.62rem] font-medium uppercase tracking-[0.12rem] text-white/90">{album.title}</p>
                      <p className="mt-1 text-[0.55rem] uppercase tracking-[0.2rem] text-pink-100/60">{album.year} · Ariana Grande</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="memories" className="px-5 pb-24 md:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 text-center">
              <p className="text-xs uppercase tracking-[0.5rem] text-pink-200/80">The Simi archives</p>
              <h2 className="mt-4 font-display text-5xl text-white md:text-6xl">THE SIMI ARCHIVES</h2>
            </div>

            <div className="columns-1 gap-5 md:columns-2 xl:columns-3">
              {simiImages.map((image, index) => (
                <motion.figure
                  key={image}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                  className="group mb-5 overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/5 p-3 shadow-[0_20px_60px_rgba(192,152,255,0.13)]"
                  style={{ transform: `rotate(${index % 2 === 0 ? '-1deg' : '1deg'})` }}
                >
                  <div className="overflow-hidden rounded-[1.2rem]">
                    <img src={image} alt={`Simi memory ${index + 1}`} className="h-auto w-full object-cover transition duration-700 group-hover:scale-105" />
                  </div>
                  <figcaption className="pt-3 text-center text-[0.63rem] uppercase tracking-[0.25rem] text-pink-100/90">
                    {galleryCaptions[index % galleryCaptions.length]}
                  </figcaption>
                </motion.figure>
              ))}
            </div>
          </div>
        </section>

        <section id="message" className="px-5 pb-24 md:px-8">
          <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-pink-200/15 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-6 md:p-10">
            <div className="mb-10 text-center">
              <p className="text-xs uppercase tracking-[0.5rem] text-pink-200/80">For Simi</p>
              <h2 className="mt-4 font-display text-5xl text-white md:text-6xl">FOR SIMI ❤️</h2>
            </div>

            <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="space-y-4 text-center text-base leading-8 text-white/80 md:text-lg">
              <p>Happy Sweet 16, Simi ❤️</p>
              <p>Today isn't just about turning 16. It's about celebrating the person you've become and everything that's still waiting for you.</p>
              <p>You have so much ahead of you — dreams to chase, memories to make, places to see and an entire life to create.</p>
              <p>So here's to your Sweet 16 era. May this year bring you happiness, confidence, beautiful memories, genuine people and moments you'll remember forever.</p>
              <p>Keep being you. Keep dreaming. Keep shining.</p>
              <p>This is only the beginning.</p>
              <p className="font-script text-4xl text-pink-100">Happy 16th birthday, Simi. ❤️</p>
            </motion.div>
          </div>
        </section>

        <section className="px-5 pb-24 md:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 text-center">
              <p className="text-xs uppercase tracking-[0.5rem] text-pink-200/80">Why Simi is special</p>
              <h2 className="mt-4 font-display text-5xl text-white md:text-6xl">WHY SIMI IS SPECIAL</h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
              {specialCards.map((card, index) => (
                <motion.button
                  key={card.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  onClick={() => setActiveCard(activeCard === index ? null : index)}
                  whileHover={{ y: -6 }}
                  className={`group relative overflow-hidden rounded-[2rem] border p-5 text-left transition ${activeCard === index ? 'border-pink-200/40 bg-pink-200/10' : 'border-white/10 bg-white/5'}`}
                >
                  <div className="mb-4 inline-flex rounded-full border border-pink-200/25 bg-white/5 p-2 text-pink-100">
                    <Heart size={16} />
                  </div>
                  <h3 className="font-display text-3xl text-white">{card.title}</h3>
                  <AnimatePresence mode="wait">
                    {activeCard === index && (
                      <motion.p
                        key={card.title}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4 text-sm leading-6 text-white/70"
                      >
                        {card.message}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden px-5 pb-24 md:px-8">
          <div className="mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-8 md:p-12">
            <div className="mb-8 text-center">
              <p className="text-xs uppercase tracking-[0.5rem] text-pink-200/80">Somewhere between the clouds and the stars</p>
              <h2 className="mt-4 font-display text-5xl text-white md:text-6xl">there's a girl named Simi who's just getting started.</h2>
            </div>
            <div className="relative h-[420px] overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_50%_20%,_rgba(255,182,214,0.28),transparent_30%),linear-gradient(180deg,#120d18,#20182d_30%,#1d132b_100%)]">
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[radial-gradient(circle_at_center,_rgba(213,174,255,0.15),transparent_50%)]" />
              {Array.from({ length: 8 }).map((_, index) => (
                <motion.div
                  key={index}
                  animate={{ x: [0, 25, 0], y: [0, -12, 0] }}
                  transition={{ duration: 12 + index, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute"
                  style={{ left: `${12 + index * 11}%`, top: `${18 + (index % 4) * 12}%` }}
                >
                  <Cloud className="h-16 w-16 text-white/15" />
                </motion.div>
              ))}
              <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }} className="absolute inset-x-0 bottom-4 flex justify-center">
                <div className="relative h-[240px] w-[210px] overflow-hidden rounded-[50%] border border-pink-200/20 bg-gradient-to-br from-pink-200/20 to-violet-200/5 p-3 shadow-glow">
                  <img src={simiImages[4]} alt="Simi floating in the clouds" className="h-full w-full rounded-[50%] object-cover" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="px-5 pb-24 md:px-8">
          <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(255,195,221,0.16),transparent_30%),rgba(255,255,255,0.04)] p-6 md:p-10">
            <div className="mb-8 text-center">
              <p className="text-xs uppercase tracking-[0.5rem] text-pink-200/80">Birthday status</p>
              <h2 className="mt-4 font-display text-5xl text-white md:text-6xl">SIMI'S SWEET 16 IS HERE 🎂</h2>
            </div>
            <div className="grid place-items-center gap-6 text-center md:grid-cols-3">
              {[16, 'Years', 'of Simi'].map((label, index) => (
                <motion.div key={label as string} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="rounded-[1.8rem] border border-white/10 bg-white/5 p-8">
                  <div className="font-display text-5xl text-pink-100 md:text-6xl">
                    {index === 0 ? '16' : label}
                  </div>
                  <p className="mt-2 text-[0.62rem] uppercase tracking-[0.3rem] text-white/60">
                    {index === 0 ? 'Years of magic' : index === 1 ? 'Of sparkle' : 'of joy'}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 pb-24 md:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div
              onClick={() => setGiftOpen(true)}
              className={`group relative mx-auto flex h-64 max-w-[26rem] cursor-pointer flex-col items-center justify-center rounded-[2.5rem] border border-pink-200/25 bg-[radial-gradient(circle_at_top,_rgba(255,214,228,0.24),rgba(255,255,255,0.04))] p-8 shadow-[0_35px_110px_rgba(255,177,206,0.12)] transition ${giftOpen ? 'scale-95 opacity-90' : 'hover:scale-[1.02]'}`}
            >
              <Gift className="mb-4 h-12 w-12 text-pink-100" />
              <p className="text-[0.62rem] uppercase tracking-[0.45rem] text-pink-100/80">One more thing...</p>
              <h3 className="mt-4 font-display text-5xl text-white">OPEN THIS</h3>
            </div>
          </div>
        </section>

        <section className="px-5 pb-24 md:px-8">
          <div className="mx-auto max-w-6xl rounded-[2.8rem] border border-pink-200/15 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-6 md:p-10">
            <div className="mb-10 text-center">
              <p className="text-xs uppercase tracking-[0.5rem] text-pink-200/80">Her favourite girl</p>
              <h2 className="mt-4 font-display text-5xl text-white md:text-6xl">HER FAVOURITE GIRL ✨</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-[0.95fr_1.05fr]">
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-5">
                <div className="mb-4 flex items-center justify-between text-[0.62rem] uppercase tracking-[0.24rem] text-white/60">
                  <span>KATELIANA FM</span>
                  <span>on air</span>
                </div>
                <div className="rounded-[1.4rem] border border-pink-200/20 bg-[#1b1325] p-5">
                  <div className="font-display text-4xl text-pink-100">{shuffledMessages[0]}</div>
                  <p className="mt-5 text-sm uppercase tracking-[0.25rem] text-white/60">Next up: {shuffledMessages[1]}</p>
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                {arianaPhotos.map((photo) => (
                  <figure key={photo.source} className="overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/5">
                    <div className="h-48 overflow-hidden bg-gradient-to-br from-pink-200/30 via-violet-200/20 to-white/5">
                      <img
                        src={photo.image}
                        alt={photo.alt}
                        loading="lazy"
                        className="h-full w-full object-cover transition duration-700 hover:scale-105"
                      />
                    </div>
                    <figcaption className="space-y-2 p-4">
                      <h3 className="font-display text-3xl text-white">{photo.caption}</h3>
                      <p className="text-[0.62rem] uppercase tracking-[0.16rem] text-white/60">
                        Photo by {photo.credit} ·{' '}
                        <a
                          href={photo.source}
                          target="_blank"
                          rel="noreferrer"
                          className="underline decoration-pink-200/40 underline-offset-2 hover:text-pink-100"
                        >
                          source
                        </a>
                        {' '}·{' '}
                        <a
                          href="https://creativecommons.org/licenses/by/3.0/"
                          target="_blank"
                          rel="noreferrer"
                          className="underline decoration-pink-200/40 underline-offset-2 hover:text-pink-100"
                        >
                          CC BY 3.0
                        </a>
                      </p>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </section>

        <footer className="relative px-5 pb-16 pt-8 md:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-[0.62rem] uppercase tracking-[0.5rem] text-pink-200/80">And that's a wrap on era 16.</p>
            <h2 className="mt-4 font-display text-5xl text-white md:text-7xl">Happy Birthday, Simi — Kateliana ❤️</h2>
            <p className="mt-4 text-lg uppercase tracking-[0.42rem] text-white/75">07.10.2026</p>
            <p className="mt-2 text-sm uppercase tracking-[0.3rem] text-white/60">Your next chapter starts now.</p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="mt-8 inline-flex items-center gap-3 rounded-full border border-pink-200/25 bg-gradient-to-r from-pink-200 to-violet-200 px-7 py-3 text-sm uppercase tracking-[0.28rem] text-[#120d18] shadow-glow transition hover:scale-[1.02]"
            >
              Play it again <Sparkles size={16} />
            </button>
          </div>
        </footer>
      </main>

      <button
        onClick={() => setIsSoundOn((value) => !value)}
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full border border-white/15 bg-[#1a1323]/75 px-4 py-3 text-[0.62rem] uppercase tracking-[0.3rem] text-white/75 shadow-glow backdrop-blur-md transition hover:border-pink-200/30 hover:text-pink-100"
      >
        {isSoundOn ? <Volume2 size={16} /> : <VolumeX size={16} />}
        {isSoundOn ? 'Sound on' : 'Sound off'}
      </button>

      <AnimatePresence>
        {giftOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-[#06070b]/80 px-5 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-2xl rounded-[2.5rem] border border-pink-200/20 bg-[linear-gradient(180deg,rgba(255,255,255,0.09),rgba(255,255,255,0.03))] p-8 text-center shadow-[0_35px_120px_rgba(255,173,210,0.25)]"
            >
              <div className="absolute inset-0 overflow-hidden rounded-[2.5rem]">
                {starNodes.slice(0, 22).map((star) => (
                  <span
                    key={star.id}
                    className="star-particle"
                    style={{
                      left: star.left,
                      top: star.top,
                      width: `${star.size + 2}px`,
                      height: `${star.size + 2}px`,
                      animationDelay: star.delay,
                    }}
                  />
                ))}
              </div>
              <div className="relative z-10">
                <p className="text-[0.62rem] uppercase tracking-[0.45rem] text-pink-200/80">A little surprise</p>
                <h3 className="mt-5 font-display text-5xl text-white md:text-7xl">YOU DESERVE THE WORLD, SIMI.</h3>
                <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-white/80">
                  You are a dreamer, a light, and a beautiful kind of magic. Keep choosing yourself, keep chasing the life that feels like yours, and remember: the best chapters are still ahead.
                </p>
                <button
                  onClick={() => setGiftOpen(false)}
                  className="mt-8 rounded-full bg-gradient-to-r from-pink-200 via-rose-200 to-violet-200 px-6 py-3 text-sm uppercase tracking-[0.28rem] text-[#1a1323]"
                >
                  Keep the magic going
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {!isReady && <div className="pointer-events-none fixed inset-0 z-60 bg-[#05060a]" />}
    </div>
  );
}

export default App;
