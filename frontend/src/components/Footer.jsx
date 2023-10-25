import React, { useState, useEffect } from 'react';

function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer style={{ backgroundColor: '#000', color:"#fff", padding: '20px', textAlign: 'center' , marginTop:'40px' }}>
      <p style={{ margin: '0' }}>
        &copy; Aje Oluwasegun <span>{currentYear}</span>
      </p>
    </footer>
  );
}

export default Footer;
