/* ------------------------------------------------------------------
   CONTACT DETAILS  (edit here once, it updates everywhere on the site:
   header, hero, booking form, WhatsApp link, call button, footer,
   Google search data)
------------------------------------------------------------------- */
window.SITE = window.SITE || {};

SITE.contact = {
  name: "Malviya Dental Home",
  tagline: "Family & Child Dental Clinic",

  phoneDisplay: "+91 93538 60470",   // how it looks on the page
  phoneTel: "+919353860470",         // for the call link: + country code + number, no spaces
  whatsappNumber: "919353860470",    // country code + number, no + and no spaces
  email: "drrahulpandey94@gmail.com",

  // Shown on the page, one line per entry
  addressLines: [
    "E-2/13, First Floor,",
    "Malviya Nagar Market, opposite Subway,",
    "South Delhi, 110017"
  ],
  // Used for Google search data (not shown on the page)
  addressParts: {
    street: "E-2/13, First Floor, Malviya Nagar Market, Opp Subway",
    city: "New Delhi",
    region: "Delhi",
    postalCode: "110017",
    country: "IN"
  },
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Malviya+Dental+Home+E-2%2F13+Malviya+Nagar+New+Delhi+110017",

  // Google rating shown in the hero and reviews section.
  // Update these two numbers whenever you refresh the reviews.
  rating: { score: "5.0", count: 164, source: "Google" },

  // Optional. Example: "Mon to Sat, 10am to 7pm". Leave as "" to hide.
  hours: ""
};
