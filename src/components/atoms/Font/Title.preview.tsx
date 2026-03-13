import React from 'react';
import { Title } from './Title'
import { Icon } from '../Icon/Icon';
import { Button } from '../Button/Button';

const TitlePreview = () => {
  return (
    <div className="p-10 space-y-8 bg-da-bg1">
      <section>
        <h2 className="text-da-b4 text-da-t-discription mb-4 underline">1 Depth - Default</h2>
        <Title level={1}>
            Winning Tech 과제생성현황
        </Title>
      </section>

      <section>
        <h2 className="text-da-b4 text-da-t-discription mb-4 underline">2 Depth - With Back Button</h2>
        <Title 
          level={2} 
          as="h2"
          leftSlot={
            <Button variant="iconLine" aria-label="뒤로가기">
            <Icon name="arrow-left" size="md" />
            </Button>
          }
        >
          과제 등록 (30px)
        </Title>
      </section>

      <section>
        <h2 className="text-da-b4 text-da-t-discription mb-4 underline">3 Depth - With Icon</h2>
        <Title 
          level={3} 
          as="h3"
          leftSlot={
            <Icon name="bullet" size={18} tone="primary" />
          }
        >
          과제 프로파일 (20px)
        </Title>
      </section>

      <section>
        <h2 className="text-da-b4 text-da-t-discription mb-4 underline">4 ETC</h2>
        <Title 
          level={4} 
          as="div"
          leftSlot={
            <Icon name="attentionFill" size="md" tone="gray" />
          }
        >
            도움말 (16px)
        </Title>
      </section>

    </div>
  );
};

export default TitlePreview;