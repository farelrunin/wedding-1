// Get guest name from URL query parameter
export const getGuestName = () => {
  const params = new URLSearchParams(window.location.search);
  return params.get('to') || 'Tamu Kami';
};

// Copy to clipboard with notification
export const copyToClipboard = async (text, onSuccess) => {
  try {
    await navigator.clipboard.writeText(text);
    if (onSuccess) onSuccess();
  } catch (err) {
    console.error('Failed to copy:', err);
  }
};

// Format currency for Indonesian use
export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  }).format(amount);
};

// Add event to calendar
export const addToCalendar = (eventTitle, startDate, endDate, location) => {
  const startTime = startDate.toISOString().replace(/-|:|\.\d+/g, '');
  const endTime = endDate.toISOString().replace(/-|:|\.\d+/g, '');
  
  const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventTitle)}&dates=${startTime}/${endTime}&location=${encodeURIComponent(location)}&details=Undangan pernikahan`;
  
  window.open(calendarUrl, '_blank');
};

// Open Google Maps
export const openGoogleMaps = (address) => {
  const mapsUrl = `https://maps.google.com/?q=${encodeURIComponent(address)}`;
  window.open(mapsUrl, '_blank');
};

// Generate WhatsApp message for sharing
export const generateWhatsAppShare = (invitationUrl, guestName) => {
  const message = `Assalamu'alaikum ${guestName}, undangan pernikahan kami telah siap. Klik link berikut: ${invitationUrl}`;
  return `https://wa.me/?text=${encodeURIComponent(message)}`;
};

// Scroll to section smoothly
export const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

// Check if image is in viewport
export const isInViewport = (element) => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.bottom >= 0
  );
};

// Lazy load image
export const lazyLoadImage = (imgElement) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        observer.unobserve(img);
      }
    });
  });
  observer.observe(imgElement);
};

// Format date for display
export const formatDate = (date) => {
  return new Intl.DateTimeFormat('id-ID', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(date));
};
