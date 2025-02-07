# How to Change Versions of the Website

This guide explains how to change the version of the website and update the version details for your site.

## Steps to Update the Website Version

1. **Update the `version.json` File**
   - Navigate to the `version.json` file located in your GitHub repository (e.g., `EthanDupe.github.io`).
   - Update the version number and add any relevant changes.
   
   Example:
   ```json
   {
     "version": "2.2",
     "release_date": "2025-02-06",
     "changes": [
       "Fixed minor UI bugs",
       "Improved responsiveness on mobile devices",
       "Added new homepage section"
     ]
   }
   ```

2. **Update the Version in the HTML Header**
   - Open the main HTML file of the website (typically `index.html`).
   - In the `<header>` section, update the `data-version` attribute to the new version number.
   
   Example:
   ```html
   <header data-version="2.2">
   ```

3. **Push the Changes to GitHub**
   - Commit the changes to the `version.json` file and the HTML file.
   - Push the changes to the `main` branch of your GitHub repository.

4. **Ensure Version Checking Works**
   - After pushing the changes, make sure that the website's version-checking script (`version-check.js`) correctly fetches the updated `version.json` from GitHub.
   - The version-checking script compares the version on the website with the version in `version.json` and displays the appropriate notification (e.g., "Update Available" or "Up to Date").

## Notes

- Always update the `version.json` file before changing the version in the HTML header.
- If you are updating major features or fixing bugs, ensure that you document the changes in the `changes` array of `version.json`.

## Example of `version.json`:

Here’s an example of how your `version.json` should look:

```json
{
  "version": "2.2",
  "release_date": "2025-02-06",
  "changes": [
    "Fixed minor UI bugs",
    "Improved responsiveness on mobile devices",
    "Added new homepage section"
  ]
}
```

## Troubleshooting

- **No Version Update Notification**: If the notification doesn’t appear, double-check that the `version.json` file is correctly hosted and accessible from the raw URL, or make sure the website is actually on the updated version.
- **Incorrect Version Display**: Ensure that both the version in the HTML (`data-version="X.X"`) and the `version.json` file match correctly.

```

---
