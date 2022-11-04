
// TODO //
// how to go to the top of the page when user clicks on section in nav bar

// ------------------------- NAV BAR ------------------------- //
// const mediaNavBar = window.matchMedia("(max-width: 1050px)")
//
// const hamburgerMenu = () => {
//   if (mediaNavBar.matches) {
//   }
// }


const showHideNavBar = () => {
  $('.hamburger-menu-items').slideToggle('slow')
}


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

const goToFirstProj = () => {
  goToProjects()
  $('#desc-text-2').hide()
  $('#desc-text-3').hide()

  $('#desc-text-1').show('slow')
}

const goToSecondProj = () => {
  goToProjects()
  $('#desc-text-1').hide()
  $('#desc-text-3').hide()

  $('#desc-text-2').show('slow')
}

const goToThirdProj = () => {
  goToProjects()
  $('#desc-text-1').hide()
  $('#desc-text-2').hide()

  $('#desc-text-3').show('slow')
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
const showDesc1 = () => {
  $('#desc-text-1').toggle()
}

const showDesc2 = () => {
  $('#desc-text-2').toggle()
}

const showDesc3 = () => {
  $('#desc-text-3').toggle()
}

const showDesc4 = () => {
  $('#desc-text-4').toggle()
}

const showDesc5 = () => {
  $('#desc-text-5').toggle()
}


// ------------------------- Contact Page ------------------------- //

// Probably nothing from this page..? //


// ----------------------- Dark / Light Mode ----------------------- //


const toggleLightDark = () => {
// trying to change dark mode icon to sunny when in dark mode.

  $('#dark-btn').children().toggleClass('dark-mode')
  $('html').toggleClass('dark-mode')
  $('body').toggleClass('dark-mode')
  $('header').toggleClass('dark-mode')
  $('footer').toggleClass('dark-mode')
  $('.profile-pic').toggleClass('dark-mode')
  $('.about-me-title').toggleClass('dark-mode')
  $('.project-pic').toggleClass('dark-mode')
  $('.resume-title').toggleClass('dark-mode')
  $('.project-card').toggleClass('dark-mode')
  $('input').toggleClass('dark-mode')
  $('textarea').toggleClass('dark-mode')
  $('.projects-page a').toggleClass('dark-mode')
  $('.hamburger-menu-items').toggleClass('dark-mode')


}

const wellPlayedGame = () => {
  $('.hidden-game').css('display', 'inherit')

}

const generateRandImg = () => {
  const sparkle = $('.random-image-game')
  let randX = Math.floor(Math.random() * 1350)
  let randY = Math.floor(Math.random() * 2150)

  sparkle.css( {"top": randY, "left": randX} )
}


$(() => {

generateRandImg()


// NAV BAR //
$('.hamburger-menu-items').hide()
$('#close-icon').hide()
$('#burger-icon').on('click', showHideNavBar)

// Home Page //
$('.resume-page').hide()
$('.projects-page').hide()
$('.contact-page').hide()

$('#desc-text-1').hide()
$('#desc-text-2').hide()
$('#desc-text-3').hide()
$('#desc-text-4').hide()
$('#desc-text-5').hide()

$('.home-link').on('click', goToHome);
$('.resume-link').on('click', goToResume);
$('.projects-link').on('click', goToProjects);
$('.contact-link').on('click', goToContact);

$('.recent-project-1').on('click', goToFirstProj);
$('.recent-project-2').on('click', goToSecondProj);
$('.recent-project-3').on('click', goToThirdProj);


// Resume Page //
$('.work-text').hide();

$('.work-title').on('click', seeWorkHistory);
$('.edu-title').on('click', seeEduHistory);
$('.qual-title').on('click', seeCertifications);
$('.skill-title').on('click', seeSkills);

// Projects Page //
$('#desc-1').on('click', showDesc1);
$('#desc-2').on('click', showDesc2);
$('#desc-3').on('click', showDesc3);
$('#desc-4').on('click', showDesc4);
$('#desc-5').on('click', showDesc5);


// Dark Mode //
$('#dark-btn').on('click', toggleLightDark);


// game //
$('.random-image-game').on('click', wellPlayedGame)
$('.close-icon').on('click', () => {
    $('.hidden-game').css('display', 'none')
    $('.random-image-game').css('display', 'none')
})

})
