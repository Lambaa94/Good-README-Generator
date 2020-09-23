// function to generate markdown for README
function generateMarkdown(data){ 
return `# ${data.title} | https://img.shields.io/badge/license-${data.license}

## Description

${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)

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

    name: "name"
If you have any questions about testing please email me at ${data.email}. My github is ${data.name}



`;
}

module.exports = generateMarkdown;
