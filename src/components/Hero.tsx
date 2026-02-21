'use client'

import Image from 'next/image'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero-section">

      {/* Timeline Section */}
      <div className="timeline-wrapper">

        <span className="timeline-left">2014 - THE BEGINNING</span>
        <span className="timeline-right">2018 - THE CODE</span>

        <div className="timeline-line"></div>

        <div className="timeline-center">
          <span className="timeline-top">
            2016 - THE UNIFORM EMERGES
          </span>

          <div className="frame">
            <div className="inner-frame">
              <Image
                src="/hero-center.jpg"
                alt="Storefront"
                width={900}
                height={600}
                className="hero-image"
              />
              <div className="hero-overlay">
                <p>
                  TOTÊME IS AN INDEPENDENT HOUSE OF REFINED ESSENTIALS.
                  DESIGNED THROUGH REDUCTION. DEFINED BY PROPORTION,
                  MATERIAL INTEGRITY, AND TIMELESS FORM. A PERMANENT
                  WARDROBE—MADE TO RETURN.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Brand Statement */}
      <div className="brand-statement">
        <h1>
          DESIGNED
          <span className="icon-dot"></span>
          WITH
          <span className="icon-dot"></span>
          INTENTION
        </h1>

        <p>
          EACH COLLECTION IS DEVELOPED AS PART OF A WIDER WARDROBE.
          EVERY SILHOUETTE, FABRIC, AND TONE IS CONSIDERED IN RELATION
          TO THE WHOLE—ALLOWING PIECES TO COEXIST SEAMLESSLY
          ACROSS SEASONS.
        </p>
      </div>

    </section>
  )
}
