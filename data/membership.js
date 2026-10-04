/* ------------------------------------------------------------------
   RADIANT SMILE MEMBERSHIP
   Change a number here and every place that shows it updates,
   including the "worth" total.
------------------------------------------------------------------- */
window.SITE = window.SITE || {};

SITE.membership = {
  heading: "Radiant Smile Membership",
  fee: 1499,
  feeNote: "one-time",
  consultationValue: 500,        // free consultation is worth this much
  cleaningVisits: 3,             // number of free cleanings
  cleaningValuePerVisit: 1500,   // each cleaning is worth this much
  treatmentDiscountPct: 15,      // discount on other treatments
  whiteningDiscountPct: 50,      // discount on teeth whitening
  cta: "Join the membership",
  bookAs: "Radiant Smile Membership",
  images: {
    consultation: { file: "membership-consultation.jpg", alt: "A dentist reviewing a treatment plan with a patient" },
    cleaning: { file: "membership-cleaning.jpg", alt: "Teeth before and after professional cleaning" },
    whitening: { file: "membership-whitening.jpg", alt: "A smile before and after teeth whitening" }
  }
};
