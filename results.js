// TESTIMONIALS
let testimonialsData = [
  {
    id: 0,
    name: "Giuliana Murakami",
    img: "assets/testimonials/Giuliana.jpg",
    job: "Lawyer and writer",
    linkedin: "https://linkedin.com/in/giuliana-murakami-14a52bb8",
    experience:
      "We worked together as managers of the research groups for the student organization LAJUPA, where we coordinated the research activities of over 80 law students",
    testimonial:
      "I have worked with Sergie in the management of research groups in LAJUPA. I soon noticed he was a born leader, not only by the brilliant solutions he presented as well as the kind way he treated others. He is an exemplary person, someone whom I would recommend to anyone.",
  },
  {
    id: 1,
    name: "Bernardo Pita",
    img: "assets/testimonials/Giuliana.jpg",
    job: "Performance Marketing Manager and designer",
    linkedin: "",
    experience:
      "I created his website and I developed a website for a client with him as the designer in the team",
    testimonial: "lorem Ipsum",
  },
];

let testimonialsArea = document.getElementById("testimonialsArea");

testimonialsData.reverse();
testimonialsData.forEach((testimonial) => {
  let testimonialImg = document.createElement("img");
  testimonialImg.setAttribute("src", testimonial.img);
  testimonialImg.classList.add("testimonial__image");

  let testimonialLeft = document.createElement("div");
  testimonialLeft.classList.add("testimonial__left");
  testimonialLeft.appendChild(testimonialImg);

  let testimonialName = document.createElement("h4");
  testimonialName.innerHTML = testimonial.name;
  testimonialName.classList.add("testimonial__name");

  let testimonialJob = document.createElement("p");
  testimonialJob.classList.add("testimonial__left");
  testimonialJob.appendChild(testimonialImg);

  let testimonialHeader = document.createElement("div");
  testimonialHeader.classList.add("testimonial__header");
  testimonialHeader.appendChild(testimonialName);
  testimonialHeader.appendChild(testimonialJob);

  let testimonialExperience = document.createElement("p");
  testimonialExperience.classList.add("testimonial__experience");
  testimonialExperience.innerHTML = testimonial.experience;

  let testimonialRight = document.createElement("div");
  testimonialRight.classList.add("testimonial__right");
  testimonialRight.appendChild(testimonialHeader);
  testimonialRight.appendChild(testimonialExperience);

  let testimonialUpper = document.createElement("div");
  testimonialUpper.classList.add("testimonial__upper");
  testimonialUpper.appendChild(testimonialLeft);
  testimonialUpper.appendChild(testimonialRight);

  let testimonialText = document.createElement("p");
  testimonialText.classList.add("testimonial__text");
  testimonialText.innerHTML = testimonial.testimonial;

  let testimonialLower = document.createElement("div");
  testimonialLower.classList.add("testimonial__lower");
  testimonialLower.appendChild(testimonialText);

  let testimonialCard = document.createElement("div");
  testimonialCard.classList.add("testimonial");
  testimonialCard.appendChild(testimonialUpper);
  testimonialCard.appendChild(testimonialLower);

  testimonialsArea.appendChild(testimonialCard);
});
