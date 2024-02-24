import { headerTextType } from '../../App'
import './Header.css'

export default function Header({ text, lang, setLang }: { text: headerTextType, lang: string, setLang: React.Dispatch<React.SetStateAction<string>> }) {
  return (
    <header>
      <div className='links'>
        <span className='github'><img src='/assets/icons/GitHub.svg' /></span>
        <span className='linkedin'><img src='/assets/icons/LinkedIn.svg' /></span>
      </div>

      <nav>
        <span>{text.about}</span>
        <span>{text.skills}</span>
        <span>{text.contact}</span>
        <span className='lang' onClick={() => setLang(lang === "eng" ? "hun" : "eng")}>
          {lang === "eng"
            ?
            <>
              <span className='selected'>eng</span>
              /
              <span>hun</span>
            </>
            :
            <>
              <span>eng</span>
              /
              <span className='selected'>hun</span>
            </>
          }
        </span>
      </nav>
    </header>
  )
}