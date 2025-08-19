import banner1 from '../../public/images/banners/contact3.jpg';
import banner2 from '../../public/images/banners/contact4.jpg';
import banner3 from '../../public/images/banners/contact5.jpg';
import banner4 from '../../public/images/banners/contact2.png';
import image1 from '../../public/images/gallery/bottom1.jpg';
import image2 from '../../public/images/gallery/bottom2.jpg';
import image3 from '../../public/images/gallery/left1.jpg';
import image4 from '../../public/images/gallery/left2.jpg';
import image5 from '../../public/images/gallery/right1.jpg';
import image6 from '../../public/images/gallery/right2.jpg';
import image7 from '../../public/images/gallery/middle1.jpg';

// Categories for filtering
export const galleryCategories = [
    {id: 1, term: "Service"},
    {id: 2, term: "Night Vigil"},
    {id: 3, term: "Events"},
    {id: 4, term: "Clergy"},
    {id: 5, term: "Choir"},
    {id: 6, term: "Baptism"}
];

// Media type toggle
export const searchToggle = [
    {id: 1, term: "Images"},
    {id: 2, term: "Videos"}
];

// Gallery data with categories and media types
export const galleryData = [
    // Service (4 images, 1 video)
    {id: 1, src: banner1, category: "Service", type: "image", alt: "Sunday service congregation"},
    {id: 2, src: image1, category: "Service", type: "image", alt: "Worship team leading"},
    {id: 3, src: image2, category: "Service", type: "image", alt: "Pastor preaching"},
    {id: 4, src: image3, thumbnail: image3, category: "Service", type: "video", alt: "Full service recording", isVideo: true, youtubeId: "dQw4w9WgXcQ"},
    
    // Night Vigil (3 images, 2 videos)
    {id: 5, src: banner2, category: "Night Vigil", type: "image", alt: "Overnight prayer session"},
    {id: 6, src: image4, category: "Night Vigil", type: "image", alt: "Prayer warriors"},
    {id: 7, src: image5, thumbnail: image5, category: "Night Vigil", type: "video", alt: "Testimony sharing", isVideo: true, youtubeId: "dQw4w9WgXcQ"},
    {id: 8, src: image6, thumbnail: image6, category: "Night Vigil", type: "video", alt: "Midnight worship", isVideo: true, youtubeId: "dQw4w9WgXcQ"},
    {id: 9, src: image7, category: "Night Vigil", type: "image", alt: "Bible study"},
    
    // Events (3 images, 1 video)
    {id: 10, src: banner3, category: "Events", type: "image", alt: "Church anniversary"},
    {id: 11, src: image1, category: "Events", type: "image", alt: "Community outreach"},
    {id: 12, src: image2, thumbnail: image2, category: "Events", type: "video", alt: "Christmas celebration", isVideo: true, youtubeId: "dQw4w9WgXcQ"},
    {id: 13, src: image3, category: "Events", type: "image", alt: "Youth conference"},
    
    // Clergy (3 images)
    {id: 14, src: banner4, category: "Clergy", type: "image", alt: "Bishop and pastors"},
    {id: 15, src: image4, category: "Clergy", type: "image", alt: "Deacons meeting"},
    {id: 16, src: image5, category: "Clergy", type: "image", alt: "Leadership retreat"},
    
    // Choir (3 images, 1 video)
    {id: 17, src: image6, category: "Choir", type: "image", alt: "Choir performance"},
    {id: 18, src: image7, category: "Choir", type: "image", alt: "Choir rehearsal"},
    {id: 19, src: image1, thumbnail: image1, category: "Choir", type: "video", alt: "Choir special number", isVideo: true, youtubeId: "dQw4w9WgXcQ"},
    {id: 20, src: image2, category: "Choir", type: "image", alt: "Choir uniforms"},
    
    // Baptism (3 images, 1 video)
    {id: 21, src: image3, category: "Baptism", type: "image", alt: "Baptism ceremony"},
    {id: 22, src: image4, category: "Baptism", type: "image", alt: "New converts"},
    {id: 23, src: image5, thumbnail: image5, category: "Baptism", type: "video", alt: "Full baptism service", isVideo: true, youtubeId: "dQw4w9WgXcQ"},
    {id: 24, src: image6, category: "Baptism", type: "image", alt: "Baptism preparation"}
];

// Mock video data (replace with your actual YouTube video IDs)
export const videoData = {
    4: { youtubeId: "dQw4w9WgXcQ", title: "Sunday Service Full Recording" },
    7: { youtubeId: "dQw4w9WgXcQ", title: "Night Vigil Testimonies" },
    8: { youtubeId: "dQw4w9WgXcQ", title: "Midnight Worship Session" },
    12: { youtubeId: "dQw4w9WgXcQ", title: "Christmas Celebration 2023" },
    19: { youtubeId: "dQw4w9WgXcQ", title: "Choir Special Performance" },
    23: { youtubeId: "dQw4w9WgXcQ", title: "Baptism Service" }
};

/*

When creating a backend database for your church gallery, you'll want to design a schema that accommodates both images and videos while supporting all the filtering and display features you've implemented. Here's a comprehensive database schema recommendation:

Core Gallery Table Fields
Field Name	Type	Description
id	UUID/String	Unique identifier
media_type	Enum('image', 'video')	Image or video
file_path	String (URL)	Path to stored file
thumbnail_path	String (URL)	Path to thumbnail (for videos)
title	String	Short title/description
description	Text	Longer description
alt_text	String	Accessibility text
category_id	Foreign Key	Links to categories table
youtube_id	String (Nullable)	For videos only
upload_date	DateTime	When added to system
event_date	DateTime (Nullable)	When photo/video was taken
is_featured	Boolean	For highlighting special content
status	Enum('active', 'archived')	Visibility control
Categories Table (For Filtering)
Field Name	Type	Description
id	UUID/String	Primary key
name	String	e.g., "Service", "Baptism"
slug	String	URL-friendly version of name
Additional Recommended Tables
Tags Table (For advanced filtering):

javascript
{
  id: String,
  name: String  // e.g., "worship", "sermon", "communion"
}
Gallery_Tags Junction Table (Many-to-many relationship):

javascript
{
  gallery_item_id: String,  // References gallery.id
  tag_id: String           // References tags.id
}
User Uploads Table (If allowing congregants to submit):

javascript
{
  id: String,
  user_id: String,       // Who uploaded
  gallery_item_id: String, // What they uploaded
  approval_status: Enum('pending', 'approved', 'rejected'),
  uploaded_at: DateTime
}
Example Document (NoSQL) or Row (SQL)
For a NoSQL database like MongoDB:

javascript
{
  _id: "65a1bc...",
  media_type: "video",
  file_path: "/uploads/videos/service-2024-01.mp4",
  thumbnail_path: "/uploads/thumbnails/service-2024-01.jpg",
  title: "Sunday Morning Service",
  description: "Full worship service from January 2024",
  alt_text: "Pastor preaching with choir in background",
  category: "65a1bd...", // Reference to Categories collection
  youtube_id: "dQw4w9WgXcQ",
  tags: ["worship", "sermon", "choir"],
  upload_date: ISODate("2024-01-15T10:00:00Z"),
  event_date: ISODate("2024-01-14T08:00:00Z"),
  is_featured: true,
  status: "active"
}
*/