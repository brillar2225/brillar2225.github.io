const getQuote = document.querySelector('#quote');
const getAuthor = document.querySelector('#author');

const quotes = [
  {
    quote: 'If you fell down yesterday, stand up today.',
    author: 'H. G. Wells',
  },
  {
    quote: 'What you do today can improve all your tomorrows.',
    author: 'Ralph Marston',
  },
  {
    quote: 'The future starts today, not tomorrow',
    author: 'Pope John Paul Ⅱ',
  },
  {
    quote: 'The science of today is the technology of tomorrow.',
    author: 'Edward Teller',
  },
  {
    quote: 'Don&#39;t let yesterday use up too much of today.',
    author: 'Will Rogar',
  },
  {
    quote: 'Only a life lived for others is a life worthwhile.',
    author: 'Albert Einstein',
  },
  {
    quote: 'The purpose of our lives is to be happy.',
    author: 'Dalai Lama',
  },
  {
    quote: 'Life is ours to be spent, not to be saved.',
    author: 'D.H.Lawrence',
  },
  {
    quote: 'Life is a long lesson in humility.',
    author: 'James M.Brrie',
  },
  {
    quote: 'Love the life you live. Live the life you love.',
    author: 'Bob Marley',
  },
];

const randomIndexQuote = Math.floor(Math.random() * quotes.length);

getQuote.innerHTML = quotes[randomIndexQuote].quote;
getAuthor.innerHTML = quotes[randomIndexQuote].author;
