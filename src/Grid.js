import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Row, Col, Card } from 'antd';

const Grid = () => {
  // Define breakpoints for mobile and desktop screens
  const isMobile = useMediaQuery({ maxWidth: 767 });

  // Define video sources for each category (replace with your video URLs)
  const categories = [
    {
      title: 'Most Popular',
      videos: [
        'https://example.com/popular1.mp4',
        'https://example.com/popular2.mp4',
        'https://example.com/popular3.mp4',
        // Add more videos as needed
      ],
    },
    {
      title: 'Continue Playing',
      videos: [
        'https://example.com/continue1.mp4',
        'https://example.com/continue2.mp4',
        'https://example.com/continue3.mp4',
        // Add more videos as needed
      ],
    },
    {
      title: 'New Release',
      videos: [
        'https://example.com/new1.mp4',
        'https://example.com/new2.mp4',
        'https://example.com/new3.mp4',
        // Add more videos as needed
      ],
    },
  ];

  // Render a 3x3 grid of video elements for each category
  return (
    <div>
      {categories.map((category, categoryIndex) => (
        <div key={categoryIndex} style={{ marginBottom: '16px' }}>
          <h2>{category.title}</h2>
          <Row gutter={16}>
            {category.videos.map((source, index) => (
              <Col key={index} xs={24} sm={12} md={8} lg={8} xl={8} style={{ marginBottom: '16px' }}>
                <Card
                  title={`Video ${index + 1}`}
                  bordered={false}
                  style={{ width: '100%', borderRadius: '8px' }}
                >
                  <video
                    controls
                    width="100%"
                    height={isMobile ? 'auto' : '200px'}
                    style={{ borderRadius: '8px' }}
                  >
                    <source src={source} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </div>
  );
};

export default Grid;
