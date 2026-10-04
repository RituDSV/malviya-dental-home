/* ------------------------------------------------------------------
   DOCTORS  (add, remove or reorder people here)
   - lead: true  shows that person large at the top (use for one person)
   - photo: file name inside the images folder
   - bio: each entry is one paragraph
------------------------------------------------------------------- */
window.SITE = window.SITE || {};

SITE.doctors = {
  intro: {
    heading: "Meet your dentists.",
    text: "Four postgraduate specialists, trained at some of India's leading dental institutions."
  },
  list: [
    {
      lead: true,
      role: "Founder-Director",
      name: "Dr Rahul Pandey",
      quals: "BDS, MDS in Pediatric & Preventive Dentistry",
      photo: "doctor-rahul-pandey.jpg",
      alt: "Portrait of Dr Rahul Pandey",
      bio: [
        "Dr Pandey trained in dental surgery at KLE VK Institute of Dental Sciences in Belagavi, Karnataka, and completed his postgraduate degree at HNB Seema Dental College & Hospital in Rishikesh, Uttarakhand. He has six years of clinical practice.",
        "He was the university topper at HNB Garhwal Central University, with a gold medal in pediatric and preventive dentistry. His awards include Social Dentist of the Year 2022, Best Outgoing PG Student 2023 and Pedodontist of the Year 2023."
      ]
    },
    {
      name: "Dr Neha Chauhan",
      quals: "BDS, MDS in Pediatric & Preventive Dentistry",
      photo: "doctor-neha-chauhan.jpg",
      alt: "Portrait of Dr Neha Chauhan",
      bio: [
        "Six years of clinical practice, with both degrees from Maulana Azad Institute of Dental Sciences (Lok Nayak Hospital), New Delhi. Dr Neha delivers comprehensive treatment for young children with a skilled, gentle hand."
      ]
    },
    {
      name: "Dr Nikita",
      quals: "BDS, MDS in Prosthodontics, Maxillofacial Prosthetics & Oral Implantology",
      photo: "doctor-nikita.jpg",
      alt: "Portrait of Dr Nikita",
      bio: [
        "A qualified prosthodontist with a master's from Maulana Azad Institute of Dental Sciences, New Delhi. She keeps learning new techniques from world-renowned faculty and applies them with care, only where they truly benefit the patient."
      ]
    },
    {
      name: "Dr Nasreen Ansari",
      quals: "BDS, MDS in Periodontics & Oral Implantology",
      photo: "doctor-nasreen-ansari.jpg",
      alt: "Portrait of Dr Nasreen Ansari",
      bio: [
        "Postgraduate from Maulana Azad Institute of Dental Sciences, with rich experience in implant dentistry, periodontal micro-surgery and gum plastic surgery. A life member of the Indian Society of Periodontology and a speaker at national academic meetings."
      ]
    }
  ]
};
