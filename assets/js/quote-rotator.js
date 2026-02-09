// Premium Typewriter Effect for Quote Rotator
const quotes = [
    "Data turns intuition into evidence and decisions into strategy.",
    "Smart decisions begin where raw data ends.",
    "Without data, decisions are guesses. With data, they are assets.",
    "Business growth follows insight, and insight follows data.",
    "Data is the language; decisions are the outcome.",
    "Data tells the story—analytics reveals the meaning.",
    "Numbers don't decide; insights do.",
    "From spreadsheets to strategy—data drives every step.",
    "Good data asks questions. Great analytics answers them.",
    "Insights are created when data meets context.",
    "The best leaders listen to data before making decisions.",
    "Data-driven decisions reduce risk and multiply impact.",
    "When data leads, confidence follows.",
    "Decisions backed by data scale better than opinions.",
    "Leadership today is measured by how well data is used.",
    "Data → Insight → Action.",
    "Where data speaks, smart decisions follow.",
    "Transforming data into direction.",
    "From data chaos to business clarity.",
    "Turning information into impact."
];

let currentQuoteIndex = 0;
const quoteElement = document.getElementById('animated-quote');

// Check for reduced motion preference (accessibility)
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

let typingTimeout;
let erasingTimeout;
let nextQuoteTimeout;
let cursorBlinkInterval;

// Premium typewriter with realistic speed variations
function typeWriter(text, index = 0) {
    if (!quoteElement) return;

    if (index < text.length) {
        const char = text[index];
        quoteElement.innerHTML = '"' + text.substring(0, index + 1) + '<span class="cursor">|</span>"';

        // Realistic speed variation
        let delay = 40 + Math.random() * 40; // 40-80ms variation

        // Pause after punctuation for realism
        if (char === ',' || char === ';') {
            delay += 200; // Pause after commas
        } else if (char === '.' || char === '!' || char === '?') {
            delay += 400; // Longer pause after sentence endings
        } else if (char === ' ') {
            delay = 30; // Faster for spaces
        }

        // Respect reduced motion preference
        if (prefersReducedMotion) {
            delay = 0; // Instant for accessibility
        }

        typingTimeout = setTimeout(() => typeWriter(text, index + 1), delay);
    } else {
        // Text complete - show with blinking cursor
        startCursorBlink();
        nextQuoteTimeout = setTimeout(fadeOutCursor, 3000);
    }
}

// Smooth cursor blink
function startCursorBlink() {
    const cursor = quoteElement.querySelector('.cursor');
    if (cursor) {
        cursorBlinkInterval = setInterval(() => {
            cursor.style.opacity = cursor.style.opacity === '0' ? '1' : '0';
        }, 500);
    }
}

function stopCursorBlink() {
    clearInterval(cursorBlinkInterval);
}

// Smooth cursor fade-out before erasing
function fadeOutCursor() {
    stopCursorBlink();
    const cursor = quoteElement.querySelector('.cursor');

    if (cursor) {
        cursor.style.transition = 'opacity 0.5s ease';
        cursor.style.opacity = '0';

        setTimeout(eraseText, 500); // Start erasing after cursor fades
    } else {
        eraseText();
    }
}

// Erase text with realistic speed
function eraseText(remainingText = null) {
    if (!quoteElement) return;

    if (remainingText === null) {
        const fullText = quoteElement.textContent.replace(/^"|"$/g, '').replace('|', '');
        remainingText = fullText;
    }

    if (remainingText.length > 0) {
        const newText = remainingText.substring(0, remainingText.length - 1);
        quoteElement.innerHTML = '"' + newText + '<span class="cursor">|</span>"';

        const delay = prefersReducedMotion ? 0 : 20 + Math.random() * 15; // 20-35ms variation
        erasingTimeout = setTimeout(() => eraseText(newText), delay);
    } else {
        // Erasing complete - move to next quote
        quoteElement.innerHTML = '""';
        currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;

        const pause = prefersReducedMotion ? 0 : 800;
        setTimeout(() => typeWriter(quotes[currentQuoteIndex]), pause);
    }
}

// Initialize
if (quoteElement) {
    // If reduced motion is preferred, show all text immediately
    if (prefersReducedMotion) {
        quoteElement.textContent = '"' + quotes[currentQuoteIndex] + '"';
        // Still cycle through quotes, but instantly
        setInterval(() => {
            currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
            quoteElement.textContent = '"' + quotes[currentQuoteIndex] + '"';
        }, 5000);
    } else {
        // Start premium typewriter effect
        typeWriter(quotes[currentQuoteIndex]);
    }
}

// Cleanup
window.addEventListener('beforeunload', () => {
    clearTimeout(typingTimeout);
    clearTimeout(erasingTimeout);
    clearTimeout(nextQuoteTimeout);
    stopCursorBlink();
});
