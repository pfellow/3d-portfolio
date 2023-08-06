import React from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from '../styles';
import { IphoneCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

const Contact = () => {
  const formRef = React.useRef();
  const [loading, setLoading] = React.useState(false);
  const [form, setForm] = React.useState({
    name: '',
    organization: '',
    email: '',
    message: '',
    phone: ''
  });

  const formChangeHandler = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_td4vwms',
        'template_cdfdswc',
        {
          from_name: `${form.name} - ${form.organization}`,
          to_name: 'Sergey Shilovskiy',
          from_email: form.email,
          to_email: 'pfellow@proton.me',
          message: `${form.message} Contact phone: ${form.phone}`
        },
        'X4QinzKCOooCWBQEV'
      )
      .then(() => {
        setLoading(false);
        alert('Thank you! I will get back too you soon.');
        setForm({
          name: '',
          organization: '',
          email: '',
          message: '',
          phone: ''
        });
      }),
      (error) => {
        setLoading(false);
        alert('Something went wrong... Please try again later.');
        console.log(error);
      };
  };

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-5 overflow-hidden'>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl min-w-[35%]'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>
        <form
          ref={formRef}
          onSubmit={formSubmitHandler}
          className='mt-12 flex flex-col gap-4'
        >
          <label className='flex flex-col'>
            <span className='text-white form-medium mb-1'>Your Name</span>
            <input
              type='text'
              name='name'
              required
              value={form.name}
              onChange={formChangeHandler}
              placeholder="What's your name?"
              className='bg-tertiary py-3 px-4 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-meduim'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white form-medium mb-1'>
              Your Organization (optional)
            </span>
            <input
              type='text'
              name='organization'
              value={form.organization}
              onChange={formChangeHandler}
              placeholder="What's your organization?"
              className='bg-tertiary py-3 px-4 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-meduim'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white form-medium mb-1'>Your Email</span>
            <input
              type='email'
              name='email'
              required
              value={form.email}
              onChange={formChangeHandler}
              placeholder="What's your email?"
              className='bg-tertiary py-3 px-4 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-meduim'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white form-medium mb-1'>
              Your Phone (optional)
            </span>
            <input
              type='phone'
              name='phone'
              value={form.phone}
              onChange={formChangeHandler}
              placeholder="What's your phone number?"
              className='bg-tertiary py-3 px-4 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-meduim'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white form-medium mb-1'>Your Message</span>
            <textarea
              rows='5'
              name='message'
              required
              value={form.message}
              onChange={formChangeHandler}
              placeholder='Type your message'
              className='bg-tertiary py-3 px-4 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-meduim resize-none'
            />
          </label>
          <button
            type='submit'
            className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 0.5)}
        className='xl:flex-1 xl:h-[600px] sm:h-[550px] h-[400px] xl:max-w-[65%]'
      >
        <IphoneCanvas />
      </motion.div>
    </div>
  );
};

const ContactSection = SectionWrapper(Contact, 'contact');

export default ContactSection;
