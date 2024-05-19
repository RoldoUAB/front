# RoldoCHAT Frontend

This is the frontend for the RoldoCHAT application, built with React. It provides the user interface for calculating optimal routes within a time restriction and ensuring return to a starting point.

## Table of Contents

- [What it Does](#what-it-does)
- [Technologies Used](#technologies-used)
- [Setup](#setup)
- [Challenges](#challenges)
- [Future Improvements](#future-improvements)

## What it Does

The frontend provides an intuitive user interface. It integrates with the backend to fetch and display the route details using Google Maps.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Axios**: HTTP client for making requests to the backend.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **Google Maps JavaScript API**: For map visualization and interaction.
- **Material-UI**: React component library for UI design.

## Setup

### Prerequisites

- Node.js 14+

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/RoldoUAB/front.git
    cd front
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Set up environment variables:
    ```bash
    cp .env.example .env
    # Edit .env file to add your Google Maps API key and backend API URL
    ```

4. Run the application:
    ```bash
    npm start
    ```

## Challenges

A significant challenge was selecting the right technologies and libraries to build a responsive and efficient user interface that integrates seamlessly with the backend and Google Maps APIs. We needed to ensure the app is intuitive and performs well even with complex route calculations.

## Future Improvements

- **Enhanced Map Interactivity**: Add more interactive features to the map, such as draggable routes and live traffic updates.
- **Performance Optimization**: Implement performance optimizations to handle larger datasets and more complex routes.
