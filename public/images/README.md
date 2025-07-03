# Images Folder Structure

This folder contains all the images used in the portfolio website.

## Folder Structure:

### `/profile/`
- `avatar.jpg` - Main profile picture used in navigation and about page
- `hero.jpg` - Large hero image for the about page

### `/projects/`
- `project-1.jpg` - E-Commerce Platform screenshot
- `project-2.jpg` - Task Management App screenshot
- `project-3.jpg` - Data Visualization Dashboard screenshot
- `project-4.jpg` - Mobile Banking App screenshot
- `project-5.jpg` - AI Chat Assistant screenshot
- `project-6.jpg` - Portfolio Website screenshot

### `/companies/`
- `techcorp.jpg` - TechCorp Solutions logo
- `digital-innovations.jpg` - Digital Innovations Inc logo
- `startupxyz.jpg` - StartupXYZ logo
- `google.jpg` - Google logo
- `microsoft.jpg` - Microsoft logo
- `netflix.jpg` - Netflix logo

### `/education/`
- `stanford.jpg` - Stanford University logo
- `berkeley.jpg` - UC Berkeley logo

## Image Guidelines:

1. **Profile Images**: 400x400px, square format, high quality
2. **Project Screenshots**: 600x400px, 3:2 aspect ratio
3. **Company Logos**: 100x100px, square format
4. **Education Logos**: 100x100px, square format

## Recommended Image Formats:
- Use `.jpg` for photographs and complex images
- Use `.png` for logos with transparency
- Use `.webp` for better compression (modern browsers)

## Optimization:
- Compress images to reduce file size
- Use appropriate resolution for web display
- Consider using responsive images for different screen sizes

## Usage:
To use these images in your components, import them like this:
```javascript
// For direct usage
<img src="/images/profile/avatar.jpg" alt="Profile" />

// Or use the constants file for better organization
import { IMAGES, getImageSrc } from '../constants/images';
<img src={getImageSrc(IMAGES.profile.avatar, IMAGES.fallback.profile)} alt="Profile" />
```