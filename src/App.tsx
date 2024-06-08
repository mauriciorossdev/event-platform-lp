import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Navbar from './components/navbar';
import Button from './components/button';
import FeatureItem from './components/featureItem';
import Bubble from './components/bubble';



function App() {
  const features = [
    {
      icon: '01',
      title: 'Event Metrics',
      description: 'Track your ticket sales, attendees count and more with much ease.',
      color: 'secondary'
    },
    {
      icon: '02',
      title: 'Registration & Ticketing',
      description: 'Manage your Event registrations and ticket sales easier and receive payments instantly.',
      color: 'primary'

    },
    {
      icon: '03',
      title: 'Branded Badges',
      description: 'Create your custom branded badges for your events and get them printed.',
      color: 'secondary'

    },
    {
      icon: '04',
      title: 'Oragniser App',
      description: 'Manage your events at the palm of your hand with our Oragniser App.',
      color: 'primary'

    },
    {
      icon: '05',
      title: 'Attendee Engagement',
      description: 'Engage with your attendees via email, surveys and much more.',
      color: 'secondary'

    },
    {
      icon: '06',
      title: 'Add to Calendar',
      description: 'Effortless way to add your events to registered users calendars by 1-click.',
      color: 'primary'

    }
  ]

  const integrations = [
    {
      logo: 'slack',
      name: 'Slack'
    },
    {
      logo: 'qb',
      name: 'qb'
    },
    {
      logo: 'mailchimp',
      name: 'Mailchimp'
    },
    {
      logo: 'hubspot',
      name: 'Hubspot'
    },
    {
      logo: 'orange',
      name: 'orange'
    },
    {
      logo: 'analytics',
      name: 'analytics'
    },
    {
      logo: 'msc',
      name: 'msc'
    },

  ]
  return (
    <div className="App">
      <div className="hero ">
        <Navbar></Navbar>
        <div className='hero__content'>
          <div className='hero__content-text'>
            <h1 className='text-display-2xl'>
              Event Registration
              Reimagined
            </h1>
            <p className='text-body-lg'>
              Manage your event registrations hassle free and without any dependency with the technical team. Isn’t it sounds amazing?
            </p>
            <Button text="Get Early Access" size="lg" onClick={() => console.log('click early access')} />
          </div>
          <div className='hero__content-mockup relative'>
            <div className='absolute hero__circle-bg'></div>

            <img src="/mockups.svg" alt="mockups" />
          </div>
        </div>
      </div>
      <div className='content'>
        <div className='content__video'>
          <h2>All-in-one Event Platform</h2>
          <p>Deliver an exceptional event experience</p>
          <img src='Video.svg'></img>
        </div>
        <div className="content__features">
          {
            features.map((feature, index) => {
              return <FeatureItem key={index} {...feature} />
            })
          }
        </div>
      </div>

      <div className='integrations'>
        <div className='absolute integrations__circle-bg'></div>

        <div className="integrations__text ">
          <h2 className='text-display-xl mt-0'>Integrate with your
            favorite tools</h2>
          <p className='text-body-lg'>Connect RegiM with your most favorite sales and marketing tools</p>
        </div>
        <div className="integrations__apps ">
          {
            integrations.map((integration, index) => {
              return <Bubble key={index} integration={integration} index={index} />
            })
          }
        </div>
      </div>

      <div className="cta bg-neutral-900">
        <div className="container">
          <div className="content">
            <h3 className='text-display-lg color-white text-center'>Create your event with RegiM</h3>
            <p className='text-body-lg color-white text-center'>Leveraging our virtual and live event experience, Hubilo offers everything you need to set up your next hybrid event from registration to executing a flawless event.</p>

          </div>
          <Button text="Get Early Access" size="lg" onClick={() => console.log('click get started')} />
        </div>
      </div>
      <footer className='footer bg-neutral-900'>
          <div className='footer__logo_divider'>
            <div className="divider">
              <div className='img_container bg-neutral-900'>
              <img src="logo_default.png" alt="logo" />
              </div>

            </div>
          </div>
          <div className='footer__text'>
            <p className='text-body-sm color-primary-100'>© RegiM 2022. Made with love by <strong>Landify</strong></p>
            <p className='text-body-sm color-primary-100'>For further details, drop a mail to hello@landify.design</p>
          </div>
      </footer>
    </div>
  );
}

export default App;
