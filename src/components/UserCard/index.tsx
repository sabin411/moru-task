import React from 'react';

// packages
import { Button, Card, Form, Input, InputNumber } from 'antd';
import {
  HeartFilled,
  EditOutlined,
  MailOutlined,
  DeleteFilled,
  PhoneOutlined,
  HeartOutlined,
  GlobalOutlined,
} from '@ant-design/icons';

// components
import editModal from './editModal';

// types
import { UserCardDataProps, UserCardProps } from './types';

// styles
import './styles.css';

// constants
const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};

const tailLayout = {
  wrapperCol: { offset: 18 },
};

const validateMessages = {
  required: '${label} is required!',
  types: {
    name: '${label} is not a valid name!',
    email: '${label} is not a valid email!',
    phone: '${label} is not a valid phone number!',
    website: '${label} is not a valid website!',
  },
};

export default function UserCard({ data }: { data: UserCardProps }) {
  const { Meta } = Card;
  const { onDelete, onEdit } = data;
  const { Modal, setModalOpen } = editModal();
  const [isFavorite, setFavorite] = React.useState(data.liked);

  const onFinish = (values: { user: UserCardDataProps }) => {
    console.log(values.user);
    onEdit({ ...values.user, id: data.id });
    setModalOpen(false);
  };

  const handleHeartClick = () => {
    setFavorite(!isFavorite);
  };

  const handleEditBtnClick = () => {
    setModalOpen(true);
  };

  return (
    <div
      style={{
        width: '100%',
        maxWidth: '500px',
        marginInline: 'auto',
      }}
    >
      <Card
        cover={
          <div className={'userImageContainer'}>
            <img
              alt={data.name}
              src={'/images/dummy.jpg'}
              className={'userImage'}
            />
          </div>
        }
        actions={[
          !isFavorite ? (
            <HeartOutlined
              style={{
                color: 'red',
              }}
              onClick={handleHeartClick}
              key='like'
            />
          ) : (
            <HeartFilled
              style={{
                color: 'red',
              }}
              onClick={handleHeartClick}
              key='like'
            />
          ),
          <EditOutlined onClick={handleEditBtnClick} key='edit' />,
          <DeleteFilled onClick={() => onDelete(data.id)} key='delete' />,
        ]}
      >
        <Meta
          title={data.name}
          description={[
            <div className='descriptionText' key='email'>
              <span className='descriptionIcon'>
                <MailOutlined />
              </span>
              <span className='descriptionText'>{data.email}</span>
            </div>,
            <div className='descriptionText' key='number'>
              <span className={'descriptionIcon'}>
                <PhoneOutlined />
              </span>
              <span>{data.phone}</span>
            </div>,
            <div className={'descriptionText'} key='website'>
              <span className={'descriptionIcon'}>
                <GlobalOutlined />
              </span>
              <span className={'descriptionText'}>{data.website}</span>
            </div>,
          ]}
        />
      </Card>
      <Modal>
        <div
          style={{
            width: '100%',
            maxWidth: '500px',
            marginInline: 'auto',
            marginTop: '24px',
          }}
        >
          <Form
            {...layout}
            name='nest-messages'
            onFinish={onFinish}
            validateMessages={validateMessages}
          >
            <Form.Item
              name={['user', 'name']}
              label='Name'
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={['user', 'email']}
              label='Email'
              rules={[{ type: 'email', required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={['user', 'phone']}
              label='Phone Number'
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={['user', 'website']}
              label='Website'
              rules={[{ type: 'url', required: true }]}
            >
              <Input />
            </Form.Item>
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
              }}
            >
              <Button
                htmlType='button'
                onClick={() => {
                  setModalOpen(false);
                }}
              >
                Cancel
              </Button>
              <Button
                htmlType='submit'
                style={{
                  marginLeft: '16px',
                }}
                type='primary'
              >
                OK
              </Button>
            </div>
          </Form>
        </div>
      </Modal>
    </div>
  );
}