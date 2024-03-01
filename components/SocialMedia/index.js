import React from 'react';

  export default function SocialMediaList(){
    const socialMediaLinks = [
        { name: 'Facebook', icon: 'fb.png', url: 'https://www.facebook.com/Codashop.IDofficial/?brand_redir=105062455244365' },
        { name: 'Twitter', icon: 'twit.jpeg', url: 'https://twitter.com/codashop_us' },
        { name: 'Instagram', icon: 'ig.png', url: 'https://www.instagram.com/codashop_us' },
        { name: 'Tiktok', icon: 'tik.png', url: 'https://www.tiktok.com/@codashop_us' },
      ];

    return (
        <div className="flex flex-row">
            {socialMediaLinks.map((item) => (
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                    <img
                        src={`/icon/${item.icon}`}
                        alt={`${item.name} icon`}
                        className="w-4 h-4 px-2 rounded-lg"

                    />
                </a>
            ))}
        </div>
  );
};