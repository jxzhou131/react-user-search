# React User Search Application

This React application provides an autocomplete search feature using Material-UI's Autocomplete component to search and display user details fetched from the JSON Placeholder API. Users can search by name, and the application displays their formatted name and address.

## Features

- **Autocomplete Search**: Users can type into the search input and see suggestions that match their input, formatted as `{Last Name} {Suffix}, {First Name} (Title)`.
- **User Details Display**: Upon selecting a user, their name and address details (street, suite, and zipcode) are displayed below the search bar.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Material-UI**: A popular React UI framework that provides styled components and icons.
- **TypeScript**: A superset of JavaScript that adds static types.

## Setup and Installation

To get this project up and running on your local machine, follow these steps:

### Prerequisites

- Node.js (v14 or later recommended)
- npm (usually comes with Node.js)

### Installation

1. **Clone the repository:**
2. **Install NPM packages:**
```sh
npm install
```
3. **Start the development server:**
```sh
npm start
```

### Usage

Begin typing a name in the search bar to see live autocomplete suggestions. Click on a user name to view their detailed information displayed dynamically below the search bar.
