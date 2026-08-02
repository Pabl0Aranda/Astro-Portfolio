# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.2.0] - 2026-08-03

### Added

- **Notion Headless CMS Integration**: Connected the Astro blog directly to a Notion database, allowing real-time publishing without pushing local markdown files or deploying manually.
- **Hybrid Content Rendering**: Unified `[...slug].astro` and `index.astro` to elegantly merge and render both remote `.mdx` files and remote Notion posts in the exact same feed, ordered chronologically.
- **Dynamic Table of Contents for Notion**: Integrated `marked` and `github-slugger` to automatically extract `H1/H2/H3` sections from Notion and inject anchor link IDs to populate the existing interactive Table of Contents.
- **AI Chatbot**: Added Gemini AI-powered chatbot assistant for the portfolio.

### Changed

- Promoted project version from `0.0.1` (Beta) to `1.0.0` (Production).
- Upgraded the codebase formatting universally using Prettier.
- Refactored Data Source querying logic for Notion to support the v5 SDK specification.

### Fixed

- Fixed visual flickering bugs during view transitions between themes and pages in the navigation flow.
- Resolved Notion API authentication and endpoint discrepancies regarding `database_id` vs `data_source_id`.
