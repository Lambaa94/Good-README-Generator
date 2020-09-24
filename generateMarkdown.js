// function to generate markdown for README
function generateMarkdown(data){ 
return `# ${data.title} | [![License: ${data.license}](https://img.shields.io/badge/License-${data.license.split(" ").join("_")}-blue.svg)](https://opensource.org/licenses/${data.license.split(" ").join("_")})


## Description

${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Contributing](#contributing)
* [Tests]()

## Installations

${data.installation}

## Usage

${data.usage}

## Credits

${data.credits}

## License

This repo is under the ${data.license} License

## Contributing

${data.contributing}

## Tests

${data.test}

## Questions

If you have any questions please email me at ${data.email}. My link to GitHub is https://github.com/${data.name}



`;
}

module.exports = generateMarkdown;
