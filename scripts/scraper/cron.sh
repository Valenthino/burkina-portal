#!/bin/bash

# Load environment variables
source .env

# Navigate to project root
cd "$(dirname "$0")/../.."

# Run the scraper
npm run scrape

# Log the execution with timestamp and status
echo "[$(date '+%Y-%m-%d %H:%M:%S')] Scraper execution completed with status $?" >> scraper.log 