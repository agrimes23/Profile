
// need to make nav bar links clickable and use show() hide() functions with on click listeners
// need to make project pics with an on click listener and take them to the projects page for that specific project and expand the description

// need to make descriptions (p) show/hide. Toggle???

//need to make hide / show for project descriptions

// ------------------------- Home Page ------------------------- //


// ------------------------- Resume Page ------------------------- //


// might be able to loop slideUps
const seeWorkHistory = () => {
  $('.skills-text').slideUp()
  $('.edu-text').slideUp()
  $('.qual-certs-text').slideUp()
  $('.work-history-text').toggle('slow')
}

const seeEduHistory = () => {
  $('.work-history-text').slideUp()
  $('.skills-text').slideUp()
  $('.qual-certs-text').slideUp()
  $('.edu-text').toggle('slow')
}

const seeCertifications = () => {
  $('.work-history-text').slideUp()
  $('.edu-text').slideUp()
  $('.skills-text').slideUp()
  $('.qual-certs-text').toggle('slow')
}

const seeSkills = () => {
  $('.work-history-text').slideUp()
  $('.edu-text').slideUp()
  $('.qual-certs-text').slideUp()
  $('.skills-text').toggle('slow')
}

// ------------------------- Projects Page ------------------------- //



// ------------------------- Contact Page ------------------------- //

// Probably nothing from this page..? //

$(() => {

// Resume Page //
$('.work-text').hide();

$('.work-title').on('click', seeWorkHistory);
$('.edu-title').on('click', seeEduHistory);
$('.qual-title').on('click', seeCertifications);
$('.skill-title').on('click', seeSkills);

// Projects Page //


})
