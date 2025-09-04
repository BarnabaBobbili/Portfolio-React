import re
from playwright.sync_api import sync_playwright, expect

def run(playwright):
    browser = playwright.chromium.launch()
    page = browser.new_page()
    page.goto("http://127.0.0.1:8080/")

    # Wait for the main heading in the hero section to be visible
    hero_heading = page.locator('section h1').first
    expect(hero_heading).to_be_visible()

    # 1. Screenshot of initial view
    page.screenshot(path="jules-scratch/verification/01_initial_view.png")

    browser.close()

with sync_playwright() as playwright:
    run(playwright)
