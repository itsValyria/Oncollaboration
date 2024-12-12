<script>
  import { Navigation, Footer } from "$lib/index.js";
  import { navigating } from "$app/stores";
  import { onMount } from "svelte";

  onMount(() => {
    let scrolling = false;
    const ornament_img = [
      "/images/kerstbal-1.png",
      "/images/kerstbal-2.png",
      "/images/kerstbal-3.png"
    ];

    function createDiv(className) {
      const div = document.createElement("div");
      if (className) {
        div.className = className;
      }

      return div;
    }

    function randomBetween(min, max) {
      return Math.random() * (max - min) + min;
    }

    const prefix = (function () {
      const styles = window.getComputedStyle(document.documentElement, "");
      const pre = (Array.prototype.slice
          .call(styles)
          .join("")
          .match(/-(moz|webkit|ms)-/) ||
          (styles.OLink === "" && ["", "o"]))[1];
      const dom = "WebKit|Moz|MS|O".match(new RegExp("(" + pre + ")", "i"))[1];
      return {
        dom: dom,
        lowercase: pre,
        css: "-" + pre + "-",
        js: pre[0].toUpperCase() + pre.substr(1),
      };
    })();

    const transform = prefix.css + "transform";

    function Ornaments() {
      let ornament_center;
      const _ornaments = [];

      this.initItems = function () {
        ornament_center = createDiv("ornament-center");
        Object.assign(ornament_center.style, {
          position: "fixed",
          width: "10px",
          height: "10px",
          bottom: "0",
          display: "none",
        });
        document.body.appendChild(ornament_center);

        const screen_w = window.innerWidth;
        for (let i = 0; i < 20; i++) {
          const ornament = {
            el: createDiv("ornament"),
          };

          const rn = Math.round(randomBetween(0, ornament_img.length));
          Object.assign(ornament.el.style, {
            position: "absolute",
            background: "url(" + ornament_img[rn] + ")",
            backgroundSize: "cover",
            opacity: 1,
            left: Math.random() * window.innerWidth + "px",
          });
          _ornaments.push(ornament);
          ornament_center.appendChild(ornament.el);
        }
      };

      this.beginAnimation = function (callback) {
        ornament_center.style.display = "block";
        const screen_w = window.innerWidth;

        for (const i in _ornaments) {
          _ornaments[i]._y = -(screen_w / 2) + Math.random() * screen_w;
          _ornaments[i]._rotation = -10 * Math.random() * 20;

          _ornaments[i].el.style.display = "block";
          _ornaments[i].el.style.transition =
            "transform 0.4s cubic-bezier(0.215, 0.61, 0.355, 1)";

          _ornaments[i].el.style.transform =
            `translateY(${_ornaments[i]._y}px) rotateZ(${_ornaments[i]._rotation}deg)`;

          setTimeout(() => {
            _ornaments[i].el.style.transition =
              "transform 0.6s cubic-bezier(0.215, 0.61, 0.355, 1)";
            _ornaments[i].el.style.transform =
              `translateY(${window.innerHeight / 2 + 50}px) rotateZ(${_ornaments[i]._rotation}deg)`;
          }, 400 + i * 10);
        }

        setTimeout(function () {
          scrolling = false;
        }, 1000);
      };

      this.initItems();
    }

    const ornaments = new Ornaments();

    window.addEventListener("scroll", function () {
      clearTimeout(window.scrollTimer);
      window.scrollTimer = setTimeout(function () {
        if (!scrolling) {
          scrolling = true;
          ornaments.beginAnimation();
        }
      }, 250);
    });
  });
</script>

{#if $navigating}
  <Navigation />
  <main>
    <span>Loading...</span>
  </main>
{:else}
  <Navigation />
  <div class="content container">
    <slot />
    <slot />
    <slot />
    <slot />
    <slot />
    <slot />
  </div>
{/if}
<footer>
  <Footer />
</footer>

<style>
  main {
    margin: auto;
  }

  .content {
    flex: 1;
    margin-right: 1em;
    margin-left: 1em;
  }

  footer {
    height: 115px;
    background-color: #f0f0f0;
  }

  span {
    display: block;
    font-size: var(--font-size-4xl);
    font-weight: bold;
    margin: auto;
  }

  @media (min-width: 600px) {
    .content {
      margin-bottom: 77px;
    }
  }

  @media (min-width: 1080px) {
    .content {
      margin-top: 74px;
      padding-bottom: 0;
    }
  }

  @media (min-width: 1920px) {
    .content {
      margin-top: 82px;
    }
  }
</style>
