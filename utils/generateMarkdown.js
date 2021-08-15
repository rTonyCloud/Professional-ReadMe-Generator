// TODO: Create a function that returns a licenses badge based on which licenses is passed in

//  If there is no licenses, return an empty string
renderLicenseBadge = (licenses) => {
switch (licenses) {
  case "MIT":
    return `![MIT](https://img.shields.io/badge/license-MIT-red.svg)`;
  break;
  case "APACHE 2.0":
    return `![APACHE 2.0](https://img.shields.io/badge/license-APACHE-blue.svg)`;
    break;
  case "GPL 3.0":
    return `![GPL 3.0](https://img.shields.io/badge/license-GPL%203.0-green.svg)`
    break;
  case "BSD 3.0":
    return `![BSD 3.0](https://img.shields.io/badge/license-BSD%203.0-yellow.svg)`
    break;
  case "n/a":
  default: 
   return "";
  }
  
}


// TODO: Create a function that returns the licenses link
// If there is no licenses, return an empty string
renderLicenseLink = (licenses) => {
    // if (licenses = 'none') {
    //   return ''
    // }

    return `* [Licenses](#licenses)` 
  } 


// TODO: Create a function that returns the licenses section of README
// If there is no licenses, return an empty string
renderLicenseSection = (licenses) => {
  if (licenses = 'none') {
    return 'n/a' }
  else 
  return `## Licenses  
  This project is licenses under ${licenses} licenses.`
}


// TODO: Create a function to generate markdown for README
generateMarkdown = (data) => {
  return `# ${data.title}
  ${renderLicenseBadge(data.licenses)}


# Table of Content
* [Description](#description)
* [Installation](#installation)
${renderLicenseLink(data.licenses)}
* [Contributors](#contributors)
* [Questions](#questions)

## Repo Link
${data.link}

## Description 
${data.description}

## Installation
${data.installation}

## usage
${data.usage}

${renderLicenseSection(data.licenses)}

## languages
${data.languages}

## Contributors
${data.contributors}

## Questions
If you need to ask me any questions you can contact me at ${data.email}.\n\n you can view more of my work at [github](https://github.com/${data.github})
`

}

module.exports = generateMarkdown;