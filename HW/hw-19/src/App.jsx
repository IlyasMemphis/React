import React, { useState } from 'react';
import { Form, Input, Button, Card, Typography } from 'antd';
import './App.css';

const { Title } = Typography;

function App() {
  const [formData, setFormData] = useState({ name: '', description: '' });
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (values) => {
    setSubmittedData(values); // Обновление состояния с отправленными данными
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <Title level={2}>Форма с использованием Ant Design</Title>

      <Form
        layout="vertical"
        onFinish={handleSubmit} // Обработка отправки формы
        initialValues={formData} // Начальные значения формы
      >
        <Form.Item
          label="Имя"
          name="name"
          rules={[{ required: true, message: 'Пожалуйста, введите ваше имя!' }]} // Валидация
        >
          <Input placeholder="Введите ваше имя" />
        </Form.Item>

        <Form.Item
          label="Описание"
          name="description"
          rules={[{ required: true, message: 'Пожалуйста, введите описание!' }]} // Валидация
        >
          <Input placeholder="Введите описание" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Отправить
          </Button>
        </Form.Item>
      </Form>

      {submittedData && (
        <Card style={{ marginTop: '20px' }}>
          <Title level={4}>Отправленные данные:</Title>
          <p><strong>Имя:</strong> {submittedData.name}</p>
          <p><strong>Описание:</strong> {submittedData.description}</p>
        </Card>
      )}
    </div>
  );
}

export default App;
