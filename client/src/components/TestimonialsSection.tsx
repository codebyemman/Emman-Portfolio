/*
 * Obsidian Craft component rules: no fabricated social proof, attributable quotes only,
 * restrained glass surfaces, and purposeful motion with touch, keyboard, and button support.
 */
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote, UserRound } from "lucide-react";
import { testimonialsContentNote, testimonialsData } from "@/content/testimonials";

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slideRefs = useRef<Array<HTMLDivElement | null>>([]);
  const hasMultipleSlides = testimonialsData.length > 1;

  useEffect(() => {
    if (!hasMultipleSlides || isPaused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      setActiveIndex((currentIndex) => {
        const nextIndex = (currentIndex + 1) % testimonialsData.length;
        slideRefs.current[nextIndex]?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
        return nextIndex;
      });
    }, 6000);
    return () => window.clearInterval(timer);
  }, [hasMultipleSlides, isPaused]);

  const goToSlide = (nextIndex: number) => {
    const normalizedIndex = (nextIndex + testimonialsData.length) % testimonialsData.length;
    setActiveIndex(normalizedIndex);
    slideRefs.current[normalizedIndex]?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
  };

  const handleCarouselKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (!hasMultipleSlides) return;
    if (event.key === "ArrowRight") {
      event.preventDefault();
      goToSlide(activeIndex + 1);
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goToSlide(activeIndex - 1);
    }
  };

  return (
    <section className="testimonials-section" aria-labelledby="testimonials-title">
      <div className="testimonials-heading">
        <div>
          <p className="eyebrow">Trust, in their words</p>
          <h2 id="testimonials-title">Built with people,<br /><span>not just specs.</span></h2>
        </div>
        <p className="section-aside">Approved client feedback<br />will live here.</p>
      </div>

      {testimonialsData.length > 0 ? (
        <div className={`testimonials-carousel ${isPaused ? "testimonials-carousel--paused" : ""}`} role="region" aria-roledescription="carousel" aria-label="Client testimonials" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)} onFocusCapture={() => setIsPaused(true)} onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setIsPaused(false); }} onTouchStart={() => setIsPaused(true)} onTouchEnd={() => window.setTimeout(() => setIsPaused(false), 1400)}>
          <div className="testimonials-track" tabIndex={0} aria-live={isPaused ? "polite" : "off"} onKeyDown={handleCarouselKeyDown} onScroll={(event) => {
            const track = event.currentTarget;
            const nextIndex = Math.round(track.scrollLeft / track.clientWidth);
            if (nextIndex !== activeIndex) setActiveIndex(nextIndex);
          }}>
            {testimonialsData.map((testimonial, index) => (
              <div className="testimonial-slide" ref={(node) => { slideRefs.current[index] = node; }} key={`${testimonial.name}-${testimonial.quote}`} role="group" aria-roledescription="slide" aria-label={`${index + 1} of ${testimonialsData.length}`}>
                <figure className="testimonial-card">
                  <Quote className="testimonial-card__quote" size={24} aria-hidden="true" />
                  <blockquote>{testimonial.quote}</blockquote>
                  <figcaption>
                    <span className="testimonial-card__avatar" aria-hidden="true"><UserRound size={16} /></span>
                    <span><strong>{testimonial.name}</strong><small>{testimonial.role}{testimonial.company ? ` · ${testimonial.company}` : ""}</small>{testimonial.project && <small>{testimonial.project}</small>}</span>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
          {hasMultipleSlides && (
            <div className="testimonials-controls">
              <div className="testimonials-dots" aria-label="Choose testimonial">
                {testimonialsData.map((testimonial, index) => <button key={`${testimonial.name}-dot`} className={`testimonial-dot ${index === activeIndex ? "testimonial-dot--active" : ""}`} type="button" onClick={() => goToSlide(index)} aria-label={`Show testimonial ${index + 1}`} aria-current={index === activeIndex ? "true" : undefined} />)}
              </div>
              <div className="testimonials-arrows">
                <button type="button" onClick={() => goToSlide(activeIndex - 1)} aria-label="Previous testimonial"><ChevronLeft size={16} /></button>
                <button type="button" onClick={() => goToSlide(activeIndex + 1)} aria-label="Next testimonial"><ChevronRight size={16} /></button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="testimonials-empty" role="note">
          <div className="testimonials-empty__mark"><Quote size={22} /></div>
          <div>
            <h3>Real feedback belongs here.</h3>
            <p>{testimonialsContentNote}</p>
          </div>
          <a className="text-link" href="#contact">Request a project conversation <span aria-hidden="true">↗</span></a>
        </div>
      )}
    </section>
  );
}
