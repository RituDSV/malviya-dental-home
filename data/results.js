/* ------------------------------------------------------------------
   RESULTS (before and after cases)
   - layout: "pair" shows 2 photos side by side, "quad" shows 4 in a row
   - label is the bold part of the caption, caption is the rest
   Only publish cases where the patient has agreed.
------------------------------------------------------------------- */
window.SITE = window.SITE || {};

SITE.results = {
  intro: {
    heading: "Results from our chair.",
    text: "Two cases from the clinic, shown as they were treated."
  },
  cases: [
    {
      title: "Teeth cleaning",
      layout: "pair",
      items: [
        { image: "cleaning-before.jpg", alt: "Lower teeth with heavy tartar before cleaning", label: "Before", caption: "" },
        { image: "cleaning-after.jpg", alt: "Lower teeth after professional cleaning", label: "After", caption: "" }
      ]
    },
    {
      title: "Root canal treatment with a metal-free crown",
      layout: "quad",
      items: [
        { image: "rct-1-decay.jpg", alt: "A molar with deep decay", label: "The problem", caption: "A decayed molar" },
        { image: "rct-2-xray-before.jpg", alt: "X-ray of the tooth before root canal treatment", label: "X-ray", caption: "Before treatment" },
        { image: "rct-3-xray-after.jpg", alt: "X-ray of the tooth after the root canal is filled", label: "X-ray", caption: "After root canal" },
        { image: "rct-4-crown.jpg", alt: "The restored molar with a natural-looking metal-free crown", label: "The result", caption: "Metal-free crown" }
      ]
    }
  ]
};
