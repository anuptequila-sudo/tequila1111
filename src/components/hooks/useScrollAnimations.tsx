"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function splitTextNodes(root: HTMLElement) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
  const textNodes: Text[] = [];

  while (walker.nextNode()) {
    textNodes.push(walker.currentNode as Text);
  }

  textNodes.forEach((textNode) => {
    const parent = textNode.parentNode!;
    const text = textNode.nodeValue || "";
    if (text.trim().length === 0) return;

    const frag = document.createDocumentFragment();

    const words = text.split(/(\s+)/);

    words.forEach((word) => {
      if (word.trim().length === 0) {
        frag.appendChild(document.createTextNode(word));
      } else {
        const wordWrapper = document.createElement("div");
        wordWrapper.className = "spl-word";
        wordWrapper.style.display = "inline-block";

        for (let i = 0; i < word.length; i++) {
          const ch = word[i];
          const charDiv = document.createElement("div");
          charDiv.className = "spl-char";
          charDiv.textContent = ch;
          charDiv.style.display = "inline-block";
          wordWrapper.appendChild(charDiv);
        }

        frag.appendChild(wordWrapper);
      }
    });

    parent.replaceChild(frag, textNode);
  });
}

const useScrollAnimations = () => {
  useEffect(() => {
    const originalsAll: { el: HTMLElement; html: string }[] = [];
    const createdTriggers: Array<ScrollTrigger | gsap.core.Timeline> = [];

    const opacityTimelines: gsap.core.Timeline[] = [];
    const opacityTriggers: ScrollTrigger[] = [];
    const opacityOriginals: { el: HTMLElement; html: string }[] = [];

    const killOpacity = () => {
      opacityTimelines.forEach((t) => t.kill());
      opacityTriggers.forEach((st) => st.kill());
      opacityOriginals.forEach(({ el, html }) => {
        el.innerHTML = html;
        delete (el as any).__splitted;
      });
      opacityTimelines.length = 0;
      opacityTriggers.length = 0;
      opacityOriginals.length = 0;
    };

    const initOpacityAnimations = () => {
      const elems = Array.from(document.querySelectorAll<HTMLElement>("[data-splitting-opacity-anime]"));

      const buildAnimations = () => {
        opacityTimelines.forEach((tl) => {
          try {
            tl.scrollTrigger?.kill();
            tl.kill();
          } catch {}
        });
        opacityTimelines.length = 0;
        opacityTriggers.length = 0;

        elems.forEach((el) => {
          if (!(el as any).__splitted) {
            opacityOriginals.push({ el, html: el.innerHTML });
            originalsAll.push({ el, html: el.innerHTML });
            splitTextNodes(el);
            (el as any).__splitted = true;
          }

          const chars = Array.from(el.querySelectorAll<HTMLElement>(".spl-char"));
          if (!chars.length) return;
          chars.forEach((c) => (c.style.willChange = "opacity"));

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: el,
              start: el.getAttribute("data-splitting-start") || "top bottom",
              end: el.getAttribute("data-splitting-end") || "top 80%",
              scrub: Number(el.getAttribute("data-splitting-scrub") ?? 1),
            },
          });

          tl.fromTo(
            chars,
            { opacity: 0.5 },
            {
              opacity: 1,
              stagger: Number(el.getAttribute("data-splitting-stagger") ?? 0.2),
              // ease: "none",
            }
          );

          opacityTimelines.push(tl);
          if (tl.scrollTrigger) opacityTriggers.push(tl.scrollTrigger);
        });

        ScrollTrigger.refresh(); // ✅ force refresh after rebuild
      };

      buildAnimations();

      const htmlEl = document.documentElement;
      if (!(htmlEl as any).__themeObserverAttached) {
        const observer = new MutationObserver((mutations) => {
          for (const m of mutations) {
            if (m.attributeName === "data-theme") {
              buildAnimations();
              break;
            }
          }
        });

        observer.observe(htmlEl, {
          attributes: true,
          attributeFilter: ["data-theme"],
        });
        (htmlEl as any).__themeObserverAttached = true;
      }
    };

    const initOpacityAnimations2 = () => {
      const elems = Array.from(document.querySelectorAll<HTMLElement>("[data-splitting-opacity-anime2]"));

      elems.forEach((el) => {
        if ((el as any).__splitted2) return;
        originalsAll.push({ el, html: el.innerHTML });
        splitTextNodes(el);
        (el as any).__splitted2 = true;

        const chars = Array.from(el.querySelectorAll<HTMLElement>(".spl-char"));
        if (!chars.length) return;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: el,
            start: el.getAttribute("data-splitting-start") || "top bottom",
            end: el.getAttribute("data-splitting-end") || "top 80%",
            scrub: Number(el.getAttribute("data-splitting-scrub") ?? 1),
          },
        });

        tl.fromTo(
          chars,
          { opacity: 0.5 },
          {
            opacity: 1,
            stagger: Number(el.getAttribute("data-splitting-stagger") ?? 0.35),
            ease: "none",
          }
        );

        createdTriggers.push(tl.scrollTrigger!);
      });
    };

    const initOtherAnimations = () => {
      const comeUpElems = document.querySelectorAll("[data-come-up-anime]");
      comeUpElems.forEach((el) => {
        const tween = gsap.fromTo(
          el,
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 100%",
              end: "top 70%",
              scrub: 1,
              toggleActions: "play reverse play reverse",
            },
          }
        );
        createdTriggers.push(tween.scrollTrigger!);
      });

      const comeUpElems2 = document.querySelectorAll("[data-come-up-anime2]");
      comeUpElems2.forEach((el) => {
        const tween = gsap.fromTo(
          el,
          { y: 80, opacity: 0.1 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
              end: "top 70%",
              scrub: 1,
              toggleActions: "play reverse play reverse",
            },
          }
        );
        createdTriggers.push(tween.scrollTrigger!);
      });
    };

    requestAnimationFrame(() => {
      initOpacityAnimations();
      initOpacityAnimations2();
      initOtherAnimations();
    });

    let lastHeight = document.body.scrollHeight;
    let refreshTimeout: number | null = null;

    const handleScroll = () => {
      const currentHeight = document.body.scrollHeight;
      if (currentHeight !== lastHeight) {
        lastHeight = currentHeight;

        if (refreshTimeout) window.clearTimeout(refreshTimeout);
        refreshTimeout = window.setTimeout(() => {
          ScrollTrigger.refresh();
        }, 200);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", () => ScrollTrigger.refresh());

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", () => ScrollTrigger.refresh());
      killOpacity();
      createdTriggers.forEach((t) => (t as any).kill?.());
      originalsAll.forEach(({ el, html }) => (el.innerHTML = html));
    };
  }, []);
};

export default useScrollAnimations;
