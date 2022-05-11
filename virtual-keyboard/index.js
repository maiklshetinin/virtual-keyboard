const data = [
  {
    key: '`',
    ru: 'ё',
    code: 'Backquote',
    shift: '~',
  },
  {
    key: '1',
    code: 'Digit1',
    shift: '!',
  },
  {
    key: '2',
    code: 'Digit2',
    shift: '@',
    shiftru: '"',
  },
  {
    key: '3',
    code: 'Digit3',
    shift: '#',
    shiftru: '№',
  },
  {
    key: '4',
    code: 'Digit4',
    shift: '$',
    shiftru: ';',
  },
  {
    key: '5',
    code: 'Digit5',
    shift: '%',
  },
  {
    key: '6',
    code: 'Digit6',
    shift: '^',
    shiftru: ':',
  },
  {
    key: '7',
    code: 'Digit7',
    shift: '&',
    shiftru: '?',
  },
  {
    key: '8',
    code: 'Digit8',
    shift: '*',
  },
  {
    key: '9',
    code: 'Digit9',
    shift: '(',
  },
  {
    key: '0',
    code: 'Digit0',
    shift: ')',
  },
  {
    key: '-',
    code: 'Minus',
    shift: '_',
  },
  {
    key: '=',
    code: 'Equal',
    shift: '+',
  },
  {
    key: 'Backspace',
    code: 'Backspace',
  },
  {
    key: 'Tab',
    code: 'Tab',
  },
  {
    key: 'q',
    ru: 'й',
    code: 'KeyQ',
  },
  {
    key: 'w',
    ru: 'ц',
    code: 'KeyW',
  },
  {
    key: 'e',
    ru: 'у',
    code: 'KeyE',
  },
  {
    key: 'r',
    ru: 'к',
    code: 'KeyR',
  },
  {
    key: 't',
    ru: 'е',
    code: 'KeyT',
  },
  {
    key: 'y',
    ru: 'н',
    code: 'KeyY',
  },
  {
    key: 'u',
    ru: 'г',
    code: 'KeyU',
  },
  {
    key: 'i',
    ru: 'ш',
    code: 'KeyI',
  },
  {
    key: 'o',
    ru: 'щ',
    code: 'KeyO',

  },
  {
    key: 'p',
    ru: 'з',
    code: 'KeyP',
  },
  {
    key: '[',
    ru: 'х',
    code: 'BracketLeft',
    shift: '{',
  },
  {
    key: ']',
    ru: 'ъ',
    code: 'BracketRight',
    shift: '}',
  },
  {
    key: '\\',
    code: 'Backslash',
    shift: '|',
    shiftru: '//',
  },
  {
    key: 'del',
    code: 'Delete',
  },
  {
    key: 'CapsLock',
    code: 'CapsLock',
  },
  {
    key: 'a',
    ru: 'ф',
    code: 'KeyA',
  },
  {
    key: 's',
    ru: 'ы',
    code: 'KeyS',
  },
  {
    key: 'd',
    ru: 'в',
    code: 'KeyD',
  },
  {
    key: 'f',
    ru: 'а',
    code: 'KeyF',
  },
  {
    key: 'g',
    ru: 'п',
    code: 'KeyG',
  },
  {
    key: 'h',
    ru: 'р',
    code: 'KeyH',
  },
  {
    key: 'j',
    ru: 'о',
    code: 'KeyJ',
  },
  {
    key: 'k',
    ru: 'л',
    code: 'KeyK',
  },
  {
    key: 'l',
    ru: 'д',
    code: 'KeyL',
  },
  {
    key: ';',
    ru: 'ж',
    code: 'Semicolon',
    shift: ':',
  },
  {
    key: "'",
    ru: 'э',
    code: 'Quote',
    shift: '"',
  },
  {
    key: 'Enter',
    code: 'Enter',
  },
  {
    key: 'Shift',
    code: 'ShiftLeft',
  },
  {
    key: 'z',
    ru: 'я',
    code: 'KeyZ',
  },
  {
    key: 'x',
    ru: 'ч',
    code: 'KeyX',
  },
  {
    key: 'c',
    ru: 'с',
    code: 'KeyC',
  },
  {
    key: 'v',
    ru: 'м',
    code: 'KeyV',
  },
  {
    key: 'b',
    ru: 'и',
    code: 'KeyB',
  },
  {
    key: 'n',
    ru: 'т',
    code: 'KeyN',
  },
  {
    key: 'm',
    ru: 'ь',
    code: 'KeyM',
  },
  {
    key: ',',
    ru: 'б',
    code: 'Comma',
    shift: '<',
  },
  {
    key: '.',
    ru: 'ю',
    code: 'Period',
    shift: '>',

  },
  {
    key: '/',
    ru: '.',
    code: 'Slash',
    shift: '?',
    shiftru: ',',
  },
  {
    key: '▲',
    code: 'ArrowUp',
  },
  {
    key: 'Shift',
    code: 'ShiftRight',
  },
  {
    key: 'Ctrl',
    code: 'ControlLeft',
  },
  {
    key: 'Win',
    code: 'MetaLeft',
  },
  {
    key: 'Alt',
    code: 'AltLeft',
  },
  {
    key: ' ',
    code: 'Space',
  },
  {
    key: 'Alt',
    code: 'AltRight',
  },
  {
    key: '◄',
    code: 'ArrowLeft',
  },
  {
    key: '▼',
    code: 'ArrowDown',
  },
  {
    key: '►',
    code: 'ArrowRight',
  },
  {
    key: 'Ctrl',
    code: 'ControlRight',
  },
];

let lang = 'en';
let SHIFT_LEFT = false;
let SHIFT_RIGHT = false;
let ctrl = false;
let alt = false;

const body = document.querySelector('body');
const container = document.createElement('div');
const textarea = document.createElement('textarea');
const keyboard = document.createElement('div');
const footer = document.createElement('footer');

// -----------------------------------------------------------------getLocalStorage

function getLocalStorage() {
  if (localStorage.getItem('lang')) {
    lang = localStorage.getItem('lang');
  }
}
getLocalStorage();

// ------------------------------------------------------------Elem

class Elem {
  constructor(lg) {
    this.elem = document.createElement('button');
    this.lang = lg;
    this.capsLock = false;
    this.shift = false;
  }

  toLowerCase() {
    const content = this.elem.innerHTML.toLowerCase();
    this.elem.innerHTML = content;
    this.capsLock = false;
    return this;
  }

  toUpperCase() {
    const content = this.elem.innerHTML.toUpperCase();
    this.elem.innerHTML = content;
    this.capsLock = true;
    return this;
  }

  setTranslate() {
    if (this.lang === 'en') {
      this.elem.innerHTML = this.elem.dataset.ru;
      this.lang = 'ru';
    } else {
      this.elem.innerHTML = this.elem.dataset.key;
      this.lang = 'en';
    }
    return this;
  }

  onShift() {
    if (!this.shift) {
      if (lang === 'en') {
        this.elem.innerHTML = this.elem.dataset.shift;
        this.shift = true;
      } else if (lang === 'ru') {
        if (this.elem.dataset.shiftru) {
          this.elem.innerHTML = this.elem.dataset.shiftru;
          this.shift = true;
        } else if (this.elem.dataset.shift && !this.elem.dataset.ru) {
          this.elem.innerHTML = this.elem.dataset.shift;
          this.shift = true;
        }
      }
    } else if (this.elem.dataset.ru && lang === 'ru') {
      this.elem.innerHTML = this.elem.dataset.ru;
      this.shift = false;
    } else {
      this.elem.innerHTML = this.elem.dataset.key;
      this.shift = false;
    }
    return this;
  }
}

// ------------------------------------------------------------------------------------addButtons

function addButtons() {
  return data.map((el) => {
    const className = el.code.toLowerCase();
    const btn = new Elem(lang);
    btn.elem.classList.add('btn');
    btn.elem.classList.add(className);
    btn.elem.setAttribute('data-code', el.code);
    btn.elem.setAttribute('data-key', el.key);

    if (el.ru) {
      btn.elem.setAttribute('data-ru', el.ru);
    }

    if (el.shift) {
      btn.elem.setAttribute('data-shift', el.shift);
    }

    if (el.shiftru) {
      btn.elem.setAttribute('data-shiftru', el.shiftru);
    }

    if (el.ru) {
      btn.elem.textContent = btn.lang === 'en' ? el.key : el.ru;
    } else {
      btn.elem.textContent = el.key;
    }
    // return instance Elem
    return btn;
  });
}

// ----------------------------------------------------------------------------------------------add

container.classList.add('container');
textarea.setAttribute('rows', 10);
textarea.setAttribute('id', 'textarea');
textarea.autofocus = true;
keyboard.classList.add('keyboard');
footer.classList.add('footer');

// ----------------------------------------------------------------------------append

body.prepend(container);
container.append(textarea);
container.append(keyboard);
container.append(footer);
footer.innerHTML = 'Для переключения языка комбинация: левыe  ctrl + alt';

const buttons = addButtons();

buttons.forEach((el) => keyboard.append(el.elem));

// ------------------------------------------------------------------------const

const backSpace = document.querySelector('.btn.backspace');
const del = document.querySelector('.btn.delete');
const enter = document.querySelector('.btn.enter');
const left = document.querySelector('.btn.arrowleft');
const right = document.querySelector('.btn.arrowright');
const up = document.querySelector('.btn.arrowup');
const down = document.querySelector('.btn.arrowdown');
const tab = document.querySelector('.btn.tab');
const capsLock = document.querySelector('.btn.capslock');
const shiftLeft = document.querySelector('.btn.shiftleft');
const shiftRight = document.querySelector('.btn.shiftright');

// ------------------------------------------------------------------------onShift

function onShift() {
  buttons.forEach((el) => {
    if (el.elem.dataset.shift) {
      el.onShift();
    }
  });
}

// -------------------------------------------------------------------------onCapsLock

function onCapsLock() {
  buttons.forEach((el) => {
    if (el.elem.dataset.ru && !el.capsLock) {
      el.toUpperCase();
    } else if (el.elem.dataset.ru && el.capsLock) {
      el.toLowerCase();
    }
  });
}

// ----------------------------------------------------------------------onBackSpace

function onBackSpace() {
  const cursor = textarea.selectionStart;
  if (cursor === 0) return;

  const arr = textarea.value.split('');
  arr.splice(textarea.selectionStart - 1, 1);
  const res = arr.join('');

  textarea.value = res;
  textarea.selectionStart = cursor - 1;
  textarea.selectionEnd = cursor - 1;
}

// -----------------------------------------------------------------------------onUp

function onUp() {
  const cursor = textarea.selectionStart - 1;
  const { value } = textarea;
  const beforeCursor = value.slice(0, textarea.selectionStart).split('\n');

  if (beforeCursor[0].length === cursor + 1) return;

  let position;

  if (beforeCursor[beforeCursor.length - 1].length > beforeCursor[beforeCursor.length - 2].length) {
    position = cursor - beforeCursor[beforeCursor.length - 1].length;
  } else {
    position = cursor
            - beforeCursor[beforeCursor.length - 1].length
            - (beforeCursor[beforeCursor.length - 2].length
                - beforeCursor[beforeCursor.length - 1].length);
  }

  textarea.selectionStart = position;
  textarea.selectionEnd = position;
}
// ----------------------------------------------------------onDown

function onDown() {
  const cursor = textarea.selectionStart;
  const { value } = textarea;

  const rows = value.split('\n');

  const chekLastRow = value.length - rows[rows.length - 1].length;

  const beforeCursor = value.slice(textarea.value[0], textarea.selectionStart).split('\n');
  const afterCursor = value.slice(textarea.selectionStart, value.length).split('\n');

  if (rows.length === 1) return;
  if (cursor >= chekLastRow) return;

  let position;

  if (beforeCursor[beforeCursor.length - 1].length > afterCursor[1].length) {
    position = cursor + afterCursor[1].length + afterCursor[0].length + 1;
  } else {
    position = cursor + afterCursor[0].length + beforeCursor[beforeCursor.length - 1].length + 1;
  }

  textarea.selectionStart = position;
  textarea.selectionEnd = position;
}

// -------------------------------------------------------------------------mouseDown

function mouseDown(event) {
  if (event.target.classList.contains('btn')
        && !event.target.classList.contains('backspace')
        && !event.target.classList.contains('numpaddecimal')
        && !event.target.classList.contains('enter')
        && !event.target.classList.contains('arrowleft')
        && !event.target.classList.contains('arrowright')
        && !event.target.classList.contains('arrowup')
        && !event.target.classList.contains('arrowdown')
        && !event.target.classList.contains('tab')
        && !event.target.classList.contains('capslock')
        && !event.target.classList.contains('shiftleft')
        && !event.target.classList.contains('shiftright')
        && !event.target.classList.contains('controlleft')
        && !event.target.classList.contains('controlright')
        && !event.target.classList.contains('delete')
        && !event.target.classList.contains('altleft')
        && !event.target.classList.contains('altright')
        && !event.target.classList.contains('metaleft')
  ) {
    textarea.setRangeText(event.target.innerHTML, textarea.selectionStart, textarea.selectionEnd, 'end');
  }
}

// -----------------------------------------------------------------------mouseUp

function mouseUp() {

}

// ---------------------------------------------------------------------------onDel

function onDel() {
  const cursor = textarea.selectionStart;

  const arr = textarea.value.split('');
  arr.splice(textarea.selectionStart, 1);
  const res = arr.join('');

  textarea.value = res;
  textarea.selectionStart = cursor;
  textarea.selectionEnd = cursor;
}
// -------------------------------------------------------------------------onEnter

function onEnter() {
  textarea.setRangeText('\n', textarea.selectionStart, textarea.selectionEnd, 'end');
}
// ---------------------------------------------------------------------------onLeft

function onLeft() {
  const cursor = textarea.selectionStart;
  if (cursor === 0) return;
  textarea.selectionStart = cursor - 1;
  textarea.selectionEnd = cursor - 1;
}
// ----------------------------------------------------------------------------onRight

function onRight() {
  const cursor = textarea.selectionStart;
  textarea.selectionStart = cursor + 1;
  textarea.selectionEnd = cursor + 1;
}

// ----------------------------------------------------------------------------onTab

function onTab() {
  textarea.setRangeText('    ', textarea.selectionStart, textarea.selectionEnd, 'end');
}

// -----------------------------------------------------------------------translate

function translate() {
  buttons.forEach((el) => {
    if (el.elem.dataset.ru) {
      el.setTranslate();
    }
  });
  lang = lang === 'en' ? 'ru' : 'en';
}

// ---------------------------------------------------------------------keyDown

function keyDown(event) {
  const { code } = event;

  if (code === 'ControlLeft' || code === 'ControlRight') {
    event.preventDefault();
    ctrl = true;
  }

  if (code === 'AltLeft') {
    event.preventDefault();
    alt = true;

    // translate
    if (ctrl && alt) {
      translate();
    }
  }
  if (code === 'AltRight') {
    event.preventDefault();
  }

  //---------------------------------------------

  if (code === 'ShiftLeft' && !SHIFT_LEFT) {
    SHIFT_LEFT = true;
    event.preventDefault();
    onCapsLock();
    onShift();
  }

  if (code === 'ShiftRight' && !SHIFT_RIGHT) {
    SHIFT_RIGHT = true;
    event.preventDefault();
    onCapsLock();
    onShift();
  }

  //----------------------------------------------

  if (code === 'Tab') {
    event.preventDefault();
    onTab();
  }
  if (code === 'Enter') {
    event.preventDefault();
    onEnter();
  }
  if (code === 'Delete') {
    event.preventDefault();
    onDel();
  }
  if (code === 'ArrowLeft') {
    event.preventDefault();
    onLeft();
  }
  if (code === 'ArrowRight') {
    event.preventDefault();
    onRight();
  }
  if (code === 'ArrowUp') {
    event.preventDefault();
    onUp();
  }
  if (code === 'ArrowDown') {
    event.preventDefault();
    onDown();
  }
  if (code === 'Backspace') {
    event.preventDefault();
    onBackSpace();
  }

  keyboard.childNodes.forEach((el) => {
    if (el.dataset.code === code) {
      event.preventDefault();
      el.classList.add('active');
      if (code !== 'ShiftRight'
                  && code !== 'ShiftLeft'
                  && code !== 'CapsLock'
                  && code !== 'Enter'
                  && code !== 'Delete'
                  && code !== 'ArrowLeft'
                  && code !== 'ArrowRight'
                  && code !== 'ArrowUp'
                  && code !== 'ArrowDown'
                  && code !== 'AltLeft'
                  && code !== 'AltRight'
                  && code !== 'Tab'
                  && code !== 'MetaLeft'
                  && code !== 'ControlLeft'
                  && code !== 'ControlRight'
                  && code !== 'Backspace'
      ) {
        textarea.setRangeText(el.innerHTML, textarea.selectionStart, textarea.selectionEnd, 'end');
      }
    }
  });
}

// -------------------------------------------------------------------------------keyUp

function keyUp(event) {
  ctrl = false;
  alt = false;
  const { code } = event;

  if (code === 'CapsLock') {
    event.preventDefault();
    capsLock.classList.toggle('press');
    onCapsLock();
  }

  //-------------------------------------

  if (code === 'ShiftLeft') {
    SHIFT_LEFT = false;
    event.preventDefault();
    onCapsLock();
    onShift();
  }

  if (code === 'ShiftRight') {
    SHIFT_RIGHT = false;
    event.preventDefault();
    onCapsLock();
    onShift();
  }

  //---------------------------------------

  keyboard.childNodes.forEach((el) => {
    if (el.dataset.code === code) {
      el.classList.remove('active');
    }
  });
}

// ---------------------------------------------------------------------------addEventListener
keyboard.addEventListener('mousedown', mouseDown);
keyboard.addEventListener('mouseup', mouseUp);
document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);
document.addEventListener('click', () => { textarea.focus(); });
backSpace.addEventListener('click', onBackSpace);
del.addEventListener('click', onDel);
enter.addEventListener('click', onEnter);
left.addEventListener('click', onLeft);
right.addEventListener('click', onRight);
up.addEventListener('click', onUp);
down.addEventListener('click', onDown);
tab.addEventListener('click', onTab);
capsLock.addEventListener('click', () => { capsLock.classList.toggle('press'); onCapsLock(); });
shiftLeft.addEventListener('mousedown', () => { onShift(); onCapsLock(); });
shiftLeft.addEventListener('mouseup', () => { onShift(); onCapsLock(); });
shiftRight.addEventListener('mousedown', () => { onShift(); onCapsLock(); });
shiftRight.addEventListener('mouseup', () => { onShift(); onCapsLock(); });

// -----------------------------------------------------------------setLocalStorage

function setLocalStorage() {
  const chek = buttons.find((el) => el.elem.dataset.ru);
  localStorage.setItem('lang', chek.lang);
}
window.addEventListener('beforeunload', setLocalStorage);
