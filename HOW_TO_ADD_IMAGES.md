# How to Add Images to Your Portfolio

## 📸 Achievement Images

### Step 1: Prepare Your Images
- **Format:** JPG, PNG, or WebP
- **Recommended Size:** 800x600 pixels (4:3 aspect ratio)
- **File Size:** Keep under 500KB for fast loading

### Step 2: Place Images in Public Folder
1. Navigate to: `ml-researcher-portfolio/public/achievements/`
2. Add your images with these names:
   - `award1.jpg` - For your first achievement
   - `award2.jpg` - For your second achievement
   - `award3.jpg` - For your third achievement

### Step 3: Update Achievement Data (Optional)
If you want to add more achievements or change image names:

1. Open: `components/Achievements.tsx`
2. Find the `achievements` array
3. Update or add entries:

```typescript
{
  title: "Your Award Title",
  organization: "Organization Name",
  date: "2024",
  description: "Description of the award...",
  icon: Trophy,  // or Award, Star, Medal
  color: "text-yellow-500",  // color for the icon
  image: "/achievements/your-image.jpg"  // ← Your image path
}
```

---

## 📄 CV File

### Step 1: Prepare Your CV
- **Format:** PDF only
- **Filename:** Must be exactly `Rusab_Sarmun_CV.pdf`
- **File Size:** Keep under 5MB

### Step 2: Place in Public Folder
1. Navigate to: `ml-researcher-portfolio/public/cv/`
2. Add your CV file named: `Rusab_Sarmun_CV.pdf`

The download button in the Hero section will automatically work!

---

## 🖼️ Profile Image (Already Added)

Your profile image is at: `public/Rusab_Image.png`

To update it:
1. Replace the file at that location
2. Keep the same filename OR
3. Update the path in `components/Hero.tsx` (line 98)

---

## 🤖 Robotics Project Images (Optional)

Currently robotics cards use placeholder backgrounds. To add real images:

1. Create folder: `public/robotics/`
2. Add your robot images
3. Update `components/Robotics.tsx`:

```typescript
{
  title: "Your Robot",
  description: "Description...",
  icon: Bot,
  tech: ["ROS", "Python"],
  image: "/robotics/robot1.jpg"  // ← Add this line
}
```

---

## 📊 Publication Images (Optional)

Publications don't need images, but if you want to add paper thumbnails:

1. Create folder: `public/publications/`
2. Add thumbnail images
3. Update `data/publications.ts`:

```typescript
{
  id: "1",
  title: "Your Paper",
  // ... other fields ...
  image: "/publications/paper1-thumbnail.jpg"  // ← Add this
}
```

---

## 🎨 Image Optimization Tips

### For Best Performance:

1. **Compress Images:**
   - Use [TinyPNG](https://tinypng.com/) or [Squoosh](https://squoosh.app/)
   - Aim for < 200KB per image

2. **Resize Before Upload:**
   - Achievements: 800x600px
   - Profile: 600x750px (portrait)
   - Robotics: 800x600px
   - Thumbnails: 400x300px

3. **Use WebP Format (Optional):**
   - Better compression than JPG
   - Just change extension: `.webp`
   - Next.js handles it automatically

---

## 🔄 Adding More Achievements

Want to add a 4th, 5th, or more achievements?

1. Add images: `award4.jpg`, `award5.jpg`, etc.
2. Edit `components/Achievements.tsx`
3. Add to the array:

```typescript
const achievements = [
  // ... existing awards ...
  {
    title: "New Award",
    organization: "Organization",
    date: "2025",
    description: "Description...",
    icon: Medal,  // Choose: Trophy, Award, Star, Medal
    color: "text-green-500",  // Any Tailwind color
    image: "/achievements/award4.jpg"
  }
];
```

The component will automatically display it in the grid!

---

## ✅ Quick Checklist

After adding images, verify:

- [ ] Images are in `public/` directory (not `components/` or elsewhere)
- [ ] Filenames match exactly (case-sensitive)
- [ ] Images are web-optimized (< 500KB each)
- [ ] CV is named exactly `Rusab_Sarmun_CV.pdf`
- [ ] Image paths start with `/` (e.g., `/achievements/award1.jpg`)

---

## 🐛 Troubleshooting

### Images Not Showing?

**Check:**
1. File is in correct `public/` subfolder
2. Filename matches exactly (including extension)
3. Path starts with `/` in code
4. Clear browser cache (Ctrl+Shift+R)
5. Check browser console for errors

### CV Not Downloading?

**Check:**
1. File is in `public/cv/` folder
2. Named exactly: `Rusab_Sarmun_CV.pdf`
3. File is actually a PDF (not renamed .doc)

---

## 📁 Final Folder Structure

```
public/
├── cv/
│   └── Rusab_Sarmun_CV.pdf          ← Your CV
├── achievements/
│   ├── award1.jpg                    ← Achievement images
│   ├── award2.jpg
│   └── award3.jpg
├── robotics/                         ← Optional
│   ├── robot1.jpg
│   └── robot2.jpg
├── publications/                     ← Optional
│   └── paper-thumbnails.jpg
└── Rusab_Image.png                   ← Your profile photo
```

That's it! Your images will automatically appear on the website. 🎉
