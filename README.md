# JSON-based Portfolio

Create your personal portfolio/online resume by just editing a simple JSON file.<br />
Copy it, add a language identifier at the end then you have a multi language portfolio effortless. <br /><br />
Project developed with [React](https://react.dev/) and [Tailwind CSS](https://v2.tailwindcss.com/docs).

## Table of Contents

- [JSON-based Portfolio](#json-based-portfolio)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Features](#features)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [License](#license)
  - [Acknowledgments](#acknowledgments)
  - [Support](#support)
  - [Frequently Asked Questions](#frequently-asked-questions)
  - [Related Projects](#related-projects)
  - [Project Status](#project-status)
  - [Roadmap](#roadmap)
  - [Changelog](#changelog)
  - [Authors](#authors)

## Introduction

This project started by personal interest when a new portfolio was needed. It had to be easier to maintain but at the same time not too complex that would justify a CMS setup since my personal portfolio / resume does not change very often. Ideally it wouldn't cost me a penny so it could be maintained online over the years.<br />
<br />
The solution was developing a stateless web site using the simplest frontend technology has to offer with all simplicity available: REACT - Tailwind CSS - JSON file.<br />
<br />
Project developed thinking on everyone out there who needs a new portfolio ASAP to showcase his/her resume online.

## Features

- Create a new portfolio by only modifying a single JSON
  file.
- Support multi languages just copying JSON file, changing its name then adding one line of code (see examples);
- Showcase your experiences and let visitor filter them by your technologies, the way you decided to display them;
- Portfolio fully responsive so your career looks well on every screen :)

## Getting Started

### Prerequisites

In order to build and run your project you need Node and NPM installed.

### Installation

Simply as that, once NPM is installed execute the following commands in your terminal:

```
npm install
npm run start
```

## Usage

Here's a summary of how each field in JSON file affects your portfolio:

- Header:
  - Logo: Created based on what you write in `header.logo`:
    - Single word values are displayed in bold;
    - Two-word values will have the first part in bold, the second is displayed normally;
    - Three-word values will have the first word in bold, the rest displayed normally;
    - Four-word values will have two words in bold, the rest displayed normally;
    - And so on...
  - Menu Links:
    - Mapped from `header.menu` array displaying given text then redirecting to the given link in a new tab;
  - Languages:
    - Each language uses a different JSON file and can be found with how file name ends (i.e. -en.json for english portfolio). This only part not 100% configurable via JSON file because you need to manually add a new link in `header.tsx`. This project comes with four languages as examples. You can remove, modify or add new ones based on what is provided;
  - Download button:
    - Button shown at the top right corner of the website. Configurable via `header.buttonCv` with text and link;
- Greetings (main photo and message/quote):
  - Picture: link provided from `greeting.picture`
  - Message: The message / quote placed at the right of the photo, found in `greeting.message`;
- About:
  - Title and Description that comes right your greeting section. Here you can give a title (`about.title`) and description (`about.description`) with whatever information you want. Very straight-forward;
- Values:
  - Cards shown right after About section. Developed thinking on what distinguish you from the others so you can add an icon (`values.cards.icon`), Title (`values.cards.title`) and Description (`values.cards.description`);
- Toolbox:
  - This section is a bit special since it lists every stack you've added on each job entry, **this is case-sensitive so be sure you're writing the exact same word when it's intended**. In order to populate it with categories and tags you have to add a new item in `experiences.entries.job.techStack`. Every different category and stack value is added here so it can filter your experience when such tag is clicked;
- Experiences:
  - Company:
    - You can add information regarding the company such as Logo, name (used for acessibility) then link;
  - Third Party:
    - If you were not working directly for that company and you want to precise it was a contract or add whichever other information you want below your company's logo you can do so by adding a **ThirdParty** section with a name (`thirdParty.name`), link (`thirdParty.link`), ribbon's color (`thirdParty.ribbonBgColor`), ribbon's text color (`thirdParty.ribbonFontColor`) and a description (`thirdParty.ribbonDescription`) that will preceed its company name;
  - Job:
    - Provide it with a title, duration and tech stacks (so it gets listed and filtered by Toolbox section);
- Footer:
  - Message:
    - One last message;
    - Social Media Icons with links;

## Contributing

Feel free by expanding this project, flag bugs and send your pullrequests!

## License

MIT License, free of charge. Credits are welcome but not required :) Profitez-en.

## Acknowledgments

Design based on several different snippets from Tailwind CSS and example pages provided by them.

## Support

Issues section in github;

## Frequently Asked Questions

No questions asked yet. Be the first :)

## Related Projects

My personal portfolio is 100% based on this project. [Take a look!](https://www.wiltonpelicari.com)

## Project Status

Project actively in development. New features has yet to come so follow this project by clicking on that little star! 💥

## Roadmap

New features yet to come:

- ~~Dark theme~~;
- Automatic browser language identifier;
- Projects section;
- Blog;
- ....
- _Your idea here_

## Changelog

- v 0.1.0 - MVP version.
- v 0.2.0 - Dark theme

## Authors

Wilton Peliçari
