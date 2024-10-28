<!-- 2024-10-25 Lorem Ipsum Development Guide -->

> This is an article Recap. Its main goal is to work as a reference and logging to myself. It doesn't mean it won't be useful for you so you're welcome :)

---

# Lorem Ipsum Development Guide

## Introduction

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Features](#features)
5. [Conclusion](#conclusion)

## Getting Started

To begin, ensure you have the following prerequisites:

- Node.js installed
- A modern web browser
- Basic understanding of JavaScript

## Installation

Install the package using npm:

```bash
npm install lorem-ipsum-package
```

## Usage

Import the package into your project:

```javascript
import { loremIpsum } from 'lorem-ipsum-package'

function generateText() {
  const text = loremIpsum({ count: 5 })
  console.log(text)
}
```

## Features

- **Customizable Output:** Adjuste the number of words, sentences, or paragraphs.
- **Support for Multiple Languages:** Generate text in various languages.
- **Lightweight:** Minimal impact on bundle size.
