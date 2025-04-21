import { useEffect, useState } from 'react';
import profilePic1 from '../assets/profile_pic1.jpeg';
import profilePic2 from '../assets/profile_pic_2.jpg';
import profilePic3 from '../assets/profile_pic_3.webp';

const WidgetCard = () => {
  useEffect(() => {
    // Create html link element to load poppins font.
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  const profiles = [
    {
      image: profilePic1,
      name: 'Krithika Rathi',
      degree: 'B.E. Mechanical Enginerring',
      country: 'India',
    },
    {
      image: profilePic2,
      name: 'Arjun Patel',
      degree: 'B.Tech Computer Science',
      country: 'India',
    },
    {
      image: profilePic3,
      name: 'Sara Ahmed',
      degree: 'MBA Marketing',
      country: 'UAE',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % profiles.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  const profile = profiles[currentIndex];

  return (
    <div
      style={{
        maxWidth: '300px',
        borderRadius: '20px',
        padding: '18px',
        fontFamily: "'Poppins', sans-serif",
        border: '1px solid black',
      }}
    >
      {/* Profile Cards */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <img
          src={profile.image}
          alt={profile.name}
          style={{ height: '50px', width: '50px', objectFit: 'cover', borderRadius: '50px' }}
        />
        <div>
          <p style={{ margin: '0px', fontSize: '14px', fontWeight: 'bold' }}>{profile.name}</p>
          <p style={{ margin: '0px', fontSize: '14px' }}>{profile.degree}</p>
          <p style={{ margin: '0px', fontSize: '14px' }}>{profile.country}</p>
        </div>
      </div>

      {/* Description */}
      <div>
        <p style={{ fontSize: '13px' }}>Chat with our Student ambassadors to know more about cambus life.</p>
      </div>
      <button
        style={{
          fontFamily: "'Poppins', sans-serif",
          width: '100%',
          backgroundColor: '#222222',
          padding: '10px',
          borderRadius: '10px',
          color: 'white',
          fontSize: '14px',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        Chat with a student
      </button>
    </div>
  );
};

export default WidgetCard;
