// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [Testing](#testing)
  * [Questions](#questions)
  * [License](#license)
   
  ## Installation
  ${data.install}
  ## Usage
  ${data.usage}
  ## Contributions
  ${data.contributions}
  ## Testing
  ${data.test}
  ## Questions
  If you have any questions or feedback, contact me at ${data.email}
  My github profile is ${data.githubName}
  ## License
  ${data.license}

`;
}

module.exports = generateMarkdown;
