import { debounce } from "./debounce.min.mjs";

const MAX_ANGLE = 2;
const MAX_TOP = 20;
const MAX_RIGHT = 20;
const NOTE_MAX_RIGHT = 40;
const PARAGRAPH_MARGIN = 24; // 1.5rem = 1.5 * 16

const BREAKPOINT = 800;
let lessThanBreakpoint = false;

const USE_RECEIPT = getRandomBoolean();

window.addEventListener("resize", debounce(() => {
  resize();
  arrangeNotes();
}, 200));

resize();
arrangeNotes();

function getRandomBoolean() {
  return Math.random() > 0.5;
}

function resize() {
  const width = window.innerWidth;
  lessThanBreakpoint = width <= BREAKPOINT;
}

function arrangeNotes() {
  const scribbles = document.querySelectorAll(".scribbles");
  scribbles.forEach(s => {
    s.classList.toggle("scribbles--receipt", USE_RECEIPT);
    s.classList.toggle("scribbles--notes", !USE_RECEIPT);
  });

  if (USE_RECEIPT) {
    const receipts = document.querySelectorAll(".scribbles--receipt");
    receipts.forEach(receipt => {
      const angle = Math.round(Math.random() * MAX_ANGLE);
      const signedAngle = angle * (getRandomBoolean() ? 1 : -1);
      receipt.style.transform = `rotate(${signedAngle}deg)`;
      if (!lessThanBreakpoint) {
        const top = Math.round(Math.random() * MAX_TOP);
        const signedTop = top * (getRandomBoolean() ? 1 : -1);
        receipt.style.marginTop = `${signedTop}px`;
        const right = Math.round(Math.random() * MAX_RIGHT);
        const signedRight = right * (getRandomBoolean() ? 1 : -1);
        receipt.style.marginRight = `${signedRight}px`;
      } else {
        receipt.style.removeProperty("margin-top");
        receipt.style.removeProperty("margin-right");
      }

      const notes = receipt.querySelectorAll(".note");
      notes.forEach(note => {
        const time = note.querySelector("time");
        if (!time) return;
        const dateString = time.dateTime;
        const date = new Date(dateString);
        const [year, month, day] = [
          date.getFullYear().toString().slice(2),
          (date.getMonth() + 1).toString().padStart(2, '0'),
          date.getDate().toString().padStart(2, '0')
        ];
        const formatted = `${year}.${month}.${day}`;
        time.innerText = formatted;
      });
    });
  } else {
    const notes = document.querySelectorAll(".scribbles .note");
    for (let i = 0; i < notes.length; i++) {
      const note = notes[i];
      let transforms = [];
      const angle = Math.round(Math.random() * MAX_ANGLE);
      const signedAngle = angle * (getRandomBoolean() ? 1 : -1);
      const rotation = `rotate(${signedAngle}deg)`;
      transforms.push(rotation);

      const right = Math.round(Math.random() * NOTE_MAX_RIGHT) * -1;
      const translation = `translate(${right}px, 0)`;
      transforms.push(translation);

      if (i > 0) {
        const prevNote = notes[i - 1];
        const textBlocks = Array.from(prevNote.querySelectorAll("p, h2"));
        const textHeight = textBlocks.reduce((accumulator, current) => {
          let height = current.getBoundingClientRect().height;
          if (accumulator > 0) {
            height += PARAGRAPH_MARGIN;
          } else {
            height += PARAGRAPH_MARGIN * 2;
          }
          return accumulator + height;
        }, 0);
        const randomTop = Math.round(Math.random() * MAX_TOP);
        const top = textHeight + randomTop;
        note.style.marginTop = `calc(-100% + ${top}px)`;
      }

      note.style.transform = transforms.join(" ");
    }
  }
}