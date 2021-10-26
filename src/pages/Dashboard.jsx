import React, {useEffect, useState} from 'react';
import Autosuggest from 'react-autosuggest';
import { AiOutlineSwap, AiOutlineCloseCircle, AiFillCopy } from 'react-icons/ai'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import ReactTooltip from 'react-tooltip'

function Dashboard(props) {

  const [indonesian, setIndonesian] = useState([]);
  const [balinese, setBalinese] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [language, setLanguage] = useState('Indonesia');
  const [dictionary, setDictionary] = useState(indonesian);
  const [dictionary2, setDictionary2] = useState(balinese);
  const [searchValue, setSearchValue] = useState('');
  const [translation, setTranslation] = useState('');
  const [loading, setLoading] = useState(false);
  const [loadDictionary, setLoadDictionary] = useState(true);
  const [successCopying, setSuccessCopying] = useState(false);

  useEffect(() => {
    fetchDictionary()
  }, [])

  useEffect(() => {
    if (searchValue) {
      let result = searchTranslation(searchValue)

      setTranslation(result)
      setLoading(false)
    } else if (searchValue === '') {
      setTranslation('')
      setLoading(false);
    }
  }, [searchValue])

  useEffect(() => {
    if (successCopying) {
      // eslint-disable-next-line no-undef
      gsap.to('#copied', { width: 110, duration: 0.25 })

      setTimeout(() => {
        setSuccessCopying(false)
        // eslint-disable-next-line no-undef
        gsap.to('#copied', { width: 0, duration: 0.4 })
      }, 1250);
    }
  }, [successCopying])

  const fetchDictionary = () => {
    fetch('https://opensheet.vercel.app/1UzyabhmIZ9atEB-WC4W0MTpPkRswFw8PBsBm3Q2T5KA/Sheet1')
      .then(res => res.json())
      .then(data => {
        let indo = []
        let bali = []
        data.forEach(word => {
          if (word.bali && word.indonesia) {
            bali.push(word.bali)
            indo.push(word.indonesia)
          }
        })
        setBalinese(bali)
        setDictionary2(bali)
        setIndonesian(indo)
        setDictionary(indo)
        setLoadDictionary(false);
      })
  }

  const swapLanguage = () => {
    setSearchValue('');
    setTranslation('');
    setSuggestions([]);
    switch (language) {
      case "Indonesia":
        setLanguage('Bali');
        setDictionary(balinese);
        setDictionary2(indonesian);
        break;
      case "Bali":
        setLanguage('Indonesia');
        setDictionary(indonesian);
        setDictionary2(balinese);
        break;
      default:
        break;
    }
  }

  const searchTranslation = input => {
    let dictionaryIndex = dictionary.indexOf(input.trim().toLowerCase())
    if (dictionaryIndex !== -1) {
      return dictionary2[dictionaryIndex]
    } else {
      return 'Tidak ditemukan translasi'
    }
  }

  const renderSuggestion = suggestion => (
    <div>
      <p className='text'>
       {suggestion}
      </p>
      <p className='translate'>
        {searchTranslation(suggestion)}
      </p>
    </div>
  );

  const getSuggestions = value => {
    if (value) {
      const inputValue = value.trim().toLowerCase();
      const inputLength = inputValue.length;
  
      return inputLength === 0 ? [] : dictionary.filter(lang =>
        lang.toLowerCase().slice(0, inputLength) === inputValue
      );
    }
  };

  const onChange = (event, { newValue }) => {
    if (newValue.indexOf(' ') === -1) {
      setSearchValue(newValue)
      setLoading(true)
    }
  };

  const inputProps = {
    value: searchValue,
    onChange: onChange,
    id: 'searchInput',
    pattern: "[^\s]+"
  };

  const getSuggestionValue = suggestion => suggestion;

  // Autosuggest will call this function every time you need to update suggestions.
  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value))
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  const onSuggestionsClearRequested = () => {
    setSuggestions([])
  };

  const focus = () => {
    document.getElementById('searchInput').focus()
  }

  return (
    <div>
      <div className="title w-screen py-4 px-6 text-2xl border-b-2 border-gray-200 border-solid">
        Melajah Base Bali
      </div>
      <div className="w-screen bg-gray-50 h-32 border-b-2 border-gray-200 border-solid"></div>
      <div className="container mx-auto px-10 -mt-24">
        <div className="shadow-sm mx-auto flex justify-center ">
          <div className='w-2/4 border-2 border-gray-200 border-solid border-r-0 rounded-md rounded-tr-none rounded-br-none bg-white'>
            <div className="p-4 w-full font-semibold">
              {language}
            </div>
            <div
              className="relative w-full h-32 border-t-2 border-r-2 border-gray-200 border-solid cursor-text"
              onClick={focus}
            >
              {/* <input className='text-xl p-4 w-full focus:outline-none focus-visible:outline-none' type="text" name="" id="" /> */}
              <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                onSuggestionsClearRequested={onSuggestionsClearRequested}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                inputProps={inputProps}
              />
              {
                searchValue.length > 0 &&
                <div className='absolute right-4 top-4 mt-1 cursor-pointer'>
                  <AiOutlineCloseCircle onClick={() => setSearchValue('')} size='1.5em' style={{ color: 'grey' }} />
                </div>
              }
            </div>
          </div>
          <div className='relative w-2/4 border-2 border-gray-200 border-solid border-l-0 rounded-md rounded-tl-none rounded-bl-none bg-white'>
            <div className='absolute -left-2 top-4 -ml-1 cursor-pointer'>
              <AiOutlineSwap onClick={swapLanguage} size='1.5em' style={{color: 'grey'}}/>
            </div>
            <div className="p-4 pl-10 w-full font-semibold">
              {language === "Indonesia" ? 'Bali' : 'Indonesia'}
            </div>
            <div className="w-full h-32 border-t-2 border-gray-200 border-solid">
              {
                loading
                ?
                  <p className='p-4 w-full text-xl text-gray-400'>
                    ...
                  </p>
                :
                translation
                ?
                  <p className='p-4 w-full text-xl text-black'>
                    {translation}
                  </p>
                :
                  <p className='p-4 w-full text-xl text-gray-400'>
                    Translasi
                  </p>
              }
            </div>
            {
              translation.length > 0 && translation !== 'Tidak ditemukan translasi' &&
              <div className='absolute right-4 bottom-4 w-6 h-6 overflow-visible cursor-pointer'>
                <div className='copyIcon' data-tip="Salin translasi">
                  <CopyToClipboard text={translation}
                    onCopy={() => setSuccessCopying(true)}>
                    <AiFillCopy size='1.5em' style={{ color: 'grey' }} />
                  </CopyToClipboard>
                </div>
                <ReactTooltip
                  place='bottom'
                  type='dark'
                  backgroundColor='grey'
                  arrowColor='grey'
                  delayShow={250}
                  className='tooltip'
                />
                <span id='copied' >Berhasil menyalin</span>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
