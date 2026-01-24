# eRUM Drone Delivery Service Website Blueprint

## Overview

This document outlines the design, features, and implementation plan for the eRUM company website. eRUM is a drone delivery service, and the website will reflect its modern, efficient, and tech-forward identity. The site will be a single-page, responsive application that is visually engaging and provides a clear overview of the company's services. It will also feature a simulated, interactive "drone delivery app" to showcase the user experience.

## Design & Style

The visual design will be clean, professional, and bold to create a memorable first impression.

*   **Color Palette:** A modern and energetic palette using a deep, dark background, tech-inspired blues and greens, and a vibrant accent color for interactive elements. I will use modern color spaces like `oklch` for a wider color gamut.
*   **Typography:** A clean, sans-serif font (e.g., 'Inter' from Google Fonts) will be used for readability. Font sizes will be varied to create a clear visual hierarchy (large hero text, section headlines, body copy).
*   **Layout:** A responsive layout using CSS Grid and Flexbox to ensure the site works flawlessly on all devices.
*   **Visuals:**
    *   A subtle noise texture on the background to add a premium, tactile feel.
    *   High-quality, relevant (and placeholder) imagery of drones and cityscapes.
    *   Multi-layered drop shadows on UI elements like cards to create a sense of depth.
*   **Iconography:** Modern icons will be used to enhance navigation and comprehension.
*   **Interactivity:** Buttons and other interactive elements will have a "glow" effect on hover to provide clear visual feedback.

## Features

The website will be a single-page experience with the following sections:

1.  **Navigation Bar:** Sticky navigation for easy access to all sections of the page.
2.  **Hero Section:** A full-screen introduction with a catchy headline, a brief description of the service, and a primary call-to-action button.
3.  **About Us Section:** An overview of eRUM's mission and values.
4.  **Services Section:** Cards detailing the different delivery services offered (e.g., "Express Delivery," "Scheduled Delivery," "Medical Transport").
5.  **Authorization Section:** A section where users can enter an authorization code to access the live delivery tracker.
6.  **Drone Delivery App Simulation:** An interactive web component that simulates the drone tracking experience for a user. This will be the centerpiece of the user engagement strategy.
7.  **Contact Section:** A simple form for inquiries.
8.  **Footer:** With links to social media and copyright information.

## Current Action Plan

This section outlines the plan for the changes just implemented.

1.  **Update `index.html`:** Added a new `<section>` with the ID `auth` to house the authorization form. This section includes a text input for the code and an "Authorize" button. The main navigation was also updated to include a link to this new section.
2.  **Update `style.css`:** Added styling for the `#auth` section and the form elements within it. This includes styling for the input field (including focus states) and the layout of the form, ensuring it is responsive.
3.  **Update `blueprint.md`:** Updated the features list to include the new "Authorization Section" and documented the implementation details in the action plan.
