# Rust Tauri Boilerplate (Bun + JavaScript)

This is a high-performance, developer-friendly boilerplate for building cross-platform desktop applications using **Rust**, **Tauri v2**, and **Bun**.

## Features
- **Fast Development**: Powered by Bun for lightning-fast package management.
- **Modern Stack**: Vanilla JavaScript frontend and Rust backend.
- **Tauri v2**: Utilizing the latest Tauri version for improved performance and features.
- **Optimized Setup**: Pre-configured `.gitignore` and consolidated project structure.

## Quick Start

1. **Clone the repository**:
   ```bash
   git clone https://github.com/skdsam/rust-boilerplate.git my-app
   cd my-app
   ```

2. **Install dependencies**:
   ```bash
   bun install
   ```

3. **Run in development mode**:
   ```bash
   bun run tauri dev
   ```

4. **Build for production**:
   ```bash
   bun run tauri build
   ```

## Project Structure
- `src/`: Frontend JavaScript source code.
- `src-tauri/`: Rust backend source code and Tauri configuration.
- `index.html`: Main entry point for the frontend.
- `tauri.conf.json`: Tauri application configuration.

## Requirements
- [Rust](https://www.rust-lang.org/tools/install)
- [Bun](https://bun.sh/)
- [Tauri Dependencies](https://tauri.app/v1/guides/getting-started/prerequisites)

## License
MIT
