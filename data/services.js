/* ------------------------------------------------------------------
   SERVICES
   - items: the cards. "bookAs" is the treatment that gets pre-selected
     in the booking form when someone clicks the card's link.
   - also: the small "Also:" chips under the cards.
   - extraBookingOptions: extra choices for the booking form's
     Treatment menu (the cards, membership and international plan are
     added automatically).
------------------------------------------------------------------- */
window.SITE = window.SITE || {};

SITE.services = {
  intro: {
    heading: "Treatments for every smile.",
    text: "Four core areas of care, each led by a dentist trained in it."
  },
  items: [
    {
      title: "Child dentistry",
      text: "Milk teeth help children chew and hold space in the jaw so permanent teeth come in straight. We make those early visits calm and friendly.",
      image: "service-child.jpg",
      alt: "A smiling child holding a toy during a dental check-up",
      cta: "Book for your child",
      bookAs: "Child dentistry"
    },
    {
      title: "Dental implants",
      text: "A natural-looking replacement for a lost tooth with minimal damage to the teeth beside it. Our implant specialists handle complex cases too.",
      image: "service-implants.jpg",
      alt: "A dental implant with a ceramic crown",
      cta: "Ask about implants",
      bookAs: "Dental implants"
    },
    {
      title: "Braces and aligners",
      text: "Crooked teeth are very treatable. Choose traditional braces, clear aligners or a combination of both, planned for comfort and results.",
      image: "service-braces.jpg",
      alt: "Crooked teeth with braces on one side and a straight smile on the other",
      cta: "Plan your smile",
      bookAs: "Braces and aligners"
    },
    {
      title: "Routine dental procedures",
      text: "Root canals, cleaning, bleaching, extractions and preventive care, all provided by specialised dental professionals.",
      image: "service-routine.jpg",
      alt: "Illustration of root canal treatment on a row of teeth",
      cta: "Book a check-up",
      bookAs: "Root canal and crowns"
    }
  ],
  alsoLabel: "Also:",
  also: ["Metal-free crowns", "Scaling and polishing", "Teeth whitening", "Wisdom tooth removal", "Gum surgery"],
  firstBookingOption: "Check-up or not sure yet",
  extraBookingOptions: ["Teeth cleaning and whitening"]
};
