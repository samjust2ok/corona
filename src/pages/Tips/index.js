import React from 'react';
import './styles.css';

const Tips = () => (
  <div className='max-width'>
    <section className='tips-section'>
      <h1 className='tips-header'>Coronavirus Prevention Tips.</h1>
      <h3 className='desc'>
        The best way to stop Coronavirus from growing is by reducing our
        contacts with infected people. Below are some of the guidelines you
        should follow to keep yourself and others safe.
      </h3>
      <div className='tips-content'>
        <div className='tip'>
          <h3 className='tip-header'>Wash your hands frequently</h3>
          <p>
            Regularly and thoroughly clean your hands with an alcohol-based hand
            rub or wash them with soap and water.
          </p>

          <h4>Why?</h4>
          <p>
            Washing your hands with soap and water or using alcohol-based hand
            rub kills viruses that may be on your hands.
          </p>
        </div>
        <div className='tip'>
          <h3 className='tip-header'>Maintain social distancing</h3>
          <p>
            When someone coughs or sneezes they spray small liquid droplets from
            their nose or mouth which may contain virus. If you are too close,
            you can breathe in the droplets, including the COVID-19 virus if the
            person coughing has the disease.
          </p>
          <h4>Why?</h4>
          <p>
            Washing your hands with soap and water or using alcohol-based hand
            rub kills viruses that may be on your hands.
          </p>
        </div>
        <div className='tip'>
          <h3 className='tip-header'>
            Avoid touching your hands, nose and mouth.
          </h3>
          <h4>Why?</h4>
          <p>
            Hands touch many surfaces and can pick up viruses. Once
            contaminated, hands can transfer the virus to your eyes, nose or
            mouth. From there, the virus can enter your body and can make you
            sick.
          </p>
        </div>
        <div className='tip'>
          <h3 className='tip-header'>Practice Respiratory Hygiene</h3>
          <p>
            Make sure you, and the people around you, follow good respiratory
            hygiene. This means covering your mouth and nose with your bent
            elbow or tissue when you cough or sneeze. Then dispose of the used
            tissue immediately.
          </p>
          <h4>Why?</h4>
          <p>
            Droplets spread virus. By following good respiratory hygiene you
            protect the people around you from viruses such as cold, flu and
            COVID-19.
          </p>
        </div>
        <div className='tip'>
          <h3 className='tip-header'>
            If you have fever, cough and difficulty breathing, seek medical care
            early
          </h3>
          <p>
            Stay home if you feel unwell. If you have a fever, cough and
            difficulty breathing, seek medical attention and call in advance.
            Follow the directions of your local health authority.
          </p>
          <h4>Why?</h4>
          <p>
            National and local authorities will have the most up to date
            information on the situation in your area. Calling in advance will
            allow your health care provider to quickly direct you to the right
            health facility. This will also protect you and help prevent spread
            of viruses and other infections.
          </p>
        </div>
        <div className='tip'>
          <h3 className='tip-header'>
            Stay informed and follow advice given by your healthcare provider.
          </h3>
          <p>
            Stay informed on the latest developments about COVID-19. Follow
            advice given by your healthcare provider, your national and local
            public health authority or your employer on how to protect yourself
            and others from COVID-19.
          </p>
          <h4>Why?</h4>
          <p>
            National and local authorities will have the most up to date
            information on whether COVID-19 is spreading in your area. They are
            best placed to advise on what people in your area should be doing to
            protect themselves.
          </p>
        </div>
      </div>
    </section>
  </div>
);

export default Tips;
