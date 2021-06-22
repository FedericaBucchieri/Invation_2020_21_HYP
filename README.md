### Hypermedia Applications Course Project

#### Politecnico di Milano - a.y. 2020/2021

# Introduction

This repository contains the project work made by the authors listed in the end of this document for the Hypermedia Applications course held by prof. Franca Garzotto in Politecnico di Milano, academic year 2020/2021. The following sections are aimed at introducing the used terminology and a description of the used technologies.

## INVATION 🚀

Invation is an ICT company with a special eye on the Future. The name of the company is related to the union of Innovation and Invention, two words that already communicate the value proposition of our company. We propose "Visions": a collection of thematic guided tours across different innovative digital products. Developed as an interactive itinerary, each Vision is a set of Invations, bringing the user to explore new solution related to the theme chosen.

### Terminology

Developing the Company concept, we played with the name of the three most important entities required by the project.

| Original term | Invation Term   | description                                                                            |
| ------------- | --------------- | -------------------------------------------------------------------------------------- |
| Area          | **VISION**      | Interactive itinerary based on a chosen theme, created as a set of innovative products |
| Product       | **INVATION**    | Innovative inventions and ideas to shape a new concrete concept of future              |
| People        | **INVATIONERS** | Employees of the company                                                               |

# Technical Specification

## Overall architecture
![Invation Architecture 3 tiers](/static/documentation/Invaiton-Architecture.png) 

The architecture above describes a classical **three tiers** architecture. In this section, this architecture is described in more detail

## Server and DB technologies used

With the aim of having our application accessible online, we developed a simple web server using **NodeJS with Express**, as recommended. In particular we created a server middleware represented by the _'api.js'_ file that acts as request handler. Our database instead, is implemented with the use of **PostgreSQL** with the help of **Sequelize** for ORM in NodeJS. **Axios** was used to handle the HTTP requests.

## Components development

The folder components is divided in the following subfolders:

- baseElements: it contains the base components that are used in several pages that don't own a semantic relationship
- contacts: it contains the components used to deal with the contacts references in the contact us page and inside the footer
- decoration: it contains the components that have a mere purpose of improving the look and feel of the website
- footer: it contains all the components used exclusively inside the footer
- invation: it contains all the components used exclusively inside the invation pages
- invationer: it contains all the components used exclusively inside the invationer pages
- theHeader: it contains all the components used exclusively inside the header
- vision: it contains all the components used exclusively inside the vision pages

and the following components that are instantiated only one time inside the default layout:

- TheHeader: the header of the website
- TheChat: the component used to manage the chatbot functions
- TheFooter: the footer of the website

Now we present all the components inside each folder:

## Plugins

- Chatbot mmcc --> store used only for this component. This component is working thanks to mmcc, Multi Modal Chatbot Creator, a tool created by i3Lab in Politecnico di Milano. The state diagram of the implemented chatbot is the following.
 
![Chatbot state diagram](/static/documentation/Invaiton-Chatbot.png)


## Framework usage

- Links:
  - we leveraged the power of the nuxt-links together with the convenient structuring of the pages folder to make the routing very easy to be done;
  - the <a> markup has been used only for structural links;
- Components names and division for reusability:
  - every component that is instantiated only one time inside the whole website (TheHeader, TheChat, TheFooter) start with "The";
  - the compound names of the components are organized in order to go from the most generic concept to the least (i.e. InvationerContactList);
- Props for data and slots for html:
  - we always used props in order to parametrize as much as possible every component so that they can achieve an excellent level of reusability, avoiding every possible type of hardcoded data;
  - only when needed we used slots to pass lines of html that would have been much more difficult to pass using props;
- Communication between components:
  - from parent to child: this is the most common communication we used that has been implemented with props;
  - Event Bus: we used the Bus to emit some custom events to enable the communication between components that are not linked with a child-parent relationship;
- Use of Async data:
  - we always used the async data function to retrieve information from the database to inject it inside the components;
- Shorthands for interpolation of attributes, directives, arguments and modifiers:
  - we always used shorthands to improve the readability of the code;
- Lifecycle hooks only used mounted sometimes:
  - when needed we exploited the power of the lifecycle hooks, in particular mounted() and created();
- Static:
  - the static folder has been mainly used for the storing of the images used inside the website to improve the performance;
- Layouts:
  - the default layout has been used to organize the general structure of all pages, that contain The Header, The Chat and the Footer;

## Deployment

The deployment were made using **Heroku** platform. The reader can find the developed site to:
https://invation-hypermedia2021.herokuapp.com/

# MuseX Group - our team 🧑🏻‍💻👩🏻‍💻👨🏼‍💻

The group is composed by three Computer Science bachelor students. The workload was splitted equally between each of us in order to give the chance to learn how the Nuxt and Vue frameworks works. Federica and Lorenzo already knew the basis of web programming thanks to Prof. Fraternali course "Technologie informatiche per il web", while Alessandro had to learn HTML, CSS and JS from scratch but he managed very quickly to catch up. Each one of us developed at least 3 pages with relative new and useful components. Concerning task performed singularly, more informations are provided in each member description.

#

### Member 1 - Lorenzo Cocchia

Email: lorenzo.cocchia@mail.polimi.it

Master Program: Human-Computer Interaction&Design

@EIT Digital Master School

#### Extra Contribution:

- Database instantiation and relationship development
- Chatbot implementation

#

### Member 2 - Federica Bucchieri

Email: federica.bucchieri@mail.polimi.it

Master Program: Human-Computer Interaction&Design

@EIT Digital Master School

#### Extra Contribution:

- Styling and CSS details
- Media content production (images)

#

### Member 3 - Alessandro Corsini

Email: alessandro.corsini@mail.polimi.it

Master Program: Human-Computer Interaction&Design

@EIT Digital Master School

#### Extra Contribution:

- Database population
- Chatbot implementation

#
