#!/bin/bash

# GEDCOM Explorer Fork - Deployment Helper Script
# This script helps prepare and deploy your family tree viewer

set -e  # Exit on error

echo "🌳 GEDCOM Explorer Fork - Deployment Helper"
echo "==========================================="
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Check if we're in the right directory
if [ ! -f "index.html" ] || [ ! -f "app.js" ]; then
    echo -e "${RED}Error: Must run this script from the gedcom-explorer-fork directory${NC}"
    exit 1
fi

# Function to check if encrypted data exists
check_encrypted_data() {
    if [ ! -f "gedcom-data.js" ]; then
        return 1  # File doesn't exist
    elif grep -q 'const ENCRYPTED_GEDCOM_DATA = "";' gedcom-data.js; then
        return 1  # Empty
    else
        return 0  # Has data
    fi
}

# Main menu
echo "What would you like to do?"
echo ""
echo "1) Check if encrypted data is embedded"
echo "2) Create deployment package (copy files to deploy/ folder)"
echo "3) Initialize Git repository"
echo "4) Deploy to GitHub Pages"
echo "5) Create Netlify deployment folder"
echo "6) Test locally (open in browser)"
echo "7) Verify deployment checklist"
echo "0) Exit"
echo ""
read -p "Enter choice [0-7]: " choice

case $choice in
    1)
        echo ""
        echo -e "${BLUE}Checking for encrypted data...${NC}"
        if check_encrypted_data; then
            echo -e "${GREEN}✓ Encrypted data found in gedcom-data.js${NC}"
            echo "Your site is ready for deployment!"
        else
            echo -e "${YELLOW}⚠ No encrypted data found in gedcom-data.js${NC}"
            echo ""
            echo "To add encrypted data:"
            echo "1. Open encrypt.html in your browser"
            echo "2. Upload your GEDCOM file and enter a password"
            echo "3. Copy the encrypted output"
            echo "4. Paste it into gedcom-data.js"
        fi
        ;;

    2)
        echo ""
        echo -e "${BLUE}Creating deployment package...${NC}"

        # Create deploy directory
        rm -rf deploy
        mkdir -p deploy

        # Copy required files
        cp index.html app.js crypto.js styles.css gedcom-data.js deploy/

        # Optionally copy README
        if [ -f "README.md" ]; then
            echo "Include README.md in deployment? (y/n)"
            read -p "> " include_readme
            if [ "$include_readme" = "y" ]; then
                cp README.md deploy/
            fi
        fi

        echo -e "${GREEN}✓ Deployment package created in ./deploy/${NC}"
        echo ""
        echo "Files ready for deployment:"
        ls -lh deploy/
        echo ""
        echo "You can now:"
        echo "- Upload the deploy/ folder to any static host"
        echo "- Use Netlify Drop: drag deploy/ folder to netlify.com/drop"
        ;;

    3)
        echo ""
        echo -e "${BLUE}Initializing Git repository...${NC}"

        if [ -d ".git" ]; then
            echo -e "${YELLOW}Git repository already exists${NC}"
        else
            git init
            echo -e "${GREEN}✓ Git repository initialized${NC}"
        fi

        # Create .gitignore if it doesn't exist
        if [ ! -f ".gitignore" ]; then
            cat > .gitignore << 'EOF'
# Don't commit these files
encrypt.html
test.ged
original.html
*.ged
.DS_Store
deploy/
node_modules/
EOF
            echo -e "${GREEN}✓ Created .gitignore${NC}"
        fi

        # Add files
        git add index.html app.js crypto.js styles.css gedcom-data.js README.md .gitignore

        echo ""
        echo -e "${GREEN}✓ Files staged for commit${NC}"
        echo ""
        echo "Next steps:"
        echo "1. git commit -m 'Initial commit'"
        echo "2. Create a repository on GitHub"
        echo "3. git remote add origin https://github.com/USERNAME/REPO.git"
        echo "4. git push -u origin main"
        ;;

    4)
        echo ""
        echo -e "${BLUE}GitHub Pages Deployment Guide${NC}"
        echo ""

        # Check if git is initialized
        if [ ! -d ".git" ]; then
            echo -e "${RED}Git not initialized. Run option 3 first.${NC}"
            exit 1
        fi

        # Check if encrypted data exists
        if ! check_encrypted_data; then
            echo -e "${RED}⚠ Warning: No encrypted data found in gedcom-data.js${NC}"
            read -p "Continue anyway? (y/n): " continue_deploy
            if [ "$continue_deploy" != "y" ]; then
                exit 0
            fi
        fi

        echo "Follow these steps:"
        echo ""
        echo "1. Create a new repository on GitHub"
        echo "   → Go to https://github.com/new"
        echo ""
        read -p "Press Enter when repository is created..."
        echo ""

        read -p "Enter your GitHub username: " gh_user
        read -p "Enter repository name: " gh_repo
        echo ""

        # Check if remote exists
        if git remote | grep -q origin; then
            echo -e "${YELLOW}Remote 'origin' already exists${NC}"
        else
            git remote add origin "https://github.com/$gh_user/$gh_repo.git"
            echo -e "${GREEN}✓ Remote added${NC}"
        fi

        # Check if there are commits
        if ! git log &> /dev/null; then
            echo "Creating initial commit..."
            git add index.html app.js crypto.js styles.css gedcom-data.js README.md
            git commit -m "Initial commit: GEDCOM Explorer with password protection"
        fi

        # Create main branch and push
        git branch -M main
        echo ""
        echo "Pushing to GitHub..."
        git push -u origin main

        echo ""
        echo -e "${GREEN}✓ Code pushed to GitHub!${NC}"
        echo ""
        echo "Final steps:"
        echo "1. Go to: https://github.com/$gh_user/$gh_repo/settings/pages"
        echo "2. Under 'Source', select branch 'main' and folder '/ (root)'"
        echo "3. Click 'Save'"
        echo "4. Wait 1-2 minutes for deployment"
        echo ""
        echo "Your site will be available at:"
        echo -e "${GREEN}https://$gh_user.github.io/$gh_repo/${NC}"
        ;;

    5)
        echo ""
        echo -e "${BLUE}Creating Netlify deployment folder...${NC}"

        rm -rf netlify-deploy
        mkdir -p netlify-deploy
        cp index.html app.js crypto.js styles.css gedcom-data.js netlify-deploy/

        echo -e "${GREEN}✓ Netlify deployment folder created${NC}"
        echo ""
        echo "Next steps:"
        echo "1. Go to: https://app.netlify.com/drop"
        echo "2. Drag the 'netlify-deploy' folder to the page"
        echo "3. You'll get a URL like: https://random-name.netlify.app"
        ;;

    6)
        echo ""
        echo -e "${BLUE}Opening in default browser...${NC}"

        if check_encrypted_data; then
            echo -e "${GREEN}Encrypted data found - password prompt should appear${NC}"
        else
            echo -e "${YELLOW}No encrypted data - file upload screen will appear${NC}"
        fi

        echo ""
        open index.html
        ;;

    7)
        echo ""
        echo -e "${BLUE}Pre-Deployment Checklist${NC}"
        echo "========================"
        echo ""

        # Check encrypted data
        if check_encrypted_data; then
            echo -e "${GREEN}✓${NC} Encrypted data found in gedcom-data.js"
        else
            echo -e "${RED}✗${NC} No encrypted data in gedcom-data.js"
        fi

        # Check required files
        for file in index.html app.js crypto.js styles.css gedcom-data.js; do
            if [ -f "$file" ]; then
                echo -e "${GREEN}✓${NC} $file exists"
            else
                echo -e "${RED}✗${NC} $file missing"
            fi
        done

        # Check for sensitive files that shouldn't be deployed
        echo ""
        echo "Files that should NOT be deployed:"
        for file in encrypt.html test.ged original.html; do
            if [ -f "$file" ]; then
                echo -e "${YELLOW}⚠${NC} $file exists (keep this local)"
            fi
        done

        # Check .gitignore
        echo ""
        if [ -f ".gitignore" ]; then
            echo -e "${GREEN}✓${NC} .gitignore exists"
        else
            echo -e "${YELLOW}⚠${NC} No .gitignore file"
        fi

        echo ""
        echo "Manual checks:"
        echo "- [ ] Tested locally with correct password"
        echo "- [ ] Tested locally with wrong password"
        echo "- [ ] Verified tree loads correctly"
        echo "- [ ] All features work (search, favorites, calendar)"
        ;;

    0)
        echo "Goodbye!"
        exit 0
        ;;

    *)
        echo -e "${RED}Invalid choice${NC}"
        exit 1
        ;;
esac

echo ""
echo -e "${GREEN}Done!${NC}"
