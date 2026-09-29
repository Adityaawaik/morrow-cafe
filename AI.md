# AI Usage

## Tools used

- ChatGPT

## What I used AI for

I used AI as a development assistant during the implementation of the
Morrow Café campaign experience.

I used it for:

- Reviewing the project requirements and breaking them into
  implementation tasks.
- Planning the React component structure and responsive page sections.
- Generating and refining JSX/Tailwind CSS implementation ideas.
- Helping structure the claim form and its validation states.
- Debugging React, Express, CORS, routing, and API communication
  issues.
- Reviewing deployment configuration for Vercel and Render.
- Improving error handling and user-facing feedback.
- Reviewing README and project documentation structure.

AI was used to support the implementation, not as a replacement for
reviewing or testing the final application.

## One useful thing AI helped with

One particularly useful contribution was helping connect the frontend
claim form to the Express backend.

The backend generates the claim code, returns it through the API, and
the frontend displays the returned value dynamically. This helped keep
the claim-code generation on the server instead of hardcoding a value in
the UI.

AI also helped identify the difference between frontend validation and
backend validation, so validation exists on both sides of the request.

## One thing AI got wrong or that I changed

During debugging, AI suggestions sometimes assumed that a request
failure was caused by a specific configuration issue before the
deployment logs had been checked.

For example, a browser error such as:

```text
Unexpected token '<', "<!DOCTYPE "... is not valid JSON
```

This happened when the frontend expects JSON but receives an HTML response,
often because the requested API route is incorrect or the server returns
a default error page.

I verified the actual API route, deployment configuration, response
type, and environment variables rather than accepting a suggested cause
without testing it.

I also adjusted implementation details where needed to match the actual
project structure and requirements.

# What I personally reviewed

I personally reviewed and tested:

- The final page layout and responsive behavior.
- The campaign copy and visual hierarchy.
- Form fields and validation behavior.
- The claim submission flow.
- Loading and error states.
- Backend API routing.
- Server-side validation.
- Dynamic claim-code generation.
- Copy-to-clipboard behavior.
- Frontend/backend environment variables.
- CORS configuration.
- Local development behavior.
- Production deployment configuration.
- The final code and project structure.
