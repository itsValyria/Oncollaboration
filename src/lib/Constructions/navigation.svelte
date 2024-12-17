<script>
  import { page } from '$app/stores';
  import { onMount } from 'svelte';

  let isProcessing = false;
  let audio;

  onMount(() => {
    try {
      audio = new Audio('/audio/intro.mp3');
      console.log('Audio object created');
    } catch (e) {
      console.error('Error initializing audio:', e);
    }
  });

  function toggleChristmasTheme() {
    if (isProcessing) return;
    isProcessing = true;

    // Get the current theme
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'default';

    // Toggle the theme between 'default' and 'christmas'
    const newTheme = currentTheme === 'christmas' ? 'default' : 'christmas';

    // Set the new theme
    document.documentElement.setAttribute('data-theme', newTheme);

    // Get the Christmas button SVG elements
    const christmasButtonSvg = document.querySelector('.christmas-button-svg');
    const christmasButtonSvgFilled = document.querySelector('.christmas-button-svg-filled');

    // Check if the elements exist and toggle the SVG visibility
    if (christmasButtonSvg && christmasButtonSvgFilled) {
      if (newTheme === 'christmas') {
        christmasButtonSvgFilled.style.display = 'block';
        christmasButtonSvg.style.display = 'none';

        // Play the Christmas audio
        audio.volume = 0.4;
        audio.play();
      } else {
        christmasButtonSvgFilled.style.display = 'none';
        christmasButtonSvg.style.display = 'block';

        // Stop the audio if theme is not Christmas
        audio.pause();
        audio.currentTime = 0;
      }
    } else {
      console.error('SVG elements not found in the DOM');
    }

    // Reset flag after a short delay to allow time for the theme change
    setTimeout(() => {
      isProcessing = false;
    }, 300);
  }
</script>

<nav>
    <ul>
      <li>
        <a href="/" class:active={$page.url.pathname === '/'}>
          <svg class='icon' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/></svg>Home
        </a>
      </li>
      <li>
        <a href="/webinars" class:active={$page.url.pathname.startsWith('/webinars')}>
          <svg class='icon' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M840-120v-640H120v320H40v-320q0-33 23.5-56.5T120-840h720q33 0 56.5 23.5T920-760v560q0 33-23.5 56.5T840-120ZM360-400q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm0-80q33 0 56.5-23.5T440-560q0-33-23.5-56.5T360-640q-33 0-56.5 23.5T280-560q0 33 23.5 56.5T360-480ZM40-80v-112q0-34 17.5-62.5T104-298q62-31 126-46.5T360-360q66 0 130 15.5T616-298q29 15 46.5 43.5T680-192v112H40Zm80-80h480v-32q0-11-5.5-20T580-226q-54-27-109-40.5T360-280q-56 0-111 13.5T140-226q-9 5-14.5 14t-5.5 20v32Zm240-400Zm0 400Z"/></svg>Webinars
        </a>
      </li>
      <li>
        <a href="/contourings" class:active={$page.url.pathname.startsWith('/contourings')}>
          <svg class='icon' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-560H200v560Zm160 0v-72l-72-84q-11-11-19.5-30t-8.5-44q0-13 2.5-25.5T271-440q-5-11-8-23.5t-3-26.5q0-25 8.5-44t19.5-30l72-84v-72h60v83q0 5-7 19l-80 94q-7 8-10 16.5t-3 17.5q0 20 13 34.5t33 14.5q9 0 17-3t14-10q17-17 38.5-26t44.5-9q23 0 44.5 9t38.5 26q7 7 15 10t16 3q20 0 33-14.5t13-33.5q0-9-3.5-17.5T627-523l-80-95q-4-4-5.5-9t-1.5-10v-83h60v72l73 86q14 16 20.5 34.5T700-489q0 13-3.5 25.5T688-440q6 12 9 24.5t3 25.5q0 25-8.5 44T672-316l-72 84v72h-60v-83q0-6 7-19l80-94q7-8 10-17t3-18q-11 5-22 7.5t-23 2.5q-20 0-40-8t-35-24q-7-8-17.5-12t-22.5-4q-11 0-21.5 4T440-413q-15 16-34.5 24t-39.5 8q-12 0-23.5-2.5T320-391q0 9 3 18t10 17l80 94q3 5 5 9.5t2 9.5v83h-60Zm-160 0v-560 560Z"/></svg>Contouring
        </a>
      </li>
      <li>
        <a href="/profile" class:active={$page.url.pathname.startsWith('/profile')}>
          <svg class='icon'xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"/></svg>Profile
        </a>
      </li>
      <li>
        <button on:click={toggleChristmasTheme} class="christmas-button" aria-label="Toggle Christmas Theme">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="christmas-button-svg size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75-1.5.75a3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0L3 16.5m15-3.379a48.474 48.474 0 0 0-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 0 1 3 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 0 1 6 13.12M12.265 3.11a.375.375 0 1 1-.53 0L12 2.845l.265.265Zm-3 0a.375.375 0 1 1-.53 0L9 2.845l.265.265Zm6 0a.375.375 0 1 1-.53 0L15 2.845l.265.265Z" /></svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="christmas-button-svg-filled size-6"><path d="m15 1.784-.796.795a1.125 1.125 0 1 0 1.591 0L15 1.784ZM12 1.784l-.796.795a1.125 1.125 0 1 0 1.591 0L12 1.784ZM9 1.784l-.796.795a1.125 1.125 0 1 0 1.591 0L9 1.784ZM9.75 7.547c.498-.021.998-.035 1.5-.042V6.75a.75.75 0 0 1 1.5 0v.755c.502.007 1.002.021 1.5.042V6.75a.75.75 0 0 1 1.5 0v.88l.307.022c1.55.117 2.693 1.427 2.693 2.946v1.018a62.182 62.182 0 0 0-13.5 0v-1.018c0-1.519 1.143-2.829 2.693-2.946l.307-.022v-.88a.75.75 0 0 1 1.5 0v.797ZM12 12.75c-2.472 0-4.9.184-7.274.54-1.454.217-2.476 1.482-2.476 2.916v.384a4.104 4.104 0 0 1 2.585.364 2.605 2.605 0 0 0 2.33 0 4.104 4.104 0 0 1 3.67 0 2.605 2.605 0 0 0 2.33 0 4.104 4.104 0 0 1 3.67 0 2.605 2.605 0 0 0 2.33 0 4.104 4.104 0 0 1 2.585-.364v-.384c0-1.434-1.022-2.7-2.476-2.917A49.138 49.138 0 0 0 12 12.75ZM21.75 18.131a2.604 2.604 0 0 0-1.915.165 4.104 4.104 0 0 1-3.67 0 2.605 2.605 0 0 0-2.33 0 4.104 4.104 0 0 1-3.67 0 2.605 2.605 0 0 0-2.33 0 4.104 4.104 0 0 1-3.67 0 2.604 2.604 0 0 0-1.915-.165v2.494c0 1.035.84 1.875 1.875 1.875h15.75c1.035 0 1.875-.84 1.875-1.875v-2.494Z" /></svg><span>Christmas</span>               
        </button>
      </li>
    </ul>
  </nav>

  <style>
    nav {
      position: fixed;
      background-color: var(--background-color-alt);
      bottom: 0;
      width: 100%;
      padding: 0 1em .5em;
      z-index: 1000;
      box-shadow: 0px -4px 17px 0px rgba(0,0,0,0.3);
      background-color: var(--background-color-alt);
    }
  
    ul {
      display: flex;
      justify-content: space-around;
    }
  
    li a {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: var(--font-size-xs);
      color: rgba(116, 116, 116, 1);
      padding: .7em .5em 0; 
      text-decoration: none;
    }
  
    li a.active {
      color: var(--primary-color);
      border-top: var(--border-nav);
      padding-top: calc(.7em - 2px);
    }
  
    .icon {
      width: 24px;
      height: 24px;
    }

    .christmas-button {
      border: none;
      background-color: transparent;
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: var(--font-size-xs);
      color: rgba(116, 116, 116, 1);
      padding: .7em .5em 0; 
      text-decoration: none;
    }

    .christmas-button svg {
      width: 24px;
      height: 24px;
      color: rgba(116, 116, 116, 1);
    }

    .christmas-button-svg-filled {
      display: none;
    }

    .christmas-button-svg {
      display: block;
    }

    .christmas-button svg {
      transition: fill 0.3s ease;
    }

    .christmas-button-svg-filled {
      transition: display 0.3s ease;
    }
  
    @media screen and (min-width: 600px) {
      li a {
        font-size: var(--font-size-md);
      }
  
      .icon {
        width: 28px;
        height: 28px;
      }

      .christmas-button {
        font-size: var(--font-size-md);
      }

      .christmas-button svg {
        width: 28px;
        height: 28px;
      }
    }
  
    @media screen and (min-width: 1080px) {
  
      nav {
        bottom: auto;
        top: 0;
        box-shadow: 0px 4px 17px 0px rgba(0,0,0,0.3);
        padding: 0;
      }
  
      ul {
        justify-content: right;
      }
  
      li a {
        flex-direction: row-reverse;
        padding: 1em .5em;
        margin-right: 1.5em;
        font-weight: 700;
      }

      .christmas-button {
        flex-direction: row-reverse;
        padding: 1em .5em;
        margin-right: 1.5em;
        font-weight: 700;
      }
  
      li a.active {
        padding-top: 1em;
        border-bottom: var(--border-nav);
        padding-bottom: calc(1em - 3px);
        border-top: 0;
      }
  
      .icon {
        width: 32px;
        height: 32px;
        margin-left: .4em;
      }

      .christmas-button svg {
        width: 32px;
        height: 32px;
        margin: .2em;
      }

      .christmas-button span {
        display: none;
      }

      .christmas-button:hover {
        cursor: pointer;
      }
    }
  
    @media screen and (min-width: 1920px) {
  
      li a {
        font-size: var(--font-size-xl);
      }
    }
  </style>