### Hypermedia Application Course Project

#### Politecnico di Milano - a.y. 2020/2021

# Introduction

With the aim of facilitating the correction of our project, here we provide a preliminary overview of the designed company, presenting al the terminology used inside the website.

## INVATION 🚀

Invation is an ICT company with a special eye on the Future. The name of the company is related to the union of Innovation and Invention, two words that already communicate the value proposition of our company. We propose "Visions": a collection of thematic guided tours across different innovative digital products. Developed as an interactive itinerary, each Vision is a set of Invations, bringing the user to explore new solution related to the theme chosen.

### Terminology

Developing the Company concept, we played with the name of the three most important entities required by the project.

| Original term | Invation Term   | description                                                                            |
| ------------- | --------------- | -------------------------------------------------------------------------------------- |
| Area          | **VISION**      | Interactive itinerary based on a chosen theme, created as a set of innovative products |
| Product       | **INVATION**    | Innovative inventions and ideas to shape a new concrete concept of future              |
| People        | **INVATIONERS** | Employees of the company                                                               |

## Technical Documentation

### Server and DB technologies used

With the aim of having our application accessible online, we developed a simple web server using **NodeJS with Express**, as recommended. In particular we created a server middleware represented by the _'api.js'_ file that acts as request handler. Our database instead, is implemented with the use of **PostgreSQL** with the help of **Sequelize** for ORM in NodeJS.

### Components development

### Plugins

#### • Chatbot mmcc --> store used only for this

# Framework usage

- Routing (only nuxt-link used for page to page. <a> used only in structural links)
- Components names and division for reusability
- props for data and slots for html
- communication between components - from child to parent data: emit method
- Always asinc data (somethimes fetch)
- shorthands for interpolation of attributes, directives, arguments and modifiers
- lifecycle hooks only used mounted sometimes

### Lighthouse page evaluation

Here are reported the average grade obtained while performing a complete website evaluation using Lighthouse on Google DevTools.
Those scores however, may vary due to the behaviour of Lighhouse.

| #   | PAGE                        | PERFORMANCE | SEO    | BEST PRACTISES | ACCESSIBILITY |
| --- | --------------------------- | ----------- | ------ | -------------- | ------------- |
| 1   | Home page                   | 🟢 94       | 🟢 100 | 🟢 93          | 🟢 97         |
| 2   | About page                  | 🟢 92       | 🟢 100 | 🟢 93          | 🟢 97         |
| 3   | Contact us page             | 🟢 92       | 🟢 100 | 🟢 93          | 🟢 100        |
| 4   | All visions page            | 🟢 96       | 🟢 100 | 🟢 93          | 🟢 97         |
| 5   | All invationers page        |             | 🟢 100 | 🟢 92          | 🟢 92         |
| 6   | All invations page          | 🟢 90       | 🟢 100 | 🟢 93          | 🟢 91         |
| 7   | Single vision page          | 🟢 92       | 🟢 100 | 🟢 93          | 🟢 100        |
| 8   | Single invationer page      | 🟢 92       | 🟢 100 | 🟢 93          | 🟢 94         |
| 9   | Single invation page        | 🟢 97       | 🟢 100 | 🟢 93          | 🟢 100        |
| 10  | Invation by technology page | 🟢 92       | 🟢 100 | 🟢 93          | 🟢 97         |

## MuseX Group 🧑🏻‍💻👩🏻‍💻👨🏼‍💻

The group is composed by three Computer Science bachelor students. The workload was splitted equally between each of us in order to give the chance to learn how the Nuxt and Vue frameworks works. Federica and Lorenzo already knew the basis of web programming thanks to Prof. Fraternali course "Technologie informatiche per il web", while Alessandro had to learn HTML, CSS and JS from scratch but he managed very quickly to catch up. Each one of us developed at least 3 pages with relative new and useful components. Concerning task performed singularly, more informations are provided in each member description.

#### Member 1 - Lorenzo Cocchia

Email: lorenzo.cocchia@mail.polimi.it

Master Program: Human-Computer Interaction&Design

@EIT Digital Master School

#### Extra Contribution:

- Database instantiation and relationship development
- Chatbot implementation

#

#### Member 2 - Federica Bucchieri

Email: federica.bucchieri@mail.polimi.it

Master Program: Human-Computer Interaction&Design

@EIT Digital Master School

#### Extra Contribution:

- Styling and CSS details
- Media content production (images)

#

#### Member 3 - Alessandro Corsini

Email: alessandro.corsini@mail.polimi.it

Master Program: Human-Computer Interaction&Design

@EIT Digital Master School

#### Extra Contribution:

- Database population
- Chatbot implementation
