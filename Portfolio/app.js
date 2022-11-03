
// need to make project pics with an on click listener and take them to the projects page for that specific project and expand the description

// need to make descriptions (p) show/hide. Toggle???

// how to go to the top of the page when user clicks on section in nav bar

//need to make hide / show for project descriptions

// ------------------------- Home Page ------------------------- //

const goToHome = () => {
  $('.resume-page').hide()
  $('.projects-page').hide()
  $('.contact-page').hide()
  $('.home-page').show()
}

const goToResume = () => {
  $('.home-page').hide()
  $('.projects-page').hide()
  $('.contact-page').hide()
  $('.resume-page').show()
}

const goToProjects = () => {
  $('.home-page').hide()
  $('.resume-page').hide()
  $('.contact-page').hide()
  $('.projects-page').show()
}

const goToContact = () => {
  $('.home-page').hide()
  $('.resume-page').hide()
  $('.projects-page').hide()
  $('.contact-page').show()
}


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


// ----------------------- Dark / Light Mode ----------------------- //


const toggleLightDark = () => {
// trying to change dark mode icon to sunny when in dark mode.

  $('#dark-btn').children().toggleClass('dark-mode')
  $('html').toggleClass('dark-mode')
  $('header').toggleClass('dark-mode')
  $('footer').toggleClass('dark-mode')
  $('.profile-pic').toggleClass('dark-mode')
  $('.project-pic').toggleClass('dark-mode')
  $('.resume-title').toggleClass('dark-mode')
  $('.project-card').toggleClass('dark-mode')
  $('input').toggleClass('dark-mode')
  $('textarea').toggleClass('dark-mode')
  $('.projects-page a').toggleClass('dark-mode')
}


$(() => {

// Home Page //
$('.resume-page').hide()
$('.projects-page').hide()
$('.contact-page').hide()

$('.home-link').on('click', goToHome);
$('.resume-link').on('click', goToResume);
$('.projects-link').on('click', goToProjects);
$('.contact-link').on('click', goToContact);


// Resume Page //
$('.work-text').hide();

$('.work-title').on('click', seeWorkHistory);
$('.edu-title').on('click', seeEduHistory);
$('.qual-title').on('click', seeCertifications);
$('.skill-title').on('click', seeSkills);

// Projects Page //


// Dark Mode //
$('#dark-btn').on('click', toggleLightDark);


})
